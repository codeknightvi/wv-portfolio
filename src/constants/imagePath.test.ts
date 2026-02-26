import { describe, it, expect } from 'vitest';
import { wvLogo, wvBackground, projectUpdateDate } from './imagePath';

describe('ImagePath Constants', () => {
  describe('wvLogo', () => {
    it('should be a non-empty string', () => {
      expect(typeof wvLogo).toBe('string');
      expect(wvLogo.length).toBeGreaterThan(0);
    });

    it('should be a valid image path', () => {
      expect(wvLogo).toMatch(/\.(png|jpg|jpeg|svg|webp)$/i);
    });

    it('should start with a forward slash', () => {
      expect(wvLogo.startsWith('/')).toBe(true);
    });

    it('should contain profile directory', () => {
      expect(wvLogo).toContain('/profile/');
    });
  });

  describe('wvBackground', () => {
    it('should be a non-empty string', () => {
      expect(typeof wvBackground).toBe('string');
      expect(wvBackground.length).toBeGreaterThan(0);
    });

    it('should be a valid image path', () => {
      expect(wvBackground).toMatch(/\.(png|jpg|jpeg|svg|webp)$/i);
    });

    it('should start with a forward slash', () => {
      expect(wvBackground.startsWith('/')).toBe(true);
    });

    it('should contain profile directory', () => {
      expect(wvBackground).toContain('/profile/');
    });
  });

  describe('projectUpdateDate', () => {
    it('should be a number', () => {
      expect(typeof projectUpdateDate).toBe('number');
    });

    it('should be a valid timestamp', () => {
      expect(projectUpdateDate).toBeGreaterThan(0);
      expect(projectUpdateDate).toBeLessThanOrEqual(Date.now());
    });

    it('should be in milliseconds (Unix timestamp)', () => {
      // Should be a reasonable date (after 2020)
      const year2020 = new Date('2020-01-01').getTime();
      expect(projectUpdateDate).toBeGreaterThan(year2020);
    });

    it('should represent a valid date', () => {
      const date = new Date(projectUpdateDate);
      expect(date.toString()).not.toBe('Invalid Date');
    });

    it('should be January 1, 2026 00:00:00 UTC', () => {
      const expectedDate = new Date('2026-01-01T00:00:00.000Z').getTime();
      expect(projectUpdateDate).toBe(expectedDate);
    });
  });

  describe('Image paths consistency', () => {
    it('should have both images in the same directory', () => {
      const logoDir = wvLogo.substring(0, wvLogo.lastIndexOf('/'));
      const bgDir = wvBackground.substring(0, wvBackground.lastIndexOf('/'));
      
      expect(logoDir).toBe(bgDir);
    });

    it('should use PNG format for both images', () => {
      expect(wvLogo.endsWith('.png')).toBe(true);
      expect(wvBackground.endsWith('.png')).toBe(true);
    });
  });
});