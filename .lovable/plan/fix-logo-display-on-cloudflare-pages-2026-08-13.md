---
name: Fix logo display on Cloudflare Pages
description: Ensure the logo image appears correctly on Cloudflare Pages by using a relative path that works across deployments.
type: feature
---

# Fix logo display on Cloudflare Pages

The user reported that the logo is not appearing on the Cloudflare Pages deployment. This is likely due to how assets are referenced or bundled in the production build for that platform.

## Proposed Changes

### Configuration
- Ensure the logo asset is correctly referenced in the project.

### Component Updates
#### `src/components/site-layout.tsx`
- Verify the `logoAsset.url` is resolving to a valid path.
- If the `/l5e/assets-v1/...` URL is problematic for external deployments, I will move the logo to the `public/` directory and reference it directly.

## Technical Details
- Currently, the logo is using a managed asset URL: `/__l5e/assets-v1/...`
- For deployments outside of Lovable (like Cloudflare Pages), these internal proxy URLs may not resolve.
- **Solution**: Move the logo file to `public/logo.jpg` and update the code to use `/logo.jpg`.

## Steps
1. Download/Copy the logo asset to the `public` folder.
2. Update `src/components/site-layout.tsx` to use the static path.
3. Update `src/routes/__root.tsx` if it references the favicon using a similar pattern.
