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

# Sri Lankan Provinces & Districts

This package provides all Provinces and Districts in Sri Lanka, now with TypeScript support.

## Features

- ✅ Full TypeScript support with type definitions
- ✅ ES Modules and CommonJS support (dual package)
- ✅ Complete data for all 9 provinces and 25 districts
- ✅ Case-insensitive lookup for provinces and districts
- ✅ Zero dependencies
- ✅ Backward compatible with v1.x

## Installation

```bash
npm i srilankan-provinces-districts --save
```

## Usage

### Original API (backward compatible)

```javascript
// CommonJS
const provinceDistricts = require('srilankan-provinces-districts');

// Get All Provinces (returns array of province names)
var provinces = provinceDistricts.getProvinces();

// Get Districts in Western Province (returns array of district names)
var districts = provinceDistricts.getDistricts("Western");
```

### New TypeScript API

```typescript
// ES Modules
import { 
  getProvince, 
  getAllProvinces, 
  getAllDistricts, 
  getDistrictsByProvince,
  Province,
  District
} from 'srilankan-provinces-districts';

// Get all provinces with full data
const provinces: Province[] = getAllProvinces();

// Get a specific province
const western: Province | undefined = getProvince('Western');
console.log(western?.code); // "WP"

// Get all districts
const allDistricts: District[] = getAllDistricts();

// Get districts in Western province
const westernDistricts: District[] = getDistrictsByProvince('Western');
```

## API Reference

### Original API

#### `getProvinces()`

Returns an array of all province names in Sri Lanka.

```javascript
const provinces = getProvinces();
// ["Western", "Central", "Southern", "Northern", "Eastern", ...]
```

#### `getDistricts(provinceName)`

Returns an array of all district names in a specific province.

```javascript
const districts = getDistricts("Western");
// ["Colombo", "Gampaha", "Kalutara"]
```

### New TypeScript API

#### `getAllProvinces()`

Returns an array of all provinces with full data.

```typescript
interface Province {
  id: string;    // e.g., "western"
  name: string;  // e.g., "Western"
  code: string;  // e.g., "WP"
}

const provinces = getAllProvinces();
// [{ id: "western", name: "Western", code: "WP" }, ...]
```

#### `getProvince(nameOrId)`

Returns a province by name or ID (case-insensitive).

```typescript
const province = getProvince("Western"); // Also works with "western" or "WESTERN"
// { id: "western", name: "Western", code: "WP" }
```

#### `getAllDistricts()`

Returns an array of all districts with full data.

```typescript
interface District {
  id: string;        // e.g., "colombo"
  provinceId: string; // e.g., "western"
  name: string;      // e.g., "Colombo"
  code: string;      // e.g., "CMB"
}

const districts = getAllDistricts();
// [{ id: "colombo", provinceId: "western", name: "Colombo", code: "CMB" }, ...]
```

#### `getDistrictsByProvince(provinceNameOrId)`

Returns an array of districts in a specific province.

```typescript
const westernDistricts = getDistrictsByProvince("Western");
// [
//   { id: "colombo", provinceId: "western", name: "Colombo", code: "CMB" },
//   { id: "gampaha", provinceId: "western", name: "Gampaha", code: "GMP" },
//   { id: "kalutara", provinceId: "western", name: "Kalutara", code: "KLT" }
// ]
```

## Contributing

Pull requests are welcome! Feel free to contribute to this project.

## License

MIT

<p align="center">
    <a href="https://www.patreon.com/bePatron?u=35199964" target="_blank">
        <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patreon">
    </a>
</p>
