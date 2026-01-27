# Images Folder

This folder contains all static images for the website.

## How to Add Images

1. **Add your images to this folder:**
   - Logo: `logo.png` or `logo.svg`
   - Profile photos: `profile-john.jpg`, `profile-jane.jpg`, etc.
   - Client testimonials: `client-1.jpg`, `client-2.jpg`, etc.
   - Any other images

2. **Use them in your components:**
   ```tsx
   <img src="/images/profile-john.jpg" alt="John Doe" />
   ```

3. **For your logo:**
   - If you want to use a custom PNG/JPG logo instead of the SVG:
   - Add your logo file here as `logo.png`
   - The Logo component will automatically use it

## Recommended Image Sizes

- **Logo**: 200x200px (square)
- **Profile photos**: 400x400px (square)
- **Client testimonials**: 100x100px (square, circular display)
- **Hero images**: 1920x1080px (16:9 ratio)
- **Service cards**: 800x600px

## Image Optimization

Before uploading:
1. Compress images using tools like TinyPNG or Squoosh
2. Use WebP format for better performance (with fallback)
3. Use SVG for logos and icons when possible
