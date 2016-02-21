import {TestClass} from '../src/example';
import * as chai from 'chai';

let expect = chai.expect;

describe('sample test', () => {
  let test = new TestClass();

  it('should pass', () => {
    expect(test.returnsOne()).to.equal(1);
  });

  it('should fail', () => {
    expect(test.returnsOne()).to.equal(2);
  })
});