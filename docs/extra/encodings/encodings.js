class Encodings {
  constructor() {
    this.debug = false;
  }
  fromJson(json, off) {
    return new JsonGrid(json, off, this.debug);
  }
  fromArray(arr, off) {
    return new ArrayGrid(arr, off, this.debug);
  }
  fromArrayOfArrays(arr, off) {
    let arr2 = [];
    arr.forEach(row => {
      arr2.push(row.join(''));
    });
    return new ArrayGrid(arr2, off, this.debug);
  }
  fromModel(model, activeCallback) {
    const arr = model.toArray(activeCallback);
    return new ArrayGrid(arr, '0', this.debug);
  }
  fromCGV1(cgv1) {
    return new (this.cgv1class(cgv1))(cgv1, this.debug);
  }
  fromCGV1base36(cgv1) {
    return new CGV1GridBin2Base36(cgv1, this.debug);
  }
  fromCGV1grp(cgv1) {
    return new CGV1GridGrp(cgv1, this.debug);
  }
  cgv1class(cgv1) {
    const parts = cgv1.split('-');
    if (parts.length === 5 && parts[0] === 'cg' && parts[1] === 'v1') {
      if (parts[2] === 'bin2base36') {
        return CGV1GridBin2Base36;
      } else if (parts[2] === 'grp') {
        return CGV1GridGrp;
      }
    }
    throw new Error('Invalid CGV1 format ' + cgv1);
  }
}

class Grid {
  constructor(arr, off = '0', debug = false) {
    this.arr = arr;
    this.off = off;
    this.d = debug;
  }
  trim() {
    const untrimmed = this.toArray('0', '1');
    let trimFromTop = 0;
    let trimFromBottom = 0;
    let trimFromLeft = 0;
    let trimFromRight = 0;
    for (let row of untrimmed) {
      if (row === this.off.repeat(row.length)) {
        trimFromTop++;
      } else {
        break;
      }
    }
    for (let row of untrimmed.slice().reverse()) {
      if (row === this.off.repeat(row.length)) {
        trimFromBottom++;
      } else {
        break;
      }
    }
    for (let col = 0; col < untrimmed[0].length; col++) {
      if (untrimmed.every(row => row[col] === this.off)) {
        trimFromLeft++;
      } else {
        break;
      }
    }
    for (let col = untrimmed[0].length - 1; col >= 0; col--) {
      if (untrimmed.every(row => row[col] === this.off)) {
        trimFromRight++;
      } else {
        break;
      }
    }
    const trimmed = untrimmed
      .slice(trimFromTop, untrimmed.length - trimFromBottom)
      .map(row => row.slice(trimFromLeft, row.length - trimFromRight));
    return new ArrayGrid(trimmed, this.off, this.d);
  }
  height() {
    return this.arr.length;
  }
  width() {
    return this.cols();
  }
  toJson(off = '0', on = '1') {
    return JSON.stringify(this.toArray(off, on));
  }
  toArray(off = '0', on = '1') {
    let ret = [];
    this.arr.forEach(row => {
      ret.push(this.processArrayRow(row, off, on));
    });
    return ret;
  }
  toArrayOfArrays(off = '0', on = '1') {
    let ret = [];
    this.arr.forEach(row => {
      ret.push(this.processArrayRow(row, off, on).split(''));
    });
    return ret;
  }
  processArrayRow(row, off, on) {
    return row.split('').map(c => c === this.off ? off : on).join('');
  }
  debug(msg, label = 'debug') {
    if (this.d) {
      console.log(`DEBUG [${label}] ${msg}`);
    }
  }
  toCGV1() {
    const candidates = [this.toCGV1base36(), this.toCGV1grp()];
    let best = candidates[0];
    candidates.forEach(candidate => {
      if (candidate.length < best.length) {
        best = candidate;
      }
    });
    return best;
  }
  toCGV1base36() {
    const binary = this.toBinary();
    this.debug(`Binary representation: ${binary}`);
    const base36 = BinaryParser.binTo36(binary);
    this.debug(`Base36 representation: ${base36}`);
    return 'cg-v1-bin2base36-' + this.cols() + '-' + base36;
  }
  toCGV1grp() {
    const binary = this.toBinary().slice(1); // remove leading 1
    let curr = 0;
    let num = '0';
    let ret = [];
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === num) {
        curr++;
      } else {
        ret.push(curr);
        num = num === '0' ? '1' : '0';
        curr = 1;
      }
    }
    ret.push(curr);
    return 'cg-v1-grp-' + this.cols() + '-' + ret.join('*');
  }
  toBinary() {
    return '1' + this.toArray('0', '1').join('').replace(/0+$/, '');
  }
  cols() {
    if (!this.toArray('0', '1').length) {
      return 0;
    }
    return this.toArray('0', '1')[0].length;
  }
}

