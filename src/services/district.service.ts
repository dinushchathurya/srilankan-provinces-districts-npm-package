import { District } from '../types';
import { districts } from '../data';
import { getProvince } from './province.service';

/**
 * Get all districts in Sri Lanka
 * @returns Array of all districts
 */
export function getAllDistricts(): District[] {
    return districts;
}

/**
 * Get districts in a specific province
 * @param provinceNameOrId Province name or ID (case-insensitive)
 * @returns Array of districts or empty array if province not found
 */
export function getDistrictsByProvince(provinceNameOrId: string): District[] {
    if (!provinceNameOrId) return [];
    
    const province = getProvince(provinceNameOrId);
    if (!province) return [];
    
    return districts.filter(district => district.provinceId === province.id);
}

/**
 * Get district names in a province (for backward compatibility)
 * @param provinceName Province name
 * @returns Array of district names in the province
 */
export function getDistrictNamesByProvince(provinceName: string): string[] {
    if (!provinceName) return [];
    
    const districts = getDistrictsByProvince(provinceName);
    return districts.map(district => district.name);
}