import { describe, it, expect } from 'vitest';
import { education } from './education';
import { Education } from '@_types';

describe('Education Mock Data', () => {
  it('should export an array of education items', () => {
    expect(Array.isArray(education)).toBe(true);
    expect(education.length).toBeGreaterThan(0);
  });

  it('should have valid Education type structure', () => {
    education.forEach((edu: Education) => {
      expect(edu).toHaveProperty('id');
      expect(edu).toHaveProperty('year');
      expect(edu).toHaveProperty('place');
      expect(typeof edu.id).toBe('number');
      expect(typeof edu.year).toBe('string');
      expect(typeof edu.place).toBe('string');
    });
  });

  it('should have unique IDs', () => {
    const ids = education.map((edu) => edu.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should have non-empty year strings', () => {
    education.forEach((edu) => {
      expect(edu.year.length).toBeGreaterThan(0);
    });
  });

  it('should have non-empty place strings', () => {
    education.forEach((edu) => {
      expect(edu.place.length).toBeGreaterThan(0);
    });
  });

  it('should have positive IDs', () => {
    education.forEach((edu) => {
      expect(edu.id).toBeGreaterThan(0);
    });
  });

  it('should contain expected education entries', () => {
    const hasBootcamp = education.some((edu) =>
      edu.place.includes('Full-Stack Development Bootcamp')
    );
    const hasUniversity = education.some((edu) => edu.place.includes('Thammasat University'));

    expect(hasBootcamp).toBe(true);
    expect(hasUniversity).toBe(true);
  });

  it('should have chronologically formatted years', () => {
    education.forEach((edu) => {
      // Should contain at least one 4-digit year
      expect(/\d{4}/.test(edu.year)).toBe(true);
    });
  });

  it('should maintain sequential IDs', () => {
    const ids = education.map((edu) => edu.id).sort((a, b) => a - b);
    
    for (let i = 0; i < ids.length; i++) {
      expect(ids[i]).toBe(i + 1);
    }
  });
});