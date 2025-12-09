import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CertificateCard from './CertificateCard';
import { Certificate } from '@_types';

describe('CertificateCard', () => {
  const mockCertificate: Certificate = {
    name: 'TOEIC',
    score: 825,
    maxScroe: 990,
    date: '19/09/2025',
  };

  it('should render certificate name', () => {
    render(<CertificateCard {...mockCertificate} />);

    expect(screen.getByText('TOEIC')).toBeInTheDocument();
  });

  it('should render certificate date', () => {
    render(<CertificateCard {...mockCertificate} />);

    expect(screen.getByText('(19/09/2025)')).toBeInTheDocument();
  });

  it('should render score', () => {
    render(<CertificateCard {...mockCertificate} />);

    expect(screen.getByText('825/990')).toBeInTheDocument();
  });

  it('should handle zero scores', () => {
    const zeroCert: Certificate = {
      name: 'Test Cert',
      score: 0,
      maxScroe: 100,
      date: '01/01/2024',
    };

    render(<CertificateCard {...zeroCert} />);

    expect(screen.getByText('0/100')).toBeInTheDocument();
  });

  it('should handle perfect scores', () => {
    const perfectCert: Certificate = {
      name: 'Perfect Test',
      score: 100,
      maxScroe: 100,
      date: '01/01/2024',
    };

    render(<CertificateCard {...perfectCert} />);

    expect(screen.getByText('100/100')).toBeInTheDocument();
  });

  it('should handle different date formats', () => {
    const cert: Certificate = {
      name: 'Test',
      score: 50,
      maxScroe: 100,
      date: '2024-01-01',
    };

    render(<CertificateCard {...cert} />);

    expect(screen.getByText('(2024-01-01)')).toBeInTheDocument();
  });

  it('should handle long certificate names', () => {
    const longNameCert: Certificate = {
      name: 'Very Long Certificate Name That Should Still Display',
      score: 500,
      maxScroe: 1000,
      date: '01/01/2024',
    };

    render(<CertificateCard {...longNameCert} />);

    expect(screen.getByText('Very Long Certificate Name That Should Still Display')).toBeInTheDocument();
  });

  it('should handle large score numbers', () => {
    const largeCert: Certificate = {
      name: 'Big Test',
      score: 9999,
      maxScroe: 10000,
      date: '01/01/2024',
    };

    render(<CertificateCard {...largeCert} />);

    expect(screen.getByText('9999/10000')).toBeInTheDocument();
  });

  it('should apply correct CSS classes', () => {
    const { container } = render(<CertificateCard {...mockCertificate} />);

    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('flex');
    expect(card.className).toContain('p-5');
    expect(card.className).toContain('border-1');
  });

  it('should render name and date in same heading', () => {
    render(<CertificateCard {...mockCertificate} />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toContain('TOEIC');
    expect(heading.textContent).toContain('(19/09/2025)');
  });
});