import { expect } from 'chai';
import 'mocha';

describe('First test', () => {
  before(function () {
    // runs once before the first test in this block
  });

  after(function () {
    // runs once after the last test in this block
  });

  beforeEach(function () {
    // runs before each test in this block
  });

  afterEach(function () {
    // runs after each test in this block
  });

  it('should be return 3 with a: 1 b:2', () => {
    let a = 1;
    let b = 2;
    expect(a + b).to.equal(3);
  });
})