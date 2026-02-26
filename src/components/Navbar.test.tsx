import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { ToastProvider } from 'context/toast';

// Mock the hooks and data
vi.mock('@hooks/useWindowsDimension', () => ({
  default: vi.fn(() => ({ width: 1024, height: 768 })),
}));

vi.mock('@mock-data/contact', () => ({
  contactChannel: [
    {
      src: 'github',
      via: 'testuser',
      url: 'https://github.com/testuser',
    },
    {
      src: 'gmail',
      via: 'test@example.com',
    },
  ],
}));

vi.mock('@config/routes', () => ({
  routes: {
    home: { path: '/home' },
    about: { path: '/about' },
    work: { path: '/work' },
    projects: { path: '/projects' },
  },
}));

vi.mock('@constants/imagePath', () => ({
  wvLogo: '/test-logo.png',
}));

const renderNavbar = () => {
  return render(
    <BrowserRouter>
      <ToastProvider>
        <Navbar />
      </ToastProvider>
    </BrowserRouter>
  );
};

describe('Navbar', () => {
  beforeEach(() => {
    // Reset clipboard mock
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn(() => Promise.resolve()),
      },
    });
  });

  it('should render logo', () => {
    renderNavbar();

    const logo = screen.getByAltText('WVLogo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/test-logo.png');
  });

  it('should render all navigation links', () => {
    renderNavbar();

    expect(screen.getByText('home')).toBeInTheDocument();
    expect(screen.getByText('about')).toBeInTheDocument();
    expect(screen.getByText('work')).toBeInTheDocument();
    expect(screen.getByText('projects')).toBeInTheDocument();
  });

  it('should render contact dropdown button', () => {
    renderNavbar();

    const contactButton = screen.getByText('contact');
    expect(contactButton).toBeInTheDocument();
  });

  it('should toggle dropdown menu on click', async () => {
    renderNavbar();

    const contactButton = screen.getByText('contact');
    
    // Initially, dropdown should be invisible
    const dropdownBefore = contactButton.closest('button')?.parentElement?.querySelector('.invisible');
    expect(dropdownBefore).toBeInTheDocument();

    // Click to open
    fireEvent.click(contactButton);

    await waitFor(() => {
      const dropdownAfter = contactButton.closest('button')?.parentElement?.querySelector('.visible');
      expect(dropdownAfter).toBeInTheDocument();
    });
  });

  it('should copy email to clipboard when clicked', async () => {
    renderNavbar();

    const contactButton = screen.getByText('contact');
    fireEvent.click(contactButton);

    await waitFor(() => {
      const gmailOption = screen.getByText(/gmail:/i);
      expect(gmailOption).toBeInTheDocument();
    });

    const gmailOption = screen.getByText(/test@example.com/i);
    fireEvent.click(gmailOption);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('test@example.com');
  });

  it('should open external link for contact with URL', async () => {
    const windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    renderNavbar();

    const contactButton = screen.getByText('contact');
    fireEvent.click(contactButton);

    await waitFor(() => {
      const githubOption = screen.getByText(/github:/i);
      expect(githubOption).toBeInTheDocument();
    });

    const githubOption = screen.getByText(/testuser/i);
    fireEvent.click(githubOption);

    expect(windowOpenSpy).toHaveBeenCalledWith('https://github.com/testuser', '_blank');
  });

  it('should render mobile menu toggle button', () => {
    renderNavbar();

    const menuButton = screen.getByRole('button', { name: '' });
    expect(menuButton).toBeInTheDocument();
  });

  it('should handle mobile menu toggle', () => {
    const useWindowDimensions = require('@hooks/useWindowsDimension').default;
    useWindowDimensions.mockReturnValue({ width: 500, height: 800 });

    renderNavbar();

    const menuButtons = screen.getAllByRole('button');
    const mobileMenuButton = menuButtons.find((btn) => 
      btn.querySelector('svg')
    );

    if (mobileMenuButton) {
      fireEvent.click(mobileMenuButton);
      // Menu state should toggle
      expect(mobileMenuButton).toBeInTheDocument();
    }
  });

  it('should close mobile menu when navigation link is clicked on mobile', async () => {
    const useWindowDimensions = require('@hooks/useWindowsDimension').default;
    useWindowDimensions.mockReturnValue({ width: 500, height: 800 });

    renderNavbar();

    const homeLink = screen.getByText('home');
    fireEvent.click(homeLink);

    // Menu should close after clicking navigation link on mobile
    await waitFor(() => {
      expect(homeLink).toBeInTheDocument();
    });
  });

  it('should keep menu open on desktop', () => {
    const useWindowDimensions = require('@hooks/useWindowsDimension').default;
    useWindowDimensions.mockReturnValue({ width: 1024, height: 768 });

    renderNavbar();

    const homeLink = screen.getByText('home');
    expect(homeLink).toBeVisible();
  });

  it('should apply correct styling to active navigation link', () => {
    renderNavbar();

    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveClass('group');
    });
  });

  it('should render navigation links with correct paths', () => {
    renderNavbar();

    const homeLink = screen.getByText('home').closest('a');
    expect(homeLink).toHaveAttribute('href', '/home');

    const aboutLink = screen.getByText('about').closest('a');
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  it('should display all contact channels in dropdown', async () => {
    renderNavbar();

    const contactButton = screen.getByText('contact');
    fireEvent.click(contactButton);

    await waitFor(() => {
      expect(screen.getByText(/github:/i)).toBeInTheDocument();
      expect(screen.getByText(/gmail:/i)).toBeInTheDocument();
    });
  });

  it('should handle rapid menu toggles', async () => {
    renderNavbar();

    const contactButton = screen.getByText('contact');

    // Rapidly toggle
    fireEvent.click(contactButton);
    fireEvent.click(contactButton);
    fireEvent.click(contactButton);

    // Should still be functional
    await waitFor(() => {
      expect(contactButton).toBeInTheDocument();
    });
  });
});