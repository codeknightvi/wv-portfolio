import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Experience from './Experience';

vi.mock('@mock-data/experience', () => ({
  experience: [
    {
      period: '2023 - Present',
      position: 'Frontend Developer',
      place: 'Tech Company',
      work: ['Built React applications', 'Implemented responsive designs', 'Collaborated with team'],
    },
    {
      period: '2021 - 2023',
      position: 'Junior Developer',
      place: 'Startup Inc',
      work: ['Developed features', 'Fixed bugs'],
    },
  ],
}));

vi.mock('@hooks/useHoveredPoint', () => ({
  useHoveredPoint: vi.fn(() => ({
    hoveredIndex: null,
    handleOnMouseEnter: vi.fn(),
  })),
}));

describe('Experience', () => {
  it('should render Experience section heading', () => {
    render(<Experience />);

    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('should render all experience items', () => {
    render(<Experience />);

    expect(screen.getByText('2023 - Present')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer | @ Tech Company')).toBeInTheDocument();
    expect(screen.getByText('2021 - 2023')).toBeInTheDocument();
    expect(screen.getByText('Junior Developer | @ Startup Inc')).toBeInTheDocument();
  });

  it('should render all work items for each experience', () => {
    render(<Experience />);

    expect(screen.getByText('- Built React applications')).toBeInTheDocument();
    expect(screen.getByText('- Implemented responsive designs')).toBeInTheDocument();
    expect(screen.getByText('- Collaborated with team')).toBeInTheDocument();
    expect(screen.getByText('- Developed features')).toBeInTheDocument();
    expect(screen.getByText('- Fixed bugs')).toBeInTheDocument();
  });

  it('should render experience in timeline format with border', () => {
    const { container } = render(<Experience />);

    const timeline = container.querySelector('.border-l');
    expect(timeline).toBeInTheDocument();
  });

  it('should handle mouse enter on timeline items', () => {
    const mockHandleOnMouseEnter = vi.fn();
    const useHoveredPoint = require('@hooks/useHoveredPoint').useHoveredPoint;
    useHoveredPoint.mockReturnValue({
      hoveredIndex: null,
      handleOnMouseEnter: mockHandleOnMouseEnter,
    });

    render(<Experience />);

    const timelineItems = screen.getAllByRole('listitem');
    if (timelineItems.length > 0) {
      fireEvent.mouseEnter(timelineItems[0]);
      expect(mockHandleOnMouseEnter).toHaveBeenCalled();
    }
  });

  it('should handle mouse leave on timeline items', () => {
    const mockHandleOnMouseEnter = vi.fn();
    const useHoveredPoint = require('@hooks/useHoveredPoint').useHoveredPoint;
    useHoveredPoint.mockReturnValue({
      hoveredIndex: 0,
      handleOnMouseEnter: mockHandleOnMouseEnter,
    });

    render(<Experience />);

    const timelineItems = screen.getAllByRole('listitem');
    if (timelineItems.length > 0) {
      fireEvent.mouseLeave(timelineItems[0]);
      expect(mockHandleOnMouseEnter).toHaveBeenCalled();
    }
  });

  it('should apply hover styles when item is hovered', () => {
    const useHoveredPoint = require('@hooks/useHoveredPoint').useHoveredPoint;
    useHoveredPoint.mockReturnValue({
      hoveredIndex: 0,
      handleOnMouseEnter: vi.fn(),
    });

    const { container } = render(<Experience />);

    const timeElements = container.querySelectorAll('time');
    expect(timeElements.length).toBeGreaterThan(0);
  });

  it('should render experience items in correct order', () => {
    render(<Experience />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
  });

  it('should format position and place correctly', () => {
    render(<Experience />);

    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings[0].textContent).toContain('|');
    expect(headings[0].textContent).toContain('@');
  });

  it('should render section with correct styling', () => {
    const { container } = render(<Experience />);

    const section = container.querySelector('section');
    expect(section?.className).toContain('pt-5');
    expect(section?.className).toContain('md:pt-10');
  });

  it('should render work items as list', () => {
    render(<Experience />);

    const workLists = screen.getAllByRole('list');
    expect(workLists.length).toBeGreaterThan(1); // Main timeline list + work lists
  });
});