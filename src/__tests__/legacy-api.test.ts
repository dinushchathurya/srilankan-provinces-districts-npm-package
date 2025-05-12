import { describe, it, expect } from 'vitest';
import { getProvinces, getDistricts, provinces_data } from '../index';
import defaultExport from '../index';

describe('Legacy API Compatibility Tests', () => {
    describe('getProvinces()', () => {
        it('should return array of province names', () => {
        const result = getProvinces();
        
        expect(Array.isArray(result)).toBe(true);
        expect(result).toHaveLength(9);
        expect(result).toContain('Western');
        expect(result).toContain('Central');
        expect(result).toContain('Eastern');
        expect(result).toContain('Northern');
        expect(result).toContain('Southern');
        expect(result).toContain('North Western');
        expect(result).toContain('North Central');
        expect(result).toContain('Sabaragamuwa');
        expect(result).toContain('Uva');
        });
    });
    
    describe('getDistricts()', () => {
        it('should return array of district names for a province', () => {
        const western = getDistricts('Western');
        
        expect(Array.isArray(western)).toBe(true);
        expect(western).toHaveLength(3);
        expect(western).toContain('Colombo');
        expect(western).toContain('Gampaha');
        expect(western).toContain('Kalutara');
        
        const northern = getDistricts('Northern');
        
        expect(Array.isArray(northern)).toBe(true);
        expect(northern).toHaveLength(5);
        expect(northern).toContain('Jaffna');
        expect(northern).toContain('Kilinochchi');
        expect(northern).toContain('Mannar');
        expect(northern).toContain('Mullativu');
        expect(northern).toContain('Vavuniya');
        });
        
        it('should return empty array for invalid province', () => {
        const result = getDistricts('InvalidProvince');
        
        expect(Array.isArray(result)).toBe(true);
        expect(result).toHaveLength(0);
        });
        
        it('should handle empty input gracefully', () => {
        const result = getDistricts('');
        
        expect(Array.isArray(result)).toBe(true);
        expect(result).toHaveLength(0);
        });
    });
    
    describe('provinces_data', () => {
        it('should have the original v1.x structure', () => {
        expect(typeof provinces_data).toBe('object');
        expect(provinces_data).toHaveProperty('Western');
        expect(provinces_data.Western).toHaveProperty('district');
        expect(Array.isArray(provinces_data.Western.district)).toBe(true);
        expect(provinces_data.Western.district).toContain('Colombo');
        });
    });
    
    describe('CommonJS Compatibility', () => {
        it('should work with default export', () => {
        expect(typeof defaultExport).toBe('object');
        expect(typeof defaultExport.getProvinces).toBe('function');
        expect(typeof defaultExport.getDistricts).toBe('function');
        expect(typeof defaultExport.provinces).toBe('object');
        
        const provinces = defaultExport.getProvinces();
        expect(Array.isArray(provinces)).toBe(true);
        expect(provinces).toContain('Western');
        
        const districts = defaultExport.getDistricts('Western');
        expect(Array.isArray(districts)).toBe(true);
        expect(districts).toContain('Colombo');
        });
        
        it('should simulate CommonJS require behavior', () => {
        // Simulate: const provinceDistricts = require('srilankan-provinces-districts');
        const provinceDistricts = defaultExport;
        
        // Simulate: var provinces = provinceDistricts.getProvinces();
        const provinces = provinceDistricts.getProvinces();
        expect(Array.isArray(provinces)).toBe(true);
        expect(provinces).toContain('Western');
        
        // Simulate: var districts = provinceDistricts.getDistricts("Western");
        const districts = provinceDistricts.getDistricts("Western");
        expect(Array.isArray(districts)).toBe(true);
        expect(districts).toContain('Colombo');
        });
    });
});