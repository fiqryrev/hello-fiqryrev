# Project File Structure

## Component Organization

All components are now numbered according to their rendering order and grouped by purpose:

### Layout Components (0-prefix)
- `0-Header.tsx` - Site header/navigation
- `0-Footer.tsx` - Site footer
- `0-ScrollToTopButton.tsx` - Scroll to top button

### Page Section Components (numbered by order)
1. `1-HeroSectionNew.tsx` - Hero section
2. `2-CareerHighlights.tsx` - Career highlights section
3. `3-WorkExperience.tsx` - Work experience section
4. `4-RolePortfolio.tsx` - Role portfolio with parallax scrolling
   - `4-RoleIcons.tsx` - Supporting icons for RolePortfolio
5. `5-AIBuiltSection.tsx` - AI-built section

### Archived Components
Located in `app/components/_archive/`:
- `ErrorBoundary.tsx` - Error boundary component (still used by contact form)
- `HeroSection.tsx` - Old hero section (replaced by HeroSectionNew)
- `ProjectsSection.tsx` - Projects section (currently unused)

## Styles Organization

All CSS files are now in `app/styles/components/`:
- `4-RolePortfolio.module.css` - Styles for RolePortfolio
- `4-RolePortfolioMenu.css` - Menu styles for RolePortfolio
- `5-AIBuiltSection.module.css` - Styles for AIBuiltSection

## Import Examples

```tsx
// Layout components
import Header from './components/0-Header';
import Footer from './components/0-Footer';

// Page sections
import HeroSectionNew from './components/1-HeroSectionNew';
import CareerHighlights from './components/2-CareerHighlights';

// CSS imports
import styles from '../styles/components/5-AIBuiltSection.module.css';
```

## Benefits of This Structure

1. **Clear Order**: Numbered components show the page flow
2. **Organized Styles**: All CSS in dedicated styles folder
3. **Clean Components**: Only TSX files in components folder
4. **Easy Navigation**: Number prefix helps find components quickly
5. **Archived Code**: Unused components preserved in _archive folder