import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import useWindowDimensions from './useWindowsDimension';

describe('useWindowDimensions', () => {
  const originalInnerWidth = window.innerWidth;
  const originalInnerHeight = window.innerHeight;

  beforeEach(() => {
    // Set initial window size
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    });
  });

  afterEach(() => {
    // Restore original values
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: originalInnerHeight,
    });
  });

  it('should return initial window dimensions', () => {
    const { result } = renderHook(() => useWindowDimensions());

    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
  });

  it('should update dimensions on window resize', async () => {
    const { result } = renderHook(() => useWindowDimensions());

    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);

    // Simulate window resize
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1920,
      });
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 1080,
      });
      window.dispatchEvent(new Event('resize'));
    });

    await waitFor(() => {
      expect(result.current.width).toBe(1920);
      expect(result.current.height).toBe(1080);
    });
  });

  it('should handle mobile dimensions', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 667,
    });

    const { result } = renderHook(() => useWindowDimensions());

    expect(result.current.width).toBe(375);
    expect(result.current.height).toBe(667);
  });

  it('should handle tablet dimensions', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 1024,
    });

    const { result } = renderHook(() => useWindowDimensions());

    expect(result.current.width).toBe(768);
    expect(result.current.height).toBe(1024);
  });

  it('should handle multiple rapid resize events', async () => {
    const { result } = renderHook(() => useWindowDimensions());

    const sizes = [
      { width: 800, height: 600 },
      { width: 1024, height: 768 },
      { width: 1280, height: 720 },
      { width: 1920, height: 1080 },
    ];

    act(() => {
      sizes.forEach(({ width, height }) => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: width,
        });
        Object.defineProperty(window, 'innerHeight', {
          writable: true,
          configurable: true,
          value: height,
        });
        window.dispatchEvent(new Event('resize'));
      });
    });

    await waitFor(() => {
      expect(result.current.width).toBe(1920);
      expect(result.current.height).toBe(1080);
    });
  });

  it('should handle extreme dimensions', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 4096,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 2160,
    });

    const { result } = renderHook(() => useWindowDimensions());

    expect(result.current.width).toBe(4096);
    expect(result.current.height).toBe(2160);
  });

  it('should handle very small dimensions', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 320,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 480,
    });

    const { result } = renderHook(() => useWindowDimensions());

    expect(result.current.width).toBe(320);
    expect(result.current.height).toBe(480);
  });

  it('should cleanup event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useWindowDimensions());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });

  it('should maintain dimensions object reference stability when not resizing', () => {
    const { result } = renderHook(() => useWindowDimensions());

    const firstDimensions = result.current;

    // Re-render without resize
    const { result: result2 } = renderHook(() => useWindowDimensions());

    expect(result2.current.width).toBe(firstDimensions.width);
    expect(result2.current.height).toBe(firstDimensions.height);
  });

  it('should handle landscape to portrait orientation change', async () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    });

    const { result } = renderHook(() => useWindowDimensions());

    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);

    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 1024,
      });
      window.dispatchEvent(new Event('resize'));
    });

    await waitFor(() => {
      expect(result.current.width).toBe(768);
      expect(result.current.height).toBe(1024);
    });
  });
});