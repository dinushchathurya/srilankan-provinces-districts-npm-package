/**
 * Re-export all types for easy import
 */
export { Province } from './province';
export { District } from './district';

/**
 * Legacy data structure type for provinces
 */
export type LegacyProvinces = {
    [key: string]: {
        district: string[];
    };
};