# Design Standardization Guide
## Fiqryrev Portfolio Website

This document serves as the comprehensive design system and pattern guide for the Fiqryrev portfolio website. All future development and modifications should adhere to these standards to maintain visual consistency and user experience quality.

---

## <¨ Core Design Philosophy

### Design Principles
1. **Dark Elegance**: Black background as the foundation
2. **Glassmorphism**: Semi-transparent elements with backdrop blur
3. **Gradient Accents**: Purple-to-pink gradients for visual interest
4. **Smooth Interactions**: Subtle animations and hover effects
5. **Visual Hierarchy**: Clear content structure with consistent spacing

---

## < Color System

### Primary Colors

#### Background Colors
```css
/* Base Background */
bg-black                    /* #000000 - Primary background */
bg-gray-950/98             /* Dark overlays for dropdowns */
bg-black/30                /* Subtle dark overlays */
bg-black/40                /* Form input backgrounds */
bg-black/60                /* Stat badge overlays */
```

#### Gradient Colors
```css
/* Primary Gradients */
from-blue-400 via-purple-400 to-pink-400    /* Main title gradients */
from-purple-400 to-pink-400                 /* Section heading gradients */
from-purple-500 to-pink-500                 /* Button gradients */
from-blue-400 to-purple-400                 /* Hover state gradients */
```

#### Glassmorphism Backgrounds
```css
/* Card Backgrounds */
from-purple-900/20 to-pink-900/20          /* Main card gradient */
from-purple-900/10 to-pink-900/10          /* Subtle card gradient */
bg-white/5                                  /* Badge backgrounds */
bg-white/10                                 /* Hover states */
backdrop-blur-sm                            /* Blur effect */
backdrop-blur-md                            /* Medium blur */
backdrop-blur-xl                            /* Strong blur */
```

#### Border Colors
```css
border-white/10                             /* Subtle borders */
border-white/20                             /* Default borders */
border-purple-400/10                        /* Very subtle purple */
border-purple-400/20                        /* Default purple borders */
border-purple-400/30                        /* Hover state borders */
border-purple-400/50                        /* Active/focus borders */
```

#### Text Colors
```css
text-white                                  /* Primary text */
text-white/80                               /* Secondary text */
text-white/70                               /* Tertiary text */
text-white/60                               /* Muted text */
text-white/50                               /* Very muted text */
text-white/40                               /* Disabled text */
text-purple-400                             /* Purple accent text */
text-purple-300                             /* Purple hover text */
```

### Status Colors
```css
/* Success/Available */
bg-green-400                                /* Success indicators */
bg-green-500                                /* Success solid */

/* Warning/Pending */
bg-yellow-400                               /* Warning indicators */
bg-orange-400                               /* Alert states */

/* Info/Active */
bg-blue-400                                 /* Information */
bg-purple-400                               /* Active states */
bg-purple-500                               /* Active solid */
```

---

## =Â Component Patterns

### 1. Page Headers

#### Structure
```tsx
<div className="text-center mb-16">
  {/* Status Badge */}
  <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
    </span>
    <span className="text-xs text-white/70 font-medium">Status Text</span>
  </div>

  {/* Main Title */}
  <h1 className="text-4xl md:text-6xl font-bold mb-4">
    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      Page Title
    </span>
  </h1>

  {/* Subtitle */}
  <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto">
    Page description text
  </p>
</div>
```

### 2. Glassmorphism Cards

#### Basic Card
```tsx
<div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
  {/* Card content */}
</div>
```

#### Hover-Enhanced Card
```tsx
<div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
  {/* Card content */}
</div>
```

### 3. Buttons

#### Primary Gradient Button
```tsx
<button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300">
  Button Text
</button>
```

#### Secondary Glass Button
```tsx
<button className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
  Button Text
</button>
```

#### Pill Badge Button
```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
  <span className="text-xs text-white/70 font-medium">Badge Text</span>
</div>
```

### 4. Status Indicators

#### Active/Available Indicator
```tsx
<span className="relative flex h-2 w-2">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
```

#### Purple Activity Indicator
```tsx
<span className="relative flex h-2 w-2">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
```

### 5. Separators

