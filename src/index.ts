/**
 * Sri Lankan Provinces and Districts
 * A TypeScript package providing data and utilities for Sri Lankan geographic divisions
 * 
 * @author Dinush Chathurya
 * @license MIT
 */

import { provinces } from './data/provinces';
import { districts } from './data/districts';
import { Province, District } from './types';
import { legacyProvinces } from './legacy-compatibility';

/**
 * Returns all provinces in Sri Lanka
 * @returns Array of all provinces
 */
export const getProvinces = (): Province[] => {
    return provinces;
};

/**
 * Returns a province by its name or ID
 * @param nameOrId - The name or ID of the province
 * @returns The province or undefined if not found
 */
export const getProvince = (nameOrId: string): Province | undefined => {
    if (!nameOrId) return undefined;
    
    const normalizedInput = nameOrId.toLowerCase();
    return provinces.find(
        (province) => 
        province.id === normalizedInput || 
        province.name.toLowerCase() === normalizedInput
    );
};

/**
 * Returns all districts in Sri Lanka
 * @returns Array of all districts
 */
export const getAllDistricts = (): District[] => {
    return districts;
};

/**
 * Returns all districts within a specific province
 * @param provinceName - The name or ID of the province
 * @returns Array of districts in the province or empty array if province not found
 */
export const getDistricts = (provinceName: string): District[] => {
    if (!provinceName) return [];
    
    const province = getProvince(provinceName);
    
    if (!province) {
        return [];
    }
    
    return districts.filter(
        (district) => district.provinceId === province.id
    );
};

// Legacy compatibility - support for applications still using the old API
export const provinces_data = legacyProvinces;

// Re-export types
export { Province, District };

// Legacy CommonJS compatibility layer
const legacyExport = {
    getProvinces: (province?: string) => {
        if (!province) {
        return Object.keys(legacyProvinces);
        }
        return null;
    },
    getDistricts: (province: string) => {
        try {
        return legacyProvinces[province]?.district || [];
        } catch (e) {
        return [];
        }
    },
    provinces: legacyProvinces
};

// Export as default for CommonJS compatibility
export default legacyExport;