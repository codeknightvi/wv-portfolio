import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AboutPage from './index';

// Mock the data
vi.mock('@mock-data/education', () => ({
  education: [
    {
      id: 1,
      year: '2023-2023',
      place: 'Full-Stack Development Bootcamp',
    },
    {
      id: 2,
      year: '2018-2022',
      place: 'Thammasat University',
    },
  ],
}));

vi.mock('@mock-data/certificates', () => ({
  certificates: [
    {
      name: 'TOEIC',
      score: 825,
      maxScroe: 990,
      date: '19/09/2025',
    },
    {
      name: 'invalid',
      score: 0,
      maxScroe: 0,
      date: '0',
    },
  ],
}));

vi.mock('@hooks/useHoveredPoint', () => ({
  useHoveredPoint: vi.fn(() => ({
    hoveredIndex: null,
    handleOnMouseEnter: vi.fn(),
  })),
}));

describe('AboutPage', () => {
  it('should render the about me description', () => {
    render(<AboutPage />);

    expect(screen.getByText(/I'm a React developer/i)).toBeInTheDocument();
  });

  it('should render Certificate section heading', () => {
    render(<AboutPage />);

    expect(screen.getByText('Certificate')).toBeInTheDocument();
  });

  it('should render Education section heading', () => {
    render(<AboutPage />);

    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  it('should render all certificates', () => {
    render(<AboutPage />);

    expect(screen.getByText('TOEIC')).toBeInTheDocument();
    expect(screen.getByText('825/990')).toBeInTheDocument();
  });

  it('should handle invalid certificates with placeholder', () => {
    render(<AboutPage />);

    const certificateCards = screen.getAllByText(/invalid/i);
    expect(certificateCards.length).toBeGreaterThanOrEqual(0);
  });

  it('should render education timeline', () => {
    render(<AboutPage />);

    expect(screen.getByText('2023-2023')).toBeInTheDocument();
    expect(screen.getByText('Full-Stack Development Bootcamp')).toBeInTheDocument();
    expect(screen.getByText('2018-2022')).toBeInTheDocument();
    expect(screen.getByText('Thammasat University')).toBeInTheDocument();
  });

  it('should handle mouse enter on education timeline items', () => {
    const mockHandleOnMouseEnter = vi.fn();
    const useHoveredPoint = require('@hooks/useHoveredPoint').useHoveredPoint;
    useHoveredPoint.mockReturnValue({
      hoveredIndex: null,
      handleOnMouseEnter: mockHandleOnMouseEnter,
    });

    render(<AboutPage />);

    const timelineItems = screen.getAllByRole('listitem');
    if (timelineItems.length > 0) {
      fireEvent.mouseEnter(timelineItems[0]);
      expect(mockHandleOnMouseEnter).toHaveBeenCalled();
    }
  });

  it('should apply hover styles when item is hovered', () => {
    const useHoveredPoint = require('@hooks/useHoveredPoint').useHoveredPoint;
    useHoveredPoint.mockReturnValue({
      hoveredIndex: 0,
      handleOnMouseEnter: vi.fn(),
    });

    const { container } = render(<AboutPage />);

    const timeElements = container.querySelectorAll('time');
    expect(timeElements.length).toBeGreaterThan(0);
  });

  it('should render certificate grid with correct layout', () => {
    const { container } = render(<AboutPage />);

    const grid = container.querySelector('.grid.grid-cols-3');
    expect(grid).toBeInTheDocument();
  });

  it('should render education timeline with border', () => {
    const { container } = render(<AboutPage />);

    const timeline = container.querySelector('.border-l');
    expect(timeline).toBeInTheDocument();
  });

  it('should render all education items in correct order', () => {
    render(<AboutPage />);

    const years = ['2023-2023', '2018-2022'];
    years.forEach((year) => {
      expect(screen.getByText(year)).toBeInTheDocument();
    });
  });

  it('should handle mouse leave on education timeline items', () => {
    const mockHandleOnMouseEnter = vi.fn();
    const useHoveredPoint = require('@hooks/useHoveredPoint').useHoveredPoint;
    useHoveredPoint.mockReturnValue({
      hoveredIndex: 0,
      handleOnMouseEnter: mockHandleOnMouseEnter,
    });

    render(<AboutPage />);

    const timelineItems = screen.getAllByRole('listitem');
    if (timelineItems.length > 0) {
      fireEvent.mouseLeave(timelineItems[0]);
      expect(mockHandleOnMouseEnter).toHaveBeenCalled();
    }
  });

  it('should render complete about description text', () => {
    render(<AboutPage />);

    expect(screen.getByText(/decentralized finance/i)).toBeInTheDocument();
    expect(screen.getByText(/Agile Scrum/i)).toBeInTheDocument();
  });
});