# Contributing

Thank you for your interest in contributing to `@holmesdev/cursors`! We welcome contributions from the community and appreciate your help in making this project better.

## Maintainers

- David Dean
- Marco Buontempo
- Sofia Mironenko

## Acknowledgements

Special thanks to Holmesglen and the teachers Alex Bicknell and Tom Power for their support and guidance.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)
- [Testing Requirements](#testing-requirements)
- [Accessibility Requirements](#accessibility-requirements)
- [Documentation](#documentation)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. This code helps ensure a welcoming environment for everyone.

**By participating in this project, you agree to:**
- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Maintain a friendly and professional environment

Please read the full [Code of Conduct](CODE_OF_CONDUCT.md) for details on our community standards and enforcement procedures.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/cursors.git
   cd cursors
   ```
3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/haus-of-cards/cursors.git
   ```
4. **Create a new branch** for your work:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

## Development Setup

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **Git**

### Installation

1. **Install dependencies** from the root of the monorepo:
   ```bash
   npm install
   ```

2. **Install workspace dependencies**:
   ```bash
   cd package
   npm install
   ```

### Available Scripts

From the `package` directory:

- `npm run build` - Build the package for production
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report
- `npm run storybook` - Start Storybook dev server (port 6006)
- `npm run build-storybook` - Build Storybook for production
- `npm run prettier` - Format code with Prettier
- `npm audit` - Check for security vulnerabilities

From the root directory:

- `npm run package:build` - Build the package workspace
- `npm run package:storybook` - Start package Storybook
- `npm run frontend:dev` - Start frontend dev server

## Project Structure

```
cursors/
├── package/              # Main npm package (@holmesdev/cursors)
│   ├── src/
│   │   ├── component/    # ReactCursor component
│   │   ├── types/        # TypeScript type definitions
│   │   ├── utils/        # Utility functions
│   │   └── stories/      # Storybook stories
│   ├── dist/             # Build output (git-ignored)
│   └── package.json
├── frontend/             # Demo website
├── docs/                 # Additional documentation
└── package.json          # Monorepo root
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Avoid `any` types; use proper type definitions
- Export types from `src/types/index.ts`
- Follow existing type naming conventions

### Code Style

- **Formatting**: Use Prettier (run `npm run prettier` before committing)
- **Linting**: Follow ESLint rules (fix any errors before submitting)
- **Indentation**: Use 2 spaces (enforced by Prettier)
- **Naming**:
  - Components: PascalCase (e.g., `ReactCursor`)
  - Functions/variables: camelCase (e.g., `detectAccessibilityEnv`)
  - Types/Interfaces: PascalCase (e.g., `CursorLayer`)
  - Constants: UPPER_SNAKE_CASE or camelCase depending on context

### React Best Practices

- Use functional components with hooks
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use `useMemo` and `useCallback` appropriately for performance
- Follow React 19 patterns and conventions

### File Organization

- One component per file
- Co-locate related files (component + tests + styles)
- Group imports: external → internal → relative → types

## Commit Guidelines

We follow conventional commit messages for clarity and automated versioning:

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Commit Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates
- `perf`: Performance improvements
- `ci`: CI/CD changes

### Examples

```bash
feat(cursor): add new hover effect animation
fix(accessibility): disable cursor on forced-colors mode
docs(readme): update installation instructions
test(component): add tests for reduced motion detection
refactor(utils): extract SVG resolution logic
```

### Commit Rules

- Write clear, descriptive commit messages
- Keep commits focused (one logical change per commit)
- Reference issue numbers when applicable: `fix(cursor): resolve click delay (#123)`
- Use imperative mood ("add feature" not "added feature")

## Pull Request Process

1. **Update your branch** with the latest changes from upstream:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Ensure all tests pass**:
   ```bash
   npm run test
   ```

3. **Ensure the build succeeds**:
   ```bash
   npm run build
   ```

4. **Check code style**:
   ```bash
   npm run prettier
   ```

5. **Create a Pull Request** on GitHub:
   - Provide a clear title and description
   - Reference any related issues
   - Include screenshots/GIFs for UI changes
   - List breaking changes (if any)

6. **Respond to feedback** from maintainers promptly

### PR Checklist

Before submitting, ensure:

- [ ] All tests pass (`npm run test`)
- [ ] Code is formatted (`npm run prettier`)
- [ ] No ESLint errors
- [ ] New features include tests
- [ ] Accessibility is maintained (see [Accessibility Requirements](#accessibility-requirements))
- [ ] Documentation is updated (if needed)
- [ ] Commit messages follow guidelines
- [ ] Branch is up to date with upstream/main

## Reporting Issues

### Before Reporting

1. Check existing issues to avoid duplicates
2. Ensure you're using the latest version
3. Try to reproduce the issue in isolation

### Issue Template

When creating an issue, include:

- **Clear title**: Brief description of the issue
- **Description**: Detailed explanation
- **Steps to reproduce**: How to trigger the issue
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**:
  - React version
  - Node.js version
  - Browser and version
  - Operating system
- **Code example**: Minimal reproduction case (CodeSandbox/JSFiddle if possible)
- **Screenshots**: If applicable

### Bug Reports

Use the label `bug` and include:
- Error messages or console logs
- Stack traces
- Network errors (if any)

### Feature Requests

Use the label `enhancement` and include:
- Use case or problem description
- Proposed solution
- Alternatives considered
- Additional context

## Testing Requirements

### Writing Tests

- Write tests for all new features
- Maintain or improve test coverage
- Use Vitest and React Testing Library
- Follow the existing test patterns
- Test accessibility features (see below)

### Test Structure

```typescript
describe("ComponentName", () => {
  describe("Feature Group", () => {
    it("should do something specific", () => {
      // Arrange
      // Act
      // Assert
    });
  });
});
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

### Test Coverage

- Aim for high test coverage (>80%)
- Focus on critical paths and edge cases
- Include accessibility tests
- Test error handling

## Accessibility Requirements

**Accessibility is a core requirement** for this project. All contributions must maintain or improve accessibility.

### Requirements

1. **New features must respect accessibility preferences**:
   - Test with reduced motion
   - Test with forced colors mode
   - Test with high contrast mode
   - Test on touch devices

2. **Test accessibility features**:
   - Reduced motion
   - Forced colors
   - High contrast
   - Touch devices

3. **Maintain ARIA attributes**:
   - Use `aria-hidden="true"` for decorative cursor
   - Use `role="presentation"` appropriately

4. **Review accessibility documentation**:
   - See [ACCESSIBILITY.md](ACCESSIBILITY.md) for detailed guidelines

### Testing Accessibility

```bash
# Test with reduced motion preference
# Test with forced colors mode
# Test with high contrast mode
# Test on touch devices
```

See `package/src/component/index.test.tsx` for accessibility test examples.

## Documentation

### Code Documentation

- Add JSDoc comments for public APIs
- Explain complex logic with inline comments
- Update TypeScript types when changing interfaces

### README Updates

- Update README.md when adding features
- Keep examples current and working
- Update configuration tables

### Storybook

- Add Storybook stories for new features
- Update existing stories if behavior changes
- Document all component props and options

## Release Process

Releases are managed by maintainers. The process typically includes:

1. Version bumping
2. Changelog generation
3. NPM package publishing
4. GitHub release creation

## Questions?

- Open a [discussion](https://github.com/haus-of-cards/cursors/discussions)
- Contact maintainers via GitHub
- Check existing [issues](https://github.com/haus-of-cards/cursors/issues)

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

Thank you for contributing to `@holmesdev/cursors`! 🎉

Code of Conduct: [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)