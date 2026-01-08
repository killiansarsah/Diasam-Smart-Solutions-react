// Utility to get the correct base URL for assets
// In development: returns '/'
// In production: returns '/Diasam-Smart-Solutions-react/'
export const getAssetUrl = (path) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
};
