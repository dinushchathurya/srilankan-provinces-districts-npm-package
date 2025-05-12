import { describe, it, expect } from 'vitest';
import { getProvince, getAllProvinces, getAllDistricts, getDistrictsByProvince, Province, District } from '../index';

describe('Modern API Tests', () => {
    describe('getAllProvinces()', () => {
        it('should return all provinces with full data', () => {
        const provinces = getAllProvinces();
        
        expect(Array.isArray(provinces)).toBe(true);
        expect(provinces).toHaveLength(9);
        
        const western = provinces.find(p => p.id === 'western');
        expect(western).toBeDefined();
        expect(western?.name).toBe('Western');
        expect(western?.code).toBe('WP');
        });
    });
    
    describe('getProvince()', () => {
        it('should find province by name (case-insensitive)', () => {
        const western1 = getProvince('Western');
        expect(western1).toBeDefined();
        expect(western1?.name).toBe('Western');
        expect(western1?.code).toBe('WP');
        
        const western2 = getProvince('western');
        expect(western2).toBeDefined();
        expect(western2?.name).toBe('Western');
        
        const western3 = getProvince('WESTERN');
        expect(western3).toBeDefined();
        expect(western3?.name).toBe('Western');
        });
        
        it('should find province by ID', () => {
        const central = getProvince('central');
        expect(central).toBeDefined();
        expect(central?.name).toBe('Central');
        });
        
        it('should return undefined for non-existent province', () => {
        const result = getProvince('invalid-province');
        expect(result).toBeUndefined();
        });
        
        it('should handle empty input gracefully', () => {
        const result = getProvince('');
        expect(result).toBeUndefined();
        
        const nullResult = getProvince(null as unknown as string);
        expect(nullResult).toBeUndefined();
        });
    });
    
    describe('getAllDistricts()', () => {
        it('should return all districts with full data', () => {
        const districts = getAllDistricts();
        
        expect(Array.isArray(districts)).toBe(true);
        expect(districts).toHaveLength(25);
        
        const colombo = districts.find(d => d.id === 'colombo');
        expect(colombo).toBeDefined();
        expect(colombo?.name).toBe('Colombo');
        expect(colombo?.provinceId).toBe('western');
        expect(colombo?.code).toBe('CMB');
        });
    });
    
    describe('getDistrictsByProvince()', () => {
        it('should return districts for a specific province', () => {
        const westernDistricts = getDistrictsByProvince('Western');
        
        expect(Array.isArray(westernDistricts)).toBe(true);
        expect(westernDistricts).toHaveLength(3);
        
        const districtNames = westernDistricts.map(d => d.name);
        expect(districtNames).toContain('Colombo');
        expect(districtNames).toContain('Gampaha');
        expect(districtNames).toContain('Kalutara');
        });
        
        it('should be case-insensitive', () => {
        const districts1 = getDistrictsByProvince('Western');
        const districts2 = getDistrictsByProvince('western');
        const districts3 = getDistrictsByProvince('WESTERN');
        
        expect(districts1).toHaveLength(3);
        expect(districts2).toHaveLength(3);
        expect(districts3).toHaveLength(3);
        });
        
        it('should work with province ID as input', () => {
        const districts = getDistrictsByProvince('western');
        expect(districts).toHaveLength(3);
        });
        
        it('should return empty array for invalid province', () => {
        const results = getDistrictsByProvince('invalid-province');
        
        expect(Array.isArray(results)).toBe(true);
        expect(results).toHaveLength(0);
        });
        
        it('should handle empty input gracefully', () => {
        const results = getDistrictsByProvince('');
        
        expect(Array.isArray(results)).toBe(true);
        expect(results).toHaveLength(0);
        });
    });
    
    describe('Type verification', () => {
        it('should have correct types for provinces and districts', () => {
        // This is more for TypeScript type checking than a runtime test
        const provinces: Province[] = getAllProvinces();
        const province: Province | undefined = getProvince('Western');
        const districts: District[] = getAllDistricts();
        const westernDistricts: District[] = getDistrictsByProvince('Western');
        
        // Just verify they are arrays
        expect(Array.isArray(provinces)).toBe(true);
        expect(Array.isArray(districts)).toBe(true);
        expect(Array.isArray(westernDistricts)).toBe(true);
        
        // Verify the province structure
        if (province) {
            expect(typeof province.id).toBe('string');
            expect(typeof province.name).toBe('string');
            expect(typeof province.code).toBe('string');
        }
        });
    });
});