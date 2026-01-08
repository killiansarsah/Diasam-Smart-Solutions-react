// Utility to get the correct base URL for assets
// In development: returns '/'
// In production: returns '/Diasam-Smart-Solutions-react/'
export const getAssetUrl = (path) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // When BASE_URL is './', we just prepend it. 
    // This allows the site to work on any subfolder.
    return `${import.meta.env.BASE_URL}${cleanPath}`;
};
