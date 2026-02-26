# Test Suite Documentation

This directory contains the comprehensive test suite for the portfolio application.

## Structure

- `setup.ts` - Global test configuration and setup
- Component tests are co-located with their source files using the `.test.tsx` extension
- Unit tests for utilities and pure functions use `.test.ts` extension

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test:coverage

# Run tests with UI
npm test:ui
```

## Test Coverage

### High Priority (New Features)
- ✅ `useWindowsDimension` hook - Window resize handling and dimension tracking
- ✅ `ProjectCard` component - Project display with multiple statuses

### Modified Components
- ✅ `Navbar` - Navigation with responsive behavior and clipboard functionality
- ✅ `CertificateCard` - Certificate display
- ✅ `AboutPage` - About section with certificates and education timeline
- ✅ `ProjectPage` - Projects grid layout
- ✅ `Experience` - Work experience timeline

### Data Validation
- ✅ Type definitions validation
- ✅ Education mock data validation
- ✅ FrontEnd skills mock data validation
- ✅ Projects mock data validation
- ✅ Constants validation

## Testing Best Practices

1. **Component Testing**: Use React Testing Library for all component tests
2. **Hook Testing**: Use `renderHook` from @testing-library/react
3. **User Interactions**: Test from the user's perspective
4. **Accessibility**: Verify ARIA attributes and semantic HTML
5. **Edge Cases**: Test boundary conditions and error states

## Mocking Strategy

- Window API (resize, clipboard, etc.) mocked in setup
- External dependencies mocked per-test when needed
- Mock data files for consistent test data

## Coverage Goals

- Minimum 80% code coverage
- 100% coverage for pure functions
- Critical paths fully tested
