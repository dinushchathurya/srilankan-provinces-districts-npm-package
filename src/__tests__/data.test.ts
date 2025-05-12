import { describe, it, expect } from 'vitest';
import { provinces, districts } from '../data';
import { legacyProvinces } from '../data/legacy-data';

describe('Data Integrity Tests', () => {
    describe('Modern data structure', () => {
        it('should have 9 provinces', () => {
        expect(provinces).toHaveLength(9);
        });
        
        it('should have 25 districts', () => {
        expect(districts).toHaveLength(25);
        });
        
        it('should have unique province IDs', () => {
        const ids = provinces.map(p => p.id);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size).toBe(provinces.length);
        });
        
        it('should have unique district IDs', () => {
        const ids = districts.map(d => d.id);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size).toBe(districts.length);
        });
        
        it('should reference valid province IDs in districts', () => {
        const provinceIds = provinces.map(p => p.id);
        
        districts.forEach(district => {
            expect(provinceIds).toContain(district.provinceId);
        });
        });
        
        it('should have correct number of districts per province', () => {
        // Check counts by province
        const westernDistricts = districts.filter(d => d.provinceId === 'western');
        expect(westernDistricts).toHaveLength(3);
        
        const centralDistricts = districts.filter(d => d.provinceId === 'central');
        expect(centralDistricts).toHaveLength(3);
        
        const northernDistricts = districts.filter(d => d.provinceId === 'northern');
        expect(northernDistricts).toHaveLength(5);
        
        const easternDistricts = districts.filter(d => d.provinceId === 'eastern');
        expect(easternDistricts).toHaveLength(3);
        
        const southernDistricts = districts.filter(d => d.provinceId === 'southern');
        expect(southernDistricts).toHaveLength(3);
        
        const northWesternDistricts = districts.filter(d => d.provinceId === 'north-western');
        expect(northWesternDistricts).toHaveLength(2);
        
        const northCentralDistricts = districts.filter(d => d.provinceId === 'north-central');
        expect(northCentralDistricts).toHaveLength(2);
        
        const uvaDistricts = districts.filter(d => d.provinceId === 'uva');
        expect(uvaDistricts).toHaveLength(2);
        
        const sabaragamuwaDistricts = districts.filter(d => d.provinceId === 'sabaragamuwa');
        expect(sabaragamuwaDistricts).toHaveLength(2);
        });
    });
    
    describe('Legacy data structure', () => {
        it('should have the same provinces as modern data', () => {
        const modernProvinceNames = provinces.map(p => p.name);
        const legacyProvinceNames = Object.keys(legacyProvinces);
        
        expect(legacyProvinceNames.sort()).toEqual(modernProvinceNames.sort());
        });
        
        it('should have the same districts as modern data', () => {
        // For each province, verify legacy and modern have same districts
        provinces.forEach(province => {
            const modernDistricts = districts
            .filter(d => d.provinceId === province.id)
            .map(d => d.name);
            
            const legacyDistricts = legacyProvinces[province.name].district;
            
            expect(modernDistricts.sort()).toEqual(legacyDistricts.sort());
        });
        });
    });
});