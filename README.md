<p align="center">

   <img alt="GitHub package.json version (branch)" src="https://img.shields.io/github/package-json/v/dinushchathurya/srilankan-provinces-districts-npm-package/master">
   <img alt="GitHub release (latest by date including pre-releases)" src="https://img.shields.io/github/v/release/dinushchathurya/srilankan-provinces-districts-npm-package?include_prereleases">
   <img alt="Libraries.io dependency status for GitHub repo" src="https://img.shields.io/librariesio/github/dinushchathurya/srilankan-provinces-districts-npm-package">
    <a href="https://circleci.com/gh/badges/shields/tree/master">
            <img src="https://img.shields.io/circleci/project/github/badges/shields/master" alt="build status">
    </a>
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

# Provinces Districts

This provides all the Provinces and Districts in Sri Lanka

## Add it
```
$ npm i srilankan-provinces-districts --save
```
```javascript
var provinceDistricts = require('srilankan-provinces-districts');
```

## Usage

### Get all Srilankan Provinces
```javascript
// Get All Provinces 
var provinces = provinceDistricts.getProvinces();
```
### Retrieve an array of all Districts in particular Province
```javascript
// Case insensitive
var districts = provinceDistricts.getDistricts("Western");
// or 
var districts = provinceDistricts.getDistricts("southern");
```
<p align="center">
    <a href="https://www.patreon.com/bePatron?u=35199964" target="_blank">
        <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patreon">
    </a>
</p>