class JsonGrid extends Grid {
  constructor(json, off = '0', debug = false) {
    super(JSON.parse(json), off, debug);
  }
}

class ArrayGrid extends Grid {
}

class BinaryParser {
  static binTo36(bin) {
    const maxLen = 50; // otherwise it gets imprecise.
    const regex = new RegExp(`.{1,${maxLen}}`, 'g');
    const rows = bin.match(regex);
    let parsed = [];
    rows.forEach(row => {
      // Adding 1 because in our case 00001 is different from 1, but parseInt would treat them the same. By adding 1, we ensure that leading zeros are preserved in the base36 representation.
      const p = parseInt('1' + row.toString(), 2).toString(36);
      parsed.push(p);
    });
    return parsed.join('*');
  }
  static base36ToBin(base36) {
    const parts = base36.split('*');
    let bin = '';
    parts.forEach(part => {
      const p = parseInt(part, 36).toString(2).substring(1);
      bin += p;
    });
    return bin;
  }
  static base36ToDec(base36) {
    const parts = base36.split('*');
    let bin = '';
    parts.forEach(part => {
      const p = parseInt(part, 36).toString(10);
      bin += p;
    });
    return bin;
  }
  static selfTest() {
    [
      {
        bin: '1101010101',
      },
      {
        bin: '100000000011000011011000',
      },
      {
        bin: '11111111111111111111111111111',
      },
      {
        bin: '11111111111111111111111111111111111111111111111111111',
      },
      {
        bin: '11111111111111111111111111111111111111111111111111111010101',
      },
      {
        bin: '1111111111111111111111111111111111111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010101',
      },
      {
        bin: '11111111111111111111111111111111111111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101011111111111111111111111111111111111111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010101111111111111',
      },
      {
        bin: '1111111111111111111111111111111111111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010101111111111111111111111111111111111111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101010111111111111111111111111111111111111111111111111111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101011111111111111111111111111111111111111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010101111111111111',
      },
      {
        bin: '11111111111111111111111111111111111111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101011111111111111111111111111111111111111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010101111111111111111111111111111111111111111111111111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101010111111111111111111111111111111111111111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101011111111111111111111111111111111111111111111111111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010101111111111111111111111111111111111111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101010111111111111111111111111111111111111111111111111111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101011111111111111111111111111111111111111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010111111111111111111110101111111111111111111101011111111111111111111010101111111111111',
      },
    ].forEach(test => {
      const bin = test.bin;
      const b2b36 = BinaryParser.binTo36(bin);
      console.log(bin);
      console.log(b2b36);
      const b36b = BinaryParser.base36ToBin(b2b36);
      if (bin != b36b) {
        console.error(`Error: base36ToBin failed for ${bin}. Expected ${bin}, got ${b36b}`);
      }
    });
  }
}

class CGV1GridBin2Base36 extends Grid {
  constructor(cgv1, debug = false) {
    const parts = cgv1.split('-');
    let binary;
    let rows = [];
    if (parts.length === 5 && parts[0] === 'cg' && parts[1] === 'v1' && parts[2] === 'bin2base36') {
      const cols = parseInt(parts[3]);
      const encoded = parts[4];
      binary = BinaryParser.base36ToBin(encoded);
      const regex = new RegExp(`.{1,${cols}}`, 'g');
      rows = binary.slice(1).match(regex);
      const last = rows.pop();
      rows.push(last.padEnd(cols,'0'));
    }
    else {
      throw new Error('Invalid CGV1 format ' + cgv1);
    }
    super(rows, '0', debug);
    this.debug(binary, 'cgv1 binary');
  }
}

