[![npm](https://img.shields.io/npm/v/vuub?style=flat-square&color=blue)](https://www.npmjs.com/package/vuub)

# Very Useful Utility Box (vuub)

<p align="center">
    <b>
        Very useful utility box (vuub) is a set of simple, yet useful utilities for developers. 
    </b><br>
    Available on <b> npm: https://www.npmjs.com/package/vuub. </b>
</p>

## Instalation

As of now, vuub can only be installed using <b>npm</b>. To install vuub, simply run:

```bash
$ npm install vuub
```

## Usage Guide

Vuub contanins functions like `getPrimeFactors`, `generateRandomId`, `isEvenNumber` and more! The aim of this is to help you save your time, and let you code parts that matter and not what you have already coded a million times.

You can find a full guide on how to use vuub [here](https://studentzone.gitbook.io/vuub/the-basics/introduction-to-vuub).

## Contributing

If you have an idea for a useful utility and even have the code for it, make a fork of the project and then add a seperate script for your utility inside the correct category folder. For example, if you are making an array utility it would go in `utilities/arrays/(utility name here).js`. Then, link it in the `index.js` file like the other utilities are linked (require it and then add it to the module.exports at the bottom). Once done, make a PR and we will review your contribution!

If you only have an idea for a utility and not the code, open an issue that begins with `[Suggestion]` and then write your suggestion there.

# Latest Updates (0.3.2)

- Added the `convertToUnixTimestamp` function, which lets you convert any numbered Javascript date, into a unix timestamp.
- Updated documentation to include examples for asynchronous and synchronous versions of each utility.
- Updated GitHub README.md file.
- Optimized utilities and package.