#### Gradient Separator
```tsx
<div className="relative my-16">
  <div className="absolute inset-0 flex items-center">
    <div className="w-full border-t border-purple-400/20"></div>
  </div>
  <div className="relative flex justify-center">
    <span className="bg-black px-4">
      <span className="text-purple-400">&</span>
    </span>
  </div>
</div>
```

### 6. Tags and Labels

#### Category/Tag Badge
```tsx
<span className="bg-purple-500/10 border border-purple-400/20 text-purple-400 text-xs px-3 py-1 rounded-full">
  Tag Name
</span>
```

#### Subtle Tag
```tsx
<span className="text-xs px-2 py-1 bg-black/30 border border-purple-400/10 rounded-md text-white/50">
  Tag
</span>
```

### 7. Form Elements

#### Text Input
```tsx
<input
  type="text"
  className="px-6 py-3 bg-black/40 border border-purple-400/20 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400/40 transition-colors"
  placeholder="Enter text"
/>
```

#### Text Area
```tsx
<textarea
  className="w-full px-6 py-4 bg-black/40 border border-purple-400/20 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400/40 transition-colors resize-none"
  rows={5}
  placeholder="Enter message"
/>
```

---

## =Ð Layout Patterns

### Page Structure
```tsx
<div className="min-h-screen bg-black text-white">
  <div className="pt-24"> {/* Space for fixed header */}
    <div className="container mx-auto px-4 py-12">
      {/* Page content */}
    </div>
  </div>
</div>
```

### Section Spacing
- **Between major sections**: `mb-16`
- **Between subsections**: `mb-12`
- **Between cards in a grid**: `gap-8` or `gap-6`
- **Internal card padding**: `p-6` or `p-8`
- **Small elements**: `gap-2` or `gap-3`

### Responsive Grid Patterns
```css
/* 3-column grid */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8

/* 2-column grid */
grid grid-cols-1 lg:grid-cols-2 gap-8

/* Flex wrap for tags/badges */
flex flex-wrap gap-2 or gap-3
```

---

## ( Animation Patterns

### Hover Effects

#### Scale on Hover
```css
hover:scale-105 transition-all duration-300
```

#### Shadow Glow on Hover
```css
hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
```

#### Border Color Change
```css
hover:border-purple-400/30 transition-all duration-300
```

#### Text Gradient on Hover
```css
group-hover:text-transparent
group-hover:bg-gradient-to-r
group-hover:from-blue-400
group-hover:to-purple-400
group-hover:bg-clip-text
```

#### Arrow Animation
```css
group-hover:translate-x-1 transition-transform
```

### Loading/Activity Animations

#### Ping Animation
```css
animate-ping
```

#### Custom Transitions
```css
transition-all duration-300  /* Standard */
transition-all duration-500  /* Slower */
transition-colors            /* Color only */
transition-transform         /* Transform only */
```

---

## <¯ Typography Guidelines

### Font Sizes
```css
/* Headings */
text-6xl    /* Hero titles (desktop) */
text-4xl    /* Hero titles (mobile) / Section headings */
text-3xl    /* Large section headings */
text-2xl    /* Card titles */
text-xl     /* Subtitles */
text-lg     /* Large body text */
text-base   /* Default body text */
text-sm     /* Small text */
text-xs     /* Very small text / badges */
```

### Font Weights
```css
font-bold       /* Headings */
font-semibold   /* Subheadings */
font-medium     /* Buttons, labels */
font-normal     /* Body text */
font-light      /* Subtitles */
```

### Responsive Typography
```css
/* Mobile-first approach */
text-4xl md:text-6xl    /* Responsive hero title */
text-2xl md:text-3xl    /* Responsive section heading */
text-lg md:text-xl      /* Responsive subtitle */
```

---

## =¼ Image Handling

### Image with Gradient Overlay
```tsx
<div className="relative h-64 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
  <Image
    src="/image.jpg"
    alt="Description"
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
  />
</div>
```

### Logo/Icon Container
```tsx
<div className="relative w-24 h-24 flex-shrink-0">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-20"></div>
  <Image src="/logo.png" alt="Logo" fill className="object-contain relative z-10" />
</div>
```

---

## =ñ Responsive Design Patterns

