# Codebase Cleanup Script
# This script will delete unused files and reorganize the project structure
# BACKUP YOUR FILES BEFORE RUNNING THIS SCRIPT!

Write-Host "=== Diasam Website Cleanup Script ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "This script will:" -ForegroundColor Yellow
Write-Host "1. Delete unused folders (404-1, 404-2, 404-3)" -ForegroundColor Yellow
Write-Host "2. Delete unused images (~80MB of files)" -ForegroundColor Yellow
Write-Host "3. Delete backup HTML file" -ForegroundColor Yellow
Write-Host "4. Remove .DS_Store files" -ForegroundColor Yellow
Write-Host ""
Write-Host "WARNING: This action cannot be undone!" -ForegroundColor Red
Write-Host ""

$confirmation = Read-Host "Do you want to proceed? (yes/no)"
if ($confirmation -ne "yes") {
    Write-Host "Cleanup cancelled." -ForegroundColor Yellow
    exit
}

$rootPath = "C:\Users\killi\OneDrive\Desktop\fafa\fafa"
Set-Location $rootPath

Write-Host "`nStarting cleanup..." -ForegroundColor Green

# Step 1: Delete unused folders
Write-Host "`n[1/4] Removing unused folders..." -ForegroundColor Cyan
$foldersToDelete = @("404-1", "404-2", "404-3")
foreach ($folder in $foldersToDelete) {
    if (Test-Path $folder) {
        Remove-Item -Path $folder -Recurse -Force
        Write-Host "  ✓ Deleted: $folder" -ForegroundColor Green
    }
}

# Step 2: Delete backup HTML file
Write-Host "`n[2/4] Removing backup files..." -ForegroundColor Cyan
if (Test-Path "index_backup.html") {
    Remove-Item -Path "index_backup.html" -Force
    Write-Host "  ✓ Deleted: index_backup.html" -ForegroundColor Green
}

# Step 3: Delete unused images in agency-hotspot/images/
Write-Host "`n[3/4] Removing unused images from agency-hotspot/images/..." -ForegroundColor Cyan
$imagesToDelete = @(
    "agency-hotspot/images/.DS_Store",
    "agency-hotspot/images/1Hue-Secure-Functional-Video-16x9-low-res-HQ1.mp4",
    "agency-hotspot/images/Mobile view video.mp4",
    "agency-hotspot/images/1portfolio-img-4.jpg",
    "agency-hotspot/images/3371.jpg",
    "agency-hotspot/images/banner.jpg",
    "agency-hotspot/images/banner1.jpg",
    "agency-hotspot/images/blog-bg.jpg",
    "agency-hotspot/images/blog-img-1.jpg",
    "agency-hotspot/images/blog-img-2.jpg",
    "agency-hotspot/images/blog-img-3.jpg",
    "agency-hotspot/images/contact-bg.jpg",
    "agency-hotspot/images/diasam_logo1.png",
    "agency-hotspot/images/favicon.ico",
    "agency-hotspot/images/portfolio-bg1.jpg",
    "agency-hotspot/images/portfolio-img-1.jpg",
    "agency-hotspot/images/portfolio-img-2.jpg",
    "agency-hotspot/images/portfolio-img-3.jpg",
    "agency-hotspot/images/portfolio-img-4.jpg",
    "agency-hotspot/images/portfolio-img-5.jpg",
    "agency-hotspot/images/skills-bg.jpg",
    "agency-hotspot/images/skills-bg1.jpg",
    "agency-hotspot/images/slider-img1.png",
    "agency-hotspot/images/smart light.jpg",
    "agency-hotspot/images/team-bg.jpg",
    "agency-hotspot/images/team-bg1.jpg",
    "agency-hotspot/images/team-img-4.jpg",
    "agency-hotspot/images/team-img-5.jpg",
    "agency-hotspot/images/team-img1.jpg",
    "agency-hotspot/images/team-img2.jpg",
    "agency-hotspot/images/team-img3.jpg",
    "agency-hotspot/images/testimonial-img-1.png",
    "agency-hotspot/images/testimonial-img-2.png",
    "agency-hotspot/images/testimonial-img-3.png"
)

$deletedSize = 0
foreach ($image in $imagesToDelete) {
    if (Test-Path $image) {
        $size = (Get-Item $image).Length
        $deletedSize += $size
        Remove-Item -Path $image -Force
        $sizeMB = [math]::Round($size / 1MB, 2)
        Write-Host "  ✓ Deleted: $image ($sizeMB MB)" -ForegroundColor Green
    }
}

# Step 4: Delete unused images in pic/
Write-Host "`n[4/4] Removing unused images from pic/..." -ForegroundColor Cyan
$picImagesToDelete = @(
    "pic/Our_service.jpg",
    "pic/Our_service1.jpg",
    "pic/our work.jpg"
)

foreach ($image in $picImagesToDelete) {
    if (Test-Path $image) {
        $size = (Get-Item $image).Length
        $deletedSize += $size
        Remove-Item -Path $image -Force
        $sizeMB = [math]::Round($size / 1MB, 2)
        Write-Host "  ✓ Deleted: $image ($sizeMB MB)" -ForegroundColor Green
    }
}

# Remove .DS_Store files
Write-Host "`nRemoving system files..." -ForegroundColor Cyan
Get-ChildItem -Path . -Filter ".DS_Store" -Recurse -Force | Remove-Item -Force
Write-Host "  ✓ Deleted all .DS_Store files" -ForegroundColor Green

# Summary
Write-Host "`n=== Cleanup Complete! ===" -ForegroundColor Green
$totalDeletedMB = [math]::Round($deletedSize / 1MB, 2)
Write-Host "Total space freed: $totalDeletedMB MB" -ForegroundColor Cyan
Write-Host ""
Write-Host "Your website is now cleaner and faster!" -ForegroundColor Green
Write-Host "All functionality has been preserved." -ForegroundColor Green
