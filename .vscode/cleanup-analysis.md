# Codebase Cleanup Analysis

## Files Currently in Use

### HTML Files

- ✅ `index.html` - Main website file (KEEP)
- ❌ `index_backup.html` - Backup file (DELETE)

### Images in `agency-hotspot/images/` (USED)

1. ✅ `logo.png` - Favicon and navigation logo
2. ✅ `diasam_logo.png` - Main logo
3. ✅ `Hue-Secure-Functional-Video-16x9-low-res-HQ1.mp4` - Banner video
4. ✅ `slider-img.png` - Banner image
5. ✅ `portfolio-bg.jpg` - Portfolio section background
6. ✅ `Fafa.jpeg` - Team member photo (Sam G)
7. ✅ `killian.jpeg` - Team member photo (Killian S)
8. ✅ `Alexa.png` - Service modal image
9. ✅ `Smart Lock.png` - Service modal image
10. ✅ `CCTV SYSTEM.png` - Service modal image
11. ✅ `Video-Doorbell.jpg` - Service modal image

### Images in `pic/` (USED - Gallery Images)

1. ✅ `Daytime.jpg`
2. ✅ `Daytime (2).jpg`
3. ✅ `Daytime (3).jpg`
4. ✅ `Daytime (4).jpg`
5. ✅ `Daytime (5).jpg`
6. ✅ `Daytime (6).jpg`
7. ✅ `Daytime (7).jpg`
8. ✅ `Daytime (8).jpg`
9. ✅ `Daytime (9).jpg`
10. ✅ `Daytime (10).jpg`
11. ✅ `Night1.jpg`
12. ✅ `Night2.jpg`
13. ✅ `Night3.jpg`
14. ✅ `Night4.jpg`
15. ✅ `Night5.jpg`
16. ✅ `Night6.jpg`
17. ✅ `Night7.jpg`
18. ✅ `Night8.jpg`
19. ✅ `Night9.jpg`

## Files to DELETE

### Unused Directories (ENTIRE FOLDERS)

- ❌ `404-1/` - Not referenced anywhere
- ❌ `404-2/` - Not referenced anywhere
- ❌ `404-3/` - Not referenced anywhere

### Unused Images in `agency-hotspot/images/`

- ❌ `.DS_Store` - Mac system file
- ❌ `1Hue-Secure-Functional-Video-16x9-low-res-HQ1.mp4` - Duplicate video (37MB!)
- ❌ `Mobile view video.mp4` - Not used (28MB!)
- ❌ `1portfolio-img-4.jpg` - Not used
- ❌ `3371.jpg` - Not used (3MB!)
- ❌ `banner.jpg` - Not used
- ❌ `banner1.jpg` - Not used
- ❌ `blog-bg.jpg` - Not used
- ❌ `blog-img-1.jpg` - Not used
- ❌ `blog-img-2.jpg` - Not used
- ❌ `blog-img-3.jpg` - Not used
- ❌ `contact-bg.jpg` - Not used
- ❌ `diasam_logo1.png` - Duplicate
- ❌ `favicon.ico` - Not used
- ❌ `portfolio-bg1.jpg` - Duplicate
- ❌ `portfolio-img-1.jpg` - Not used
- ❌ `portfolio-img-2.jpg` - Not used
- ❌ `portfolio-img-3.jpg` - Not used
- ❌ `portfolio-img-4.jpg` - Not used
- ❌ `portfolio-img-5.jpg` - Not used
- ❌ `skills-bg.jpg` - Not used (1.2MB!)
- ❌ `skills-bg1.jpg` - Not used
- ❌ `slider-img1.png` - Duplicate
- ❌ `smart light.jpg` - Not used
- ❌ `team-bg.jpg` - Not used (2MB!)
- ❌ `team-bg1.jpg` - Not used
- ❌ `team-img-4.jpg` - Not used
- ❌ `team-img-5.jpg` - Not used
- ❌ `team-img1.jpg` - Not used
- ❌ `team-img2.jpg` - Not used
- ❌ `team-img3.jpg` - Not used
- ❌ `testimonial-img-1.png` - Not used
- ❌ `testimonial-img-2.png` - Not used
- ❌ `testimonial-img-3.png` - Not used

### Unused Images in `pic/`

- ❌ `Our_service.jpg` - Not used (746KB!)
- ❌ `Our_service1.jpg` - Not used
- ❌ `our work.jpg` - Not used (6.4MB! HUGE!)

### System Files

- ❌ `.DS_Store` files (Mac system files)

## Estimated Space Savings

- **404 folders**: ~500KB
- **Unused videos**: ~66MB (37MB + 28MB)
- **Unused large images**: ~13MB (6.4MB + 3MB + 2MB + 1.2MB + 746KB)
- **Other unused images**: ~2MB
- **Total savings**: ~80MB+ (significant!)

## Reorganization Plan

### Proposed New Structure

```
fafa/
├── index.html
├── assets/
│   ├── images/
│   │   ├── logos/
│   │   │   ├── logo.png
│   │   │   └── diasam_logo.png
│   │   ├── team/
│   │   │   ├── fafa.jpeg
│   │   │   └── killian.jpeg
│   │   ├── services/
│   │   │   ├── alexa.png
│   │   │   ├── smart-lock.png
│   │   │   ├── cctv-system.png
│   │   │   └── video-doorbell.jpg
│   │   ├── gallery/
│   │   │   ├── daytime-1.jpg through daytime-10.jpg
│   │   │   └── night-1.jpg through night-9.jpg
│   │   ├── backgrounds/
│   │   │   └── portfolio-bg.jpg
│   │   └── banner/
│   │       ├── slider-img.png
│   │       └── banner-video.mp4
│   ├── css/
│   ├── js/
│   └── fonts/
├── vendor/
└── .vscode/
```

This will make the codebase much cleaner and easier to maintain!
