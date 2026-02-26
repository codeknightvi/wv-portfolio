import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { Project } from '@_types';

describe('ProjectCard', () => {
  const baseProject: Project = {
    name: 'Test Project',
    url: 'https://example.com',
    cover: '/test-cover.png',
    stack: ['react', 'typescript', 'vite'],
    description: 'This is a test project description',
    status: 'available',
    updateDate: new Date('2024-01-01').getTime(),
  };

  it('should render project with available status', () => {
    render(<ProjectCard {...baseProject} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
    expect(screen.getByText('react')).toBeInTheDocument();
    expect(screen.getByText('typescript')).toBeInTheDocument();
    expect(screen.getByText('vite')).toBeInTheDocument();
  });

  it('should render external link with correct attributes', () => {
    render(<ProjectCard {...baseProject} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });

  it('should display project cover image for available status', () => {
    render(<ProjectCard {...baseProject} />);

    const image = screen.getByAltText('landing_page_img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-cover.png');
  });

  it('should display "under maintenance" badge', () => {
    const maintenanceProject: Project = {
      ...baseProject,
      status: 'under maintenance',
    };

    render(<ProjectCard {...maintenanceProject} />);

    expect(screen.getByText('(under maintenance)')).toBeInTheDocument();
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('should not display badge for available projects', () => {
    render(<ProjectCard {...baseProject} />);

    expect(screen.queryByText('(under maintenance)')).not.toBeInTheDocument();
    expect(screen.queryByText('(coming soon)')).not.toBeInTheDocument();
  });

  it('should handle coming soon status correctly', () => {
    const comingSoonProject: Project = {
      ...baseProject,
      status: 'coming soon',
      cover: '',
      description: '',
    };

    render(<ProjectCard {...comingSoonProject} />);

    expect(screen.getByText('coming soon ...')).toBeInTheDocument();
    expect(screen.queryByAltText('landing_page_img')).not.toBeInTheDocument();
  });

  it('should not render image for coming soon projects', () => {
    const comingSoonProject: Project = {
      ...baseProject,
      status: 'coming soon',
    };

    render(<ProjectCard {...comingSoonProject} />);

    expect(screen.queryByAltText('landing_page_img')).not.toBeInTheDocument();
  });

  it('should render all stack items', () => {
    const multiStackProject: Project = {
      ...baseProject,
      stack: ['react', 'redux', 'nodejs', 'postgresql', 'docker'],
    };

    render(<ProjectCard {...multiStackProject} />);

    expect(screen.getByText('react')).toBeInTheDocument();
    expect(screen.getByText('redux')).toBeInTheDocument();
    expect(screen.getByText('nodejs')).toBeInTheDocument();
    expect(screen.getByText('postgresql')).toBeInTheDocument();
    expect(screen.getByText('docker')).toBeInTheDocument();
  });

  it('should render with empty stack array', () => {
    const noStackProject: Project = {
      ...baseProject,
      stack: [],
    };

    render(<ProjectCard {...noStackProject} />);

    expect(screen.getByText('stack:')).toBeInTheDocument();
  });

  it('should handle single stack item', () => {
    const singleStackProject: Project = {
      ...baseProject,
      stack: ['react'],
    };

    render(<ProjectCard {...singleStackProject} />);

    expect(screen.getByText('react')).toBeInTheDocument();
  });

  it('should render project name as heading', () => {
    render(<ProjectCard {...baseProject} />);

    const heading = screen.getByText('Test Project');
    expect(heading).toBeInTheDocument();
  });

  it('should display description for available projects', () => {
    render(<ProjectCard {...baseProject} />);

    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  it('should display description for under maintenance projects', () => {
    const maintenanceProject: Project = {
      ...baseProject,
      status: 'under maintenance',
      description: 'Currently being updated',
    };

    render(<ProjectCard {...maintenanceProject} />);

    expect(screen.getByText('Currently being updated')).toBeInTheDocument();
  });

  it('should handle long project names', () => {
    const longNameProject: Project = {
      ...baseProject,
      name: 'This is a Very Long Project Name That Should Still Be Displayed Correctly',
    };

    render(<ProjectCard {...longNameProject} />);

    expect(
      screen.getByText('This is a Very Long Project Name That Should Still Be Displayed Correctly')
    ).toBeInTheDocument();
  });

  it('should handle long descriptions', () => {
    const longDescProject: Project = {
      ...baseProject,
      description:
        'This is a very long project description that contains multiple sentences and should still render properly without breaking the layout or causing any issues with the component rendering.',
    };

    render(<ProjectCard {...longDescProject} />);

    expect(
      screen.getByText(
        'This is a very long project description that contains multiple sentences and should still render properly without breaking the layout or causing any issues with the component rendering.'
      )
    ).toBeInTheDocument();
  });

  it('should handle special characters in project name', () => {
    const specialCharProject: Project = {
      ...baseProject,
      name: 'Project-Name_2024 (v2.0)',
    };

    render(<ProjectCard {...specialCharProject} />);

    expect(screen.getByText('Project-Name_2024 (v2.0)')).toBeInTheDocument();
  });

  it('should handle URLs with query parameters', () => {
    const urlProject: Project = {
      ...baseProject,
      url: 'https://example.com/project?ref=portfolio&source=github',
    };

    render(<ProjectCard {...urlProject} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com/project?ref=portfolio&source=github');
  });

  it('should render stack label', () => {
    render(<ProjectCard {...baseProject} />);

    expect(screen.getByText(/stack:/i)).toBeInTheDocument();
  });

  it('should apply correct CSS classes for layout', () => {
    render(<ProjectCard {...baseProject} />);

    const link = screen.getByRole('link');
    expect(link.className).toContain('flex');
    expect(link.className).toContain('border');
    expect(link.className).toContain('rounded-lg');
  });

  it('should handle project with no cover image URL', () => {
    const noCoverProject: Project = {
      ...baseProject,
      status: 'available',
      cover: '',
    };

    render(<ProjectCard {...noCoverProject} />);

    const image = screen.queryByAltText('landing_page_img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '');
  });

  it('should handle all three status types', () => {
    const statuses: Array<Project['status']> = ['available', 'under maintenance', 'coming soon'];

    statuses.forEach((status) => {
      const { unmount } = render(
        <ProjectCard
          {...baseProject}
          name={`Project ${status}`}
          status={status}
        />
      );
      
      expect(screen.getByText(`Project ${status}`)).toBeInTheDocument();
      
      unmount();
    });
  });
});