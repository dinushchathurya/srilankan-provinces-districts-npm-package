import { District } from '../types';

/**
 * Array of all Sri Lankan districts
 */
export const districts: District[] = [
    // Western Province
    { id: 'colombo', provinceId: 'western', name: 'Colombo', code: 'CMB' },
    { id: 'gampaha', provinceId: 'western', name: 'Gampaha', code: 'GMP' },
    { id: 'kalutara', provinceId: 'western', name: 'Kalutara', code: 'KLT' },
    
    // Central Province
    { id: 'kandy', provinceId: 'central', name: 'Kandy', code: 'KAN' },
    { id: 'matale', provinceId: 'central', name: 'Matale', code: 'MAT' },
    { id: 'nuwara-eliya', provinceId: 'central', name: 'Nuwara Eliya', code: 'NUW' },
    
    // Southern Province
    { id: 'galle', provinceId: 'southern', name: 'Galle', code: 'GAL' },
    { id: 'matara', provinceId: 'southern', name: 'Matara', code: 'MAT' },
    { id: 'hambantota', provinceId: 'southern', name: 'Hambantota', code: 'HAM' },
    
    // Northern Province
    { id: 'jaffna', provinceId: 'northern', name: 'Jaffna', code: 'JAF' },
    { id: 'kilinochchi', provinceId: 'northern', name: 'Kilinochchi', code: 'KIL' },
    { id: 'mannar', provinceId: 'northern', name: 'Mannar', code: 'MAN' },
    { id: 'mullativu', provinceId: 'northern', name: 'Mullativu', code: 'MUL' },
    { id: 'vavuniya', provinceId: 'northern', name: 'Vavuniya', code: 'VAV' },
    
    // Eastern Province
    { id: 'ampara', provinceId: 'eastern', name: 'Ampara', code: 'AMP' },
    { id: 'batticaloa', provinceId: 'eastern', name: 'Batticaloa', code: 'BAT' },
    { id: 'trincomalee', provinceId: 'eastern', name: 'Trincomalee', code: 'TRI' },
    
    // North Western Province
    { id: 'kurunegala', provinceId: 'north-western', name: 'Kurunegala', code: 'KUR' },
    { id: 'puttalam', provinceId: 'north-western', name: 'Puttalam', code: 'PUT' },
    
    // North Central Province
    { id: 'anuradhapura', provinceId: 'north-central', name: 'Anuradhapura', code: 'ANU' },
    { id: 'polonnaruwa', provinceId: 'north-central', name: 'Polonnaruwa', code: 'POL' },
    
    // Uva Province
    { id: 'badulla', provinceId: 'uva', name: 'Badulla', code: 'BAD' },
    { id: 'moneragala', provinceId: 'uva', name: 'Moneragala', code: 'MON' },
    
    // Sabaragamuwa Province
    { id: 'kegalle', provinceId: 'sabaragamuwa', name: 'Kegalle', code: 'KEG' },
    { id: 'rathnapura', provinceId: 'sabaragamuwa', name: 'Rathnapura', code: 'RAT' }
];