# romaji-kensaku

![Run tests](https://github.com/kjirou/romaji-kensaku/workflows/Run%20tests/badge.svg)

This module generates a regular expression for "Romaji Fuzzy Search".

## :thinking: "Romaji Fuzzy Search"?

It's a original concept.

Allows you to search Japanese Hiragana and Katakana from a query consisting of alphabets.

## :rocket: Installation

```
npm install romaji-kensaku
```

## :cat: Usage

```js
const {convertToRegExp} = require('romaji-kensaku')
const query = 'kyayaak'
const regExp = convertToRegExp('kyayaak')  // -> "(?:kya|きゃ|キャ)(?:ya|や|ヤ)(?:a|あ|ア)k"
const matcher = new RegExp(regExp, 'i')  // I think it's better to specify the "i" option.
```
