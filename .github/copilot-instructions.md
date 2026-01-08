# Copilot Instructions for Diasam Smart Solutions Website

## Project Overview
Static single-page website for **Diasam Smart Solutions** - a smart home technology company. Built with HTML/CSS/JS using jQuery PagePiling for full-page vertical scrolling on desktop, with normal scroll fallback on mobile (<768px).

## Architecture

### Key Directories
- **`index.html`** — Main (and only) page; contains all sections and inline scripts
- **`agency-hotspot/`** — Custom theme assets
  - `css/style.css` — Core styles (typography, layout, PagePiling, animations)
  - `css/custom.css` — Project-specific overrides (product cards, portfolio grid)
  - `css/tablet-responsive.css` — Tablet breakpoints (768px–1024px)
  - `js/script.js` — PagePiling initialization, section animations, counters
  - `js/custom.js` — Portfolio image shuffle, mobile carousel logic
- **`vendor/`** — Third-party libraries (Bootstrap bundle, jQuery plugins, PHPMailer)

### Critical Responsive Breakpoints
```css
/* Mobile: < 768px — PagePiling DISABLED, normal scroll */
/* Tablet: 768px - 1024px — PagePiling active, adjusted layouts */
/* Desktop: > 1024px — Full PagePiling experience */
```

## Key Patterns

### PagePiling Sections
Each section uses class `section` and must have a corresponding anchor in the `anchors` array:
```javascript
// script.js line 59
anchors: ['home-banner', 'about', 'team', 'portfolio', 'contact']
```
When adding sections, update both HTML `id` attributes AND the anchors array.

### Animation Classes
Animations trigger via `onLeave` callbacks in PagePiling. Use these class prefixes:
- `section1left/right`, `section3left/right`, `section4left/right` — slide animations
- `about-fadeIn`, `about-zoom1In` through `about-zoom5In` — per-element staggered zoom
- `team-fade`, `portfolio-fade` — section-specific zoom effects

### Contact Form
Uses `vendor/contact-mailer.php` with PHPMailer. Form handler expects AJAX requests with fields:
- `userName` OR (`firstName` + `lastName`)
- `userEmail`, `userPhone`, `userMessage`

### Service Modals
Feature boxes with `data-service` attribute open dynamic modals. Add new services in the inline `<script>` under `serviceData` object (in `index.html`).

## Styling Conventions

### CSS Class Prefixes
- `.main-font` — Montserrat headings
- `.alt-font` — Roboto body text
- `.btn-trans` / `.btn-white` — Transparent/white button variants
- `.bg-{color}` + `.opacity-{1-9}` — Overlay combinations

### Color Variables (used inline)
```css
Primary Blue: #11769e, #012e57
Brown/Warm: #8B4513
Dark: #171717, #232728
```

### Responsive Overrides
Add mobile-specific styles in `custom.css` or `tablet-responsive.css` using `@media` queries. Follow existing pattern of using `!important` sparingly for critical overrides.

## Development Notes

### No Build System
This is a static site—no npm, bundler, or compilation. Edit files directly and refresh browser.

### Local Testing
Serve via any static server. PHP required only for contact form testing:
```powershell
php -S localhost:8000
```

### Adding Portfolio Items
1. Add image to `agency-hotspot/images/`
2. Update `portfolioImages` array in `custom.js`
3. Add corresponding HTML card in `#portfolio` section

### Team Carousel
Uses Owl Carousel (initialized in `script.js`). Add team members by duplicating `.team-card-professional` blocks in the `#team-slider` container.

## Common Tasks

| Task | Location |
|------|----------|
| Change company info/branding | `index.html` header, footer |
| Update service descriptions | Inline `serviceData` object in `index.html` |
| Modify section animations | `script.js` `onLeave` callbacks |
| Adjust mobile behavior | `script.js` (line 19-50), `tablet-responsive.css` |
| Update contact email | `vendor/contact-mailer.php` line 18 |
