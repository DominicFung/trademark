import 'mocha';
import { assert } from 'chai';

import { isTrademarked } from '../src/index'
import npmPackage from '../src/index'

describe('NPM Package', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a isTrademarked property', () => {
    assert.property(npmPackage, 'isTrademarked');
  });
});

describe('isTrademarked', () => {
  it('empty string should return false', async () => {
    assert.equal(await isTrademarked(""), false)
  })

  it('"pikachu" should be trademarked.', async () => {
    assert.equal(await isTrademarked("pikachu"), true)
  })

  it('"dominic" should NOT be trademarked.', async () => {
    assert.equal(await isTrademarked("dominic"), false)
  })
})