var provinces = require('./data/provinces').provinces;

//Get Districts Based On Province Input
exports.getDistricts = function (province) {
    province = province.trim().toUpperCase();
    if (!provinces[province]) {
        return null;
    } else {
        return provinces[province][district];
    }
};

//Get All Provinces
exports.getProvinces = function () {
    if (provinces) {
        return Object.keys(provinces);
    } else {
        return null;
    }
};
