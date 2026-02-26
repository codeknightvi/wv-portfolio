import { describe, it, expect } from 'vitest';
import { frontEnd } from './frontEnd';
import { Skill } from '@_types';

describe('FrontEnd Skills Mock Data', () => {
  it('should export an array of skills', () => {
    expect(Array.isArray(frontEnd)).toBe(true);
    expect(frontEnd.length).toBeGreaterThan(0);
  });

  it('should have valid Skill type structure', () => {
    frontEnd.forEach((skill: Skill) => {
      expect(skill).toHaveProperty('name');
      expect(skill).toHaveProperty('url');
      expect(typeof skill.name).toBe('string');
      expect(typeof skill.url).toBe('string');
    });
  });

  it('should have non-empty names', () => {
    frontEnd.forEach((skill) => {
      expect(skill.name.length).toBeGreaterThan(0);
    });
  });

  it('should have non-empty URLs', () => {
    frontEnd.forEach((skill) => {
      expect(skill.url.length).toBeGreaterThan(0);
    });
  });

  it('should have valid URL formats', () => {
    frontEnd.forEach((skill) => {
      const isValidUrl =
        skill.url.startsWith('http://') ||
        skill.url.startsWith('https://') ||
        skill.url.startsWith('data:');
      expect(isValidUrl).toBe(true);
    });
  });

  it('should contain core frontend technologies', () => {
    const skillNames = frontEnd.map((skill) => skill.name.toLowerCase());

    expect(skillNames).toContain('javascript');
    expect(skillNames).toContain('typescript');
    expect(skillNames).toContain('react');
  });

  it('should contain state management libraries', () => {
    const skillNames = frontEnd.map((skill) => skill.name.toLowerCase());

    const hasRedux = skillNames.includes('redux');
    const hasZustand = skillNames.includes('zustand');
    const hasJotai = skillNames.includes('jotai');

    expect(hasRedux || hasZustand || hasJotai).toBe(true);
  });

  it('should contain styling frameworks', () => {
    const skillNames = frontEnd.map((skill) => skill.name.toLowerCase());

    const hasTailwind = skillNames.includes('tailwind');
    const hasBootstrap = skillNames.includes('bootstrap');
    const hasStyledComponent = skillNames.some((name) => name.includes('styled'));

    expect(hasTailwind || hasBootstrap || hasStyledComponent).toBe(true);
  });

  it('should have unique skill names', () => {
    const names = frontEnd.map((skill) => skill.name.toLowerCase());
    const uniqueNames = new Set(names);
    expect(uniqueNames.size).toBe(names.length);
  });

  it('should contain UI component libraries', () => {
    const hasUILibrary = frontEnd.some(
      (skill) =>
        skill.name.toLowerCase().includes('mui') ||
        skill.name.toLowerCase().includes('shadcn') ||
        skill.name.toLowerCase().includes('component')
    );

    expect(hasUILibrary).toBe(true);
  });

  it('should have at least 8 skills', () => {
    expect(frontEnd.length).toBeGreaterThanOrEqual(8);
  });
});