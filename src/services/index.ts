/**
 * Re-export all services for easy import
 */
export {
    getAllProvinces,
    getProvince,
    getProvinceNames
} from './province.service';

export {
    getAllDistricts,
    getDistrictsByProvince,
    getDistrictNamesByProvince
} from './district.service';