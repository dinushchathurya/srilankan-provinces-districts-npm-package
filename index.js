var provinces = require('./data/provinces').provinces;

//Get Districts Based On Province Input
exports.getDistricts = function (province) { 
    if (provinces) { 
        return provinces[province]['district'] 
    } else { 
        return null; 
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
