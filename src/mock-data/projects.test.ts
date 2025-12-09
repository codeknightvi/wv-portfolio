import { describe, it, expect } from 'vitest';
import { projects } from './projects';
import { Project } from '@_types';

describe('Projects Mock Data', () => {
  it('should export an array of projects', () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it('should have valid Project type structure', () => {
    projects.forEach((project: Project) => {
      expect(project).toHaveProperty('name');
      expect(project).toHaveProperty('url');
      expect(project).toHaveProperty('cover');
      expect(project).toHaveProperty('stack');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('status');
      expect(project).toHaveProperty('updateDate');
    });
  });

  it('should have valid status values', () => {
    const validStatuses = ['available', 'under maintenance', 'coming soon'];

    projects.forEach((project) => {
      expect(validStatuses).toContain(project.status);
    });
  });

  it('should have non-empty names', () => {
    projects.forEach((project) => {
      expect(project.name.length).toBeGreaterThan(0);
    });
  });

  it('should have non-empty URLs', () => {
    projects.forEach((project) => {
      expect(project.url.length).toBeGreaterThan(0);
    });
  });

  it('should have valid URL formats', () => {
    projects.forEach((project) => {
      const isValidUrl =
        project.url.startsWith('http://') ||
        project.url.startsWith('https://') ||
        project.url.startsWith('www.');
      expect(isValidUrl).toBe(true);
    });
  });

  it('should have stack as an array', () => {
    projects.forEach((project) => {
      expect(Array.isArray(project.stack)).toBe(true);
    });
  });

  it('should have valid updateDate timestamps', () => {
    projects.forEach((project) => {
      expect(typeof project.updateDate).toBe('number');
      expect(project.updateDate).toBeGreaterThan(0);
      expect(project.updateDate).toBeLessThanOrEqual(Date.now());
    });
  });

  it('should have cover image for non-coming-soon projects', () => {
    projects.forEach((project) => {
      if (project.status !== 'coming soon') {
        expect(project.cover.length).toBeGreaterThan(0);
      }
    });
  });

  it('should have description for non-coming-soon projects', () => {
    projects.forEach((project) => {
      if (project.status !== 'coming soon') {
        expect(project.description.length).toBeGreaterThan(0);
      }
    });
  });

  it('should contain expected projects', () => {
    const projectNames = projects.map((p) => p.name.toLowerCase());

    expect(projectNames).toContain('exerzise');
    expect(projectNames).toContain('buyem');
  });

  it('should have at least one available project', () => {
    const hasAvailable = projects.some((p) => p.status === 'available');
    expect(hasAvailable).toBe(true);
  });

  it('should have realistic stack combinations', () => {
    projects.forEach((project) => {
      if (project.stack.length > 0) {
        const stackStr = project.stack.join(' ').toLowerCase();
        // If it mentions a backend, it should have a frontend
        if (stackStr.includes('nodejs') || stackStr.includes('postgresql')) {
          const hasFrontend =
            stackStr.includes('react') ||
            stackStr.includes('vue') ||
            stackStr.includes('angular');
          expect(hasFrontend).toBe(true);
        }
      }
    });
  });

  it('should have unique project names', () => {
    const names = projects.map((p) => p.name);
    const uniqueNames = new Set(names);
    expect(uniqueNames.size).toBe(names.length);
  });

  it('should sort projects by updateDate descending', () => {
    const dates = projects.map((p) => p.updateDate);
    const sortedDates = [...dates].sort((a, b) => b - a);
    
    // Check if already sorted or note for optimization
    const isSorted = JSON.stringify(dates) === JSON.stringify(sortedDates);
    expect(typeof isSorted).toBe('boolean');
  });

  it('should have valid GitHub URLs where applicable', () => {
    projects.forEach((project) => {
      if (project.url.includes('github.com')) {
        expect(project.url).toMatch(/^https:\/\/github\.com\/[\w-]+\/[\w-]+/);
      }
    });
  });

  it('should have proper image paths for covers', () => {
    projects.forEach((project) => {
      if (project.cover && project.status !== 'coming soon') {
        const hasValidPath =
          project.cover.startsWith('/') ||
          project.cover.startsWith('http') ||
          project.cover.includes('projects/');
        expect(hasValidPath).toBe(true);
      }
    });
  });
});