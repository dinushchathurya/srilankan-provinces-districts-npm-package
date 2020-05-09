# Provinces Districts
--------------
This provides all the Provinces and Districts in Sri Lanka

## Add it

1. ```$ npm i srilankan-provinces-districts --save
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
var districts = provinceDistricts.getDistricts("Southern");
```

