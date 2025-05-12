<p align="center">

   <img alt="GitHub package.json version (branch)" src="https://img.shields.io/github/package-json/v/dinushchathurya/srilankan-provinces-districts-npm-package/master">
   <img alt="GitHub release (latest by date including pre-releases)" src="https://img.shields.io/github/v/release/dinushchathurya/srilankan-provinces-districts-npm-package?include_prereleases">
   <img alt="Libraries.io dependency status for GitHub repo" src="https://img.shields.io/librariesio/github/dinushchathurya/srilankan-provinces-districts-npm-package">
    <a href="https://coveralls.io/github/badges/shields">
        <img src="https://img.shields.io/coveralls/github/badges/shields" alt="coverage">
    </a>
    <img src="https://img.shields.io/badge/downloads-1k%2Fmonth-brightgreen">
    <img src="https://img.shields.io/badge/rating-★★★★☆-brightgreen">
    <img src="https://img.shields.io/badge/uptime-100%25-brightgreen">
    <img alt="NPM" src="https://img.shields.io/npm/l/srilankan-provinces-districts">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dinushchathurya/srilankan-provinces-districts-npm-package">
    <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/dinushchathurya/srilankan-provinces-districts-npm-package">
    <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/dinushchathurya/srilankan-provinces-districts-npm-package/total">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/dinushchathurya/srilankan-provinces-districts-npm-package">
    <img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed-raw/dinushchathurya/srilankan-provinces-districts-npm-package">
    <img alt="GitHub milestones" src="https://img.shields.io/github/milestones/all/dinushchathurya/srilankan-provinces-districts-npm-package">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/dinushchathurya/srilankan-provinces-districts-npm-package">
    <img alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FDinushChathurya">
    <img alt="Website" src="https://img.shields.io/website?up_message=online&url=https%3A%2F%2Fdinushchathurya.github.io%2F">
    <img src="https://img.shields.io/badge/made%20with-love%20by%20srilanka-orange">

</p>

# Sri Lankan Provinces & Districts 🇱🇰

