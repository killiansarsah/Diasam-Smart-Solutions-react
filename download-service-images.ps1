# PowerShell Script to Download Service Images from Unsplash
# This script downloads high-quality images for each service category

Write-Host "=== Diasam Smart Solutions - Image Download Script ===" -ForegroundColor Cyan
Write-Host ""

# Create the services directory if it doesn't exist
$servicesDir = "agency-hotspot/images/services"
if (-not (Test-Path $servicesDir)) {
    New-Item -ItemType Directory -Path $servicesDir -Force | Out-Null
    Write-Host "Created directory: $servicesDir" -ForegroundColor Green
}

# Define image URLs from Unsplash (using specific, curated images)
$imageDownloads = @(
    # Smart Home Images
    @{
        Url = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85"
        FileName = "smart-home-1.jpg"
        Description = "Smart home control tablet"
    },
    @{
        Url = "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=85"
        FileName = "smart-home-2.jpg"
        Description = "Smart lighting system"
    },
    @{
        Url = "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=800&q=85"
        FileName = "smart-home-3.jpg"
        Description = "Smart thermostat"
    },
    @{
        Url = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=85"
        FileName = "smart-home-4.jpg"
        Description = "Voice assistant device"
    },
    
    # Home Security Images
    @{
        Url = "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=85"
        FileName = "home-security-1.jpg"
        Description = "Home security keypad"
    },
    @{
        Url = "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=85"
        FileName = "home-security-2.jpg"
        Description = "Smart door lock"
    },
    @{
        Url = "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=85"
        FileName = "home-security-3.jpg"
        Description = "Security alarm panel"
    },
    @{
        Url = "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=800&q=85"
        FileName = "home-security-4.jpg"
        Description = "Home automation security"
    },
    
    # Surveillance Images
    @{
        Url = "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800&q=85"
        FileName = "surveillance-1.jpg"
        Description = "4K security camera outdoor"
    },
    @{
        Url = "https://images.unsplash.com/photo-1543525238-54e3d131f7ca?w=800&q=85"
        FileName = "surveillance-2.jpg"
        Description = "Surveillance camera system"
    },
    @{
        Url = "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&q=85"
        FileName = "surveillance-3.jpg"
        Description = "Outdoor security camera"
    },
    @{
        Url = "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=85"
        FileName = "surveillance-4.jpg"
        Description = "Dome security camera"
    },
    
    # 24/7 Protection Images
    @{
        Url = "https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&q=85"
        FileName = "protection-1.jpg"
        Description = "24 hour security monitoring"
    },
    @{
        Url = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=85"
        FileName = "protection-2.jpg"
        Description = "Security shield protection"
    },
    @{
        Url = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=85"
        FileName = "protection-3.jpg"
        Description = "Smart home protection system"
    },
    @{
        Url = "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=85"
        FileName = "protection-4.jpg"
        Description = "Home security monitoring"
    }
)

# Download each image
$successCount = 0
$failCount = 0
$totalImages = $imageDownloads.Count

Write-Host "Starting download of $totalImages images..." -ForegroundColor Yellow
Write-Host ""

foreach ($image in $imageDownloads) {
    $filePath = Join-Path $servicesDir $image.FileName
    
    try {
        Write-Host "[Downloading] $($image.Description)..." -NoNewline
        
        # Download the image
        Invoke-WebRequest -Uri $image.Url -OutFile $filePath -ErrorAction Stop
        
        # Verify the file was created and has content
        if ((Test-Path $filePath) -and ((Get-Item $filePath).Length -gt 0)) {
            $fileSize = [math]::Round((Get-Item $filePath).Length / 1KB, 2)
            Write-Host " [OK] Success ($fileSize KB)" -ForegroundColor Green
            $successCount++
        } else {
            Write-Host " [FAIL] Failed (Empty file)" -ForegroundColor Red
            $failCount++
        }
    }
    catch {
        Write-Host " [FAIL] Failed: $($_.Exception.Message)" -ForegroundColor Red
        $failCount++
    }
    
    # Small delay to be respectful to Unsplash servers
    Start-Sleep -Milliseconds 500
}

Write-Host ""
Write-Host "=== Download Complete ===" -ForegroundColor Cyan
Write-Host "Successfully downloaded: $successCount images" -ForegroundColor Green
Write-Host "Failed downloads: $failCount images" -ForegroundColor $(if ($failCount -gt 0) { "Red" } else { "Green" })
Write-Host ""

if ($successCount -eq $totalImages) {
    Write-Host "All images downloaded successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Review the images in the '$servicesDir' folder" -ForegroundColor White
    Write-Host "2. The HTML file will be automatically updated with the new image paths" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host "Warning: Some images failed to download. Please check your internet connection and try again." -ForegroundColor Yellow
}

Write-Host "Image locations:" -ForegroundColor Cyan
Write-Host "  Smart Home: smart-home-1.jpg through smart-home-4.jpg" -ForegroundColor White
Write-Host "  Home Security: home-security-1.jpg through home-security-4.jpg" -ForegroundColor White
Write-Host "  Surveillance: surveillance-1.jpg through surveillance-4.jpg" -ForegroundColor White
Write-Host "  24/7 Protection: protection-1.jpg through protection-4.jpg" -ForegroundColor White
