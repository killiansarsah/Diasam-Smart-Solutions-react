# iOS Background Image Fix - Summary

## Problem

On iOS devices (iPhone/iPad), background images with `background-attachment: fixed` were causing zoom-out issues. The backgrounds would appear scaled incorrectly or would zoom out when scrolling through different sections of the website.

## Root Cause

iOS Safari doesn't properly support `background-attachment: fixed` for performance reasons. This CSS property is often ignored or causes unexpected behavior on mobile devices, leading to:

- Background images zooming out
- Improper scaling
- Backgrounds not staying in place
- Visual glitches during scrolling

## Solution Implemented

Added comprehensive CSS fixes in `agency-hotspot/css/custom.css` that:

### 1. **Disable Fixed Attachment on Mobile** (max-width: 1024px)

- Changed `background-attachment: fixed` to `background-attachment: scroll` for all affected sections
- Targets: About section, Team section, Portfolio section

### 2. **iOS-Specific Fixes** (@supports -webkit-touch-callout)

- Uses feature detection to specifically target iOS Safari
- Ensures proper background sizing with vendor prefixes
- Applies `background-size: cover` with all browser prefixes

### 3. **Mobile Optimization** (max-width: 767px)

- Ensures sections maintain proper height (min-height: 100vh)
- Adds hardware acceleration with `transform: translateZ(0)`
- Prevents overflow issues
- Locks background position to center

## Affected Sections

1. **Our Services** (About section - slide2)
2. **About Us** (Team section - slide3)
3. **Our Works** (Portfolio section - slide4)

## Technical Details

The fix uses multiple CSS strategies:

- Media queries for responsive breakpoints
- Feature detection with `@supports`
- Hardware acceleration for smoother rendering
- Vendor prefixes for maximum compatibility

## Testing Recommendations

Test on:

- iPhone (Safari)
- iPad (Safari)
- Android devices (Chrome)
- Desktop browsers (to ensure no regression)

## Files Modified

- `agency-hotspot/css/custom.css` - Added iOS background fixes (lines 1015-1095)
