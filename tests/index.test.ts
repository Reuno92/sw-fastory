import { expect } from 'chai';
import 'mocha';

describe('First test', () => {
  it('should be return 3 with a: 1 b:2', () => {
    let a = 1;
    let b = 2;
    expect(a + b).to.equal(3);
  });
})