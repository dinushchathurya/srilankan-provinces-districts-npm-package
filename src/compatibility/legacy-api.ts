import { legacyProvinces } from '../data';
import { getProvinceNames, getDistrictNamesByProvince } from '../services';

/**
 * Legacy API for backward compatibility with v1.x
 */

/**
 * Get all provinces (v1.x API method)
 * Returns an array of province names
 * @returns Array of province names
 */
export function getProvinces(): string[] {
  return getProvinceNames();
}

/**
 * Get districts in a province (v1.x API method)
 * Returns an array of district names
 * @param province Province name
 * @returns Array of district names
 */
export function getDistricts(province: string): string[] {
    if (!province || typeof province !== 'string') {
        return [];
    }
    
    return legacyProvinces[province]?.district || [];
}

/**
 * Export the original data structure for maximum compatibility
 */
export { legacyProvinces as provinces };

/**
 * Default export for CommonJS compatibility
 */
export const legacyAPI = {
    getProvinces,
    getDistricts,
    provinces: legacyProvinces
};