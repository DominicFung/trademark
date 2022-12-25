import 'mocha';
import { assert } from 'chai';

import TM from '../src/index'
const tm = new TM()

describe('NPM Package', () => {
  it('should be an object', () => {
    assert.isObject(tm);
  });

  it('should have a isTrademarked property', () => {
    assert.property(tm, 'isTrademarked');
  });
});

describe('isTrademarked', () => {
  it('empty string should return false', () => {
    assert.isFalse(tm.isTrademarked(""))
  })

  it('"pikachu" should be trademarked.', () => {
    assert.isTrue(tm.isTrademarked("pikachu"))
  })

  it('"dominic" should NOT be trademarked.', () => {
    assert.isFalse(tm.isTrademarked("dominic"))
  })
})

describe('getTrademarks', () => {
  it('empty string should return false', () => {
    assert.deepEqual(tm.getTrademarks(""), [])
  })

  it('"Pikachu wearing a santa hat" has trademark in it.', () => {
    assert.deepEqual(tm.getTrademarks("Pikachu wearing a santa hat"), ["Pikachu"])
  })

  it('"monstera as a cartoon" does NOT have a trademarkin it.', () => {
    assert.deepEqual(tm.getTrademarks("monstera as a cartoon"), [])
  })
})