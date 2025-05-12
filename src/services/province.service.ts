import { Province } from '../types';
import { provinces } from '../data';

/**
 * Get all provinces in Sri Lanka
 * @returns Array of all provinces
 */
export function getAllProvinces(): Province[] {
    return provinces;
}

/**
 * Get province by name or ID (case-insensitive)
 * @param nameOrId Province name or ID
 * @returns Province object or undefined if not found
 */
export function getProvince(nameOrId: string): Province | undefined {
    if (!nameOrId) return undefined;
    
    const normalizedInput = nameOrId.toLowerCase();
    return provinces.find(
        (province) => 
        province.id === normalizedInput || 
        province.name.toLowerCase() === normalizedInput
    );
}

/**
 * Get all province names (for backward compatibility)
 * @returns Array of province names
 */
export function getProvinceNames(): string[] {
    return provinces.map(province => province.name);
}