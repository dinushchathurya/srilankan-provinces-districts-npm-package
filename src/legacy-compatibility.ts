/**
 * This module provides compatibility with the original package structure.
 * It converts the new flat data structure to the nested format used in v1.x.
 */
import { getProvinces, getDistricts } from './index';
import { provinces } from './data/provinces';
import { Province } from './types';

/**
 * Creates a compatibility layer that mimics the original data structure
 * @returns Record of provinces with nested district arrays
 */
export function createLegacyData(): Record<string, { district: string[] }> {
    const result: Record<string, { district: string[] }> = {};
    
    provinces.forEach((province: Province) => {
        const districtNames = getDistricts(province.name).map(district => district.name);
        result[province.name] = { district: districtNames };
    });
    
    return result;
}

// The original package data structure for backwards compatibility
export const legacyProvinces = createLegacyData();