### Breakpoints
- **Mobile**: Default (mobile-first)
- **Tablet**: `sm:` (640px)
- **Desktop**: `md:` (768px)
- **Large Desktop**: `lg:` (1024px)
- **Extra Large**: `xl:` (1280px)

### Common Responsive Patterns
```css
/* Hide on mobile, show on desktop */
hidden md:flex

/* Stack on mobile, row on desktop */
flex flex-col md:flex-row

/* Full width mobile, auto desktop */
w-full md:w-auto

/* Different padding */
px-4 md:px-6 lg:px-8

/* Conditional text alignment */
text-center md:text-left
```

---

## <ª Special Effects

### Particle Effect
```tsx
// Add to component
<ParticleEffect />

// CSS needed in globals.css
.particle-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  left: -10px;
  width: 10px;
  height: 10px;
  background: linear-gradient(to right, #a855f7, #ec4899);
  border-radius: 50%;
  filter: blur(1px);
  animation: particleFloat 3s ease-in-out infinite;
  opacity: 0.4;
}

@keyframes particleFloat {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 0;
  }
  10% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.4;
  }
  100% {
    transform: translateX(100vw) translateY(-20px);
    opacity: 0;
  }
}
```

### Glow Effects
```css
/* Purple glow shadow */
shadow-[0_0_30px_rgba(168,85,247,0.1)]

/* Stronger glow on hover */
hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]

/* Button glow */
hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
```

---

## =Ë Common Page Sections

### CTA Section Template
```tsx
<section className="text-center">
  <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-400/10 border border-purple-400/30">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span className="text-xs text-white/70 font-medium">CTA Badge</span>
    </div>

    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        CTA Title
      </span>
    </h2>

    <p className="text-white/80 mb-3 text-lg">
      Primary description
    </p>

    <p className="text-white/60 mb-8 text-base max-w-2xl mx-auto">
      Secondary description with more details
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* Primary button */}
      {/* Secondary button */}
    </div>
  </div>
</section>
```

---

## =€ Implementation Checklist

When creating or modifying pages, ensure:

- [ ] Black background (`bg-black`) is applied
- [ ] Text is white with appropriate opacity levels
- [ ] Headers have the animated status badge
- [ ] Main titles use gradient text effect
- [ ] Cards use glassmorphism with purple/pink gradients
- [ ] Hover effects are smooth with 300ms transitions
- [ ] Buttons follow the gradient or glass style
- [ ] Spacing follows the standardized patterns
- [ ] Page has proper `pt-24` padding for header clearance
- [ ] Separators use the gradient star pattern
- [ ] Tags and badges use purple accent colors
- [ ] CTAs have the green availability indicator
- [ ] Images have appropriate overlays and hover effects
- [ ] Responsive breakpoints are properly implemented
- [ ] Animations are subtle and professional

---

## =Ý Example Implementation

Here's a complete example of a standardized page:

```tsx
import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

const StandardPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-xs text-white/70 font-medium">Page Status</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Page Title
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light">
              Page subtitle or description
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:border-purple-400/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-400/20">
                <BookOpen className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Section Title</h3>
                <p className="text-white/70 leading-relaxed">
                  Content description with proper text opacity for readability.
                </p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="relative my-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-400/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-black px-4">
                <span className="text-purple-400">&</span>
              </span>
            </div>
          </div>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Call to Action
                </span>
              </h2>
              <p className="text-white/60 mb-8">
                Supporting text for the call to action.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300">
                Action Button
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StandardPage;
```

---

## = Version History

- **v1.0.0** (2024-01-14): Initial design system documentation
- Created by: Claude AI Assistant
- For: Fiqry Revadiansyah Portfolio Website

---

## =Ú Additional Notes

1. **Consistency is Key**: Always refer to this guide when making design decisions
2. **Performance**: Use `backdrop-blur` sparingly on mobile devices for better performance
3. **Accessibility**: Ensure sufficient color contrast ratios, especially with transparent backgrounds
4. **Testing**: Always test hover effects and animations on both desktop and mobile devices
5. **Future Updates**: This document should be updated whenever new patterns are introduced

---

*This design system ensures a cohesive, professional, and modern user experience across the entire Fiqryrev portfolio website.*