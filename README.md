# romaji-fuzzy-search

![Run tests](https://github.com/kjirou/romaji-fuzzy-search/workflows/Run%20tests/badge.svg)

This module generates a regular expression for "Romaji Fuzzy Search".

## :thinking: "Romaji Fuzzy Search"?

It's an original concept.

Allows you to search Japanese Hiragana and Katakana from a query consisting of alphabets.

## :rocket: Installation

```
npm install romaji-fuzzy-search
```

## :cat: Usage

```js
const {convertToRegExp} = require('romaji-fuzzy-search')
const query = 'kyayaak'
const regExp = convertToRegExp('kyayaak')  // -> "(?:kya|きゃ|キャ)(?:ya|や|ヤ)(?:a|あ|ア)k"
const matcher = new RegExp(regExp, 'i')  // I think it's better to specify the "i" option.
```
