# Trademark Words

A typescript library to find trademarked words.

[![Build Status](https://travis-ci.org/web-mech/badwords.svg?branch=master)](https://travis-ci.org/web-mech/badwords)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

## Requirements

As of version 2, requires you either have an environment that understands ES2016 and beyond or a transpiler like Babel.

## Installation

    npm install @domfung/trademark

## Usage

```js
var TM = require('@domfung/trademark'), tm = new TM();
console.log(tm.clean("pikachu")); //true
```

