import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectPage from './index';

vi.mock('@mock-data/projects', () => ({
  projects: [
    {
      name: 'Test Project 1',
      url: 'https://example1.com',
      cover: '/cover1.png',
      stack: ['react', 'typescript'],
      description: 'First test project',
      status: 'available',
      updateDate: new Date('2024-01-01').getTime(),
    },
    {
      name: 'Test Project 2',
      url: 'https://example2.com',
      cover: '/cover2.png',
      stack: ['vue', 'javascript'],
      description: 'Second test project',
      status: 'under maintenance',
      updateDate: new Date('2024-02-01').getTime(),
    },
    {
      name: 'Test Project 3',
      url: 'https://example3.com',
      cover: '',
      stack: ['angular'],
      description: '',
      status: 'coming soon',
      updateDate: new Date('2024-03-01').getTime(),
    },
  ],
}));

describe('ProjectPage', () => {
  it('should render all projects', () => {
    render(<ProjectPage />);

    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    expect(screen.getByText('Test Project 2')).toBeInTheDocument();
    expect(screen.getByText('Test Project 3')).toBeInTheDocument();
  });

  it('should render projects in a grid layout', () => {
    const { container } = render(<ProjectPage />);

    const grid = container.querySelector('.grid');
    expect(grid).toBeInTheDocument();
    expect(grid?.className).toContain('grid-cols-1');
    expect(grid?.className).toContain('md:grid-cols-2');
    expect(grid?.className).toContain('2xl:grid-cols-3');
  });

  it('should render project descriptions', () => {
    render(<ProjectPage />);

    expect(screen.getByText('First test project')).toBeInTheDocument();
    expect(screen.getByText('Second test project')).toBeInTheDocument();
  });

  it('should render project stacks', () => {
    render(<ProjectPage />);

    expect(screen.getByText('react')).toBeInTheDocument();
    expect(screen.getByText('typescript')).toBeInTheDocument();
    expect(screen.getByText('vue')).toBeInTheDocument();
    expect(screen.getByText('javascript')).toBeInTheDocument();
  });

  it('should render projects with different statuses', () => {
    render(<ProjectPage />);

    expect(screen.getByText('(under maintenance)')).toBeInTheDocument();
    expect(screen.getByText('coming soon ...')).toBeInTheDocument();
  });

  it('should render all project links', () => {
    render(<ProjectPage />);

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(3);
  });

  it('should apply correct grid gap', () => {
    const { container } = render(<ProjectPage />);

    const grid = container.querySelector('.grid');
    expect(grid?.className).toContain('gap-4');
  });

  it('should center and justify items in grid', () => {
    const { container } = render(<ProjectPage />);

    const grid = container.querySelector('.grid');
    expect(grid?.className).toContain('content-center');
    expect(grid?.className).toContain('justify-items-center');
  });
});