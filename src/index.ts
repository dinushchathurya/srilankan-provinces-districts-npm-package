/**
 * Sri Lankan Provinces and Districts
 * A TypeScript package providing data for Sri Lankan geographic divisions
 * 
 * @author Dinush Chathurya
 * @license MIT
 */

// Export types
export { Province, District } from './types';

// Export data (for direct access)
export { provinces, districts } from './data';

// Export services (modern API)
export {
    getAllProvinces,
    getProvince,
    getAllDistricts,
    getDistrictsByProvince
} from './services';

// Export compatibility layer (v1.x API)
export {
    getProvinces,
    getDistricts,
    provinces as provinces_data
} from './compatibility';

// Default export for CommonJS compatibility
import { legacyAPI } from './compatibility';
export default legacyAPI;