class CGV1GridGrp extends Grid {
  constructor(cgv1, debug = false) {
    const parts = cgv1.split('-');
    let binary;
    let rows = [];
    if (parts.length === 5 && parts[0] === 'cg' && parts[1] === 'v1' && parts[2] === 'grp') {
      const cols = parseInt(parts[3]);
      const encoded = parts[4];

      let binary = '1';
      let num = '0';
      encoded.split('*').forEach(part => {
        for (let i = 0; i < part; i++) {
          binary += num;
        }
        num = num === '0' ? '1' : '0';
      });

      const regex = new RegExp(`.{1,${cols}}`, 'g');
      rows = binary.slice(1).match(regex);
      const last = rows.pop();
      rows.push(last.padEnd(cols,'0'));
    }
    else {
      throw new Error('Invalid CGV1grp format ' + cgv1);
    }
    super(rows, '0', debug);
    this.debug(binary, 'cgv1 binary');
  }
}

class EncodingsTest {

  static test() {

    const e = new Encodings();
    e.debug = true; //debug mode

    [
      {
        a: [
          '....x',
          'x.x.x',
          'x.x.x',
          'x.x.x',
          '....y',
          'x....',
        ],
        off: '.',
      },
      {
        a: [
          '00000000011000011011',
          '00000000011000011011',
          '00000000011000011011',
          '00000000011000011011',
          '00000000011000011011',
          '00000000011000011011',
          '00000000011000011011',
          '00000000011000011011',
          '00000000011000000000',
        ],
        off: '0',
      },
      {
        a: [
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
          '0000000001100001101100000000011000011011',
        ],
        off: '0',
      },
      {
        a: [
          '0000000000001111111111111111111111111111',
          '1111111111111111111111111111111111111111',
          '1111111111111111111111111111111111111111',
          '1111111111111111111111111111111111111111',
          '1111111111111111111111111111111111111111',
          '1111111111111111111111111111111111111111',
          '1111111111111111111111111111111111111111',
          '1111111111111111111111111111111111111111',
          '1111111111111111111111111111111111111111',
          '1111111111111111111111111111111111111111',
          '1111111111111111111111111111111111111111',
          '1111111111111111111111111111111111111111',
          '1111111111111111111111111111111111111111',
          '1111111111111111111111111111111111111111',
          '1111111111111111111111111111111111111111',
          '1111111111111111111111111111111111111111',
        ],
        off: '0',
      },
    ].forEach(data => {
      const arr = data.a;
      const off = data.off;

      console.log('Original array:');
      console.log(arr);
      const a = e.fromArray(arr, off);
      console.log('to JSON:');
      console.log(a.toJson('.', '*'));
      console.log(a.toJson('A', 'B'));
      console.log(a.toJson('0', '1'));
      console.log('to Array:');
      console.log(a.toArray('.', '*'));
      console.log(a.toArray('0', '1'));
      console.log('to cols:');
      console.log(a.cols());
      console.log('to CGV1:');
      const cgv1 = a.toCGV1()
      console.log(cgv1);
      console.log('to Binary:');
      console.log(a.toBinary());
      console.log('CGV1 to binary:');
      console.log(e.fromCGV1(cgv1).toBinary());
      console.log('CGV1 to array:');
      const cgv1array = e.fromCGV1(cgv1).toArray('0', '1')
      console.log(cgv1array);
      console.log('CGV1 to cgv1-grp:');
      const cgv1grp = e.fromCGV1(cgv1).toCGV1grp()
      console.log('**************');
      console.log(cgv1grp);
      console.log(cgv1);
      console.log('More efficient CGV1 encoding:');
      if (cgv1grp.length < cgv1.length) {
        console.log('CGV1grp is more efficient than CGV1');
      } else {
        console.log('CGV1grp is not more efficient than CGV1');
      }
      console.log('**************');
      console.log('cgv1-grp to cgv1:');
      const cgv1test = e.fromCGV1grp(cgv1grp).toCGV1()
      console.log(cgv1);
      if (JSON.stringify(arr) !== JSON.stringify(cgv1array)) {
        console.error('Error: CGV1 round-trip failed');
        console.log(arr);
        console.log(cgv1array);
      } else {
        console.log('CGV1 round-trip successful');
      }
      if (cgv1test !== cgv1) {
        console.error('Error: CGV1 round-trip failed');
        console.log(cgv1test);
        console.log(cgv1);
      } else {
        console.log('CGV1 round-trip successful');
      }
    });
  }

}