![npm version](https://img.shields.io/badge/npm-2.0.0--rc.1-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)
![Compatibility](https://img.shields.io/badge/compatibility-Node.js%20|%20React%20|%20Next.js%20|%20Nest.js-blue)

A modern TypeScript package providing data for all provinces and districts in Sri Lanka.

## 📋 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
  - [CommonJS (Legacy API)](#commonjs-legacy-api)
  - [TypeScript / ES Modules](#typescript--es-modules)
- [API Reference](#-api-reference)
  - [Original API](#original-api)
  - [TypeScript API](#typescript-api)
- [Framework Examples](#-framework-examples)
  - [Node.js](#nodejs)
  - [React](#react)
  - [Next.js](#nextjs)
  - [Nest.js](#nestjs)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

## ✨ Features

- **TypeScript First:** Complete type definitions for enhanced developer experience
- **Dual Package Format:** Both ES Modules and CommonJS support for any project
- **Framework Agnostic:** Works with Node.js, React, Next.js, Nest.js, and more
- **Complete Data:** All 9 provinces and 25 districts of Sri Lanka with metadata
- **Developer Friendly:** Case-insensitive lookups, helpful error handling
- **Zero Dependencies:** Lightweight and clean implementation
- **Backward Compatible:** All v1.x API functions still work

## 📦 Installation

```bash
# Using npm
npm install srilankan-provinces-districts

# Using yarn
yarn add srilankan-provinces-districts

# Using pnpm
pnpm add srilankan-provinces-districts
```

## 🚀 Usage

### CommonJS (Legacy API)

```bash
// CommonJS require syntax
const provinceDistricts = require('srilankan-provinces-districts');

// Get all province names as an array
const provinces = provinceDistricts.getProvinces();
console.log(provinces);
// Output: ["Western", "Central", "Southern", "Northern", "Eastern", ...]

// Get district names in a province
const westernDistricts = provinceDistricts.getDistricts("Western");
console.log(westernDistricts);
// Output: ["Colombo", "Gampaha", "Kalutara"]
```

### TypeScript / ES Modules

```bash
// ES Modules import syntax
import { 
  // Types
  Province, 
  District,
  
  // Functions - Legacy API
  getProvinces, 
  getDistricts,
  
  // Functions - New TypeScript API
  getProvince,
  getAllProvinces, 
  getAllDistricts, 
  getDistrictsByProvince 
} from 'srilankan-provinces-districts';

// Get all provinces with detailed data
const provinces: Province[] = getAllProvinces();
console.log(provinces);
/* Output: 
[
  { id: "western", name: "Western", code: "WP" },
  { id: "central", name: "Central", code: "CP" },
  ...
]
*/

// Get a specific province by name (case-insensitive)
const western: Province | undefined = getProvince('Western');
console.log(western);
/* Output:
{
  id: "western",
  name: "Western",
  code: "WP"
}
*/

// Get districts in Western province with detailed data
const westernDistricts: District[] = getDistrictsByProvince('Western');
console.log(westernDistricts);
/* Output:
[
  { id: "colombo", provinceId: "western", name: "Colombo", code: "CMB" },
  { id: "gampaha", provinceId: "western", name: "Gampaha", code: "GMP" },
  { id: "kalutara", provinceId: "western", name: "Kalutara", code: "KLT" }
]
*/
```

## 📚 API Reference

### Original API

#### getProvinces()

Returns an array of all province names in Sri Lanka.

```bash
const provinces = getProvinces();
// ["Western", "Central", "Southern", "Northern", "Eastern", ...]
```

#### getDistricts(provinceName)
Returns an array of all district names in a specific province.

```bash
const districts = getDistricts("Western");
// ["Colombo", "Gampaha", "Kalutara"]
```

### TypeScript API

#### getProvince(nameOrId)

Returns a province by name or ID (case-insensitive).

```bash
const province = getProvince("Western"); // Also works with "western" or "WESTERN"
// { id: "western", name: "Western", code: "WP" }
```

#### getAllProvinces()

Returns an array of all provinces with full data.

```bash
const provinces = getAllProvinces();
// [{ id: "western", name: "Western", code: "WP" }, ...]
```

#### getAllDistricts()

Returns an array of all districts with full data.

```bash
const districts = getAllDistricts();
// [{ id: "colombo", provinceId: "western", name: "Colombo", code: "CMB" }, ...]
```

#### getDistrictsByProvince(provinceNameOrId)

Returns an array of districts in a specific province.

```bash
const westernDistricts = getDistrictsByProvince("Western");
// [
//   { id: "colombo", provinceId: "western", name: "Colombo", code: "CMB" },
//   { id: "gampaha", provinceId: "western", name: "Gampaha", code: "GMP" },
//   { id: "kalutara", provinceId: "western", name: "Kalutara", code: "KLT" }
// ]
```

## 🖥️ Framework Examples 

<li>[NodeJS Example](https://github.com/dinushchathurya/srilankan-provinces-districts-npm-package-demo/tree/main/node-demo)</li>
<li>[ReactJS Example](https://github.com/dinushchathurya/srilankan-provinces-districts-npm-package-demo/tree/main/react-demo)</li>
<li>[NextJS Example](https://github.com/dinushchathurya/srilankan-provinces-districts-npm-package-demo/tree/main/next-demo)</li>
<li>[NestJS Example](https://github.com/dinushchathurya/srilankan-provinces-districts-npm-package-demo/tree/main/nest-demo)</li>

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

<li>1.Fork the repository</li>
<li>2.Create your feature branch (`git checkout -b feature/amazing-feature`)</li>
<li>3.Commit your changes (`git commit -m 'Add some amazing feature'`)</li>
<li>4.Push to the branch (`git push origin feature/amazing-feature`)</li>
<li>5.Open a Pull Request</li>

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Support

<p align="center">
    <a href="https://www.patreon.com/bePatron?u=35199964" target="_blank">
        <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patreon">
    </a>
     <i class="fa fa-code" style="color:orange;"></i> with <i class="fa fa-heart" style="color:red;"></i> & <i class="fa fa-coffee" style="color:brown"></i> by <a href="https://dinushchathurya.me/"><u style="color:#0193f0;">Dinush Chathurya</u></a><i class="fa fa-user-ninja"></i>
</p>

<p align="center">
     <i class="fa fa-code" style="color:orange;"></i> with <i class="fa fa-heart" style="color:red;"></i> & <i class="fa fa-coffee" style="color:brown"></i> by <a href="https://dinushchathurya.me/"><u style="color:#0193f0;">Dinush Chathurya</u></a><i class="fa fa-user-ninja"></i>
</p>
