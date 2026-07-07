# Projects Data

This file contains instructions for updating your project information.

## Project Structure

Each project in `projects.js` has the following structure:

```javascript
{
  id: 1,
  title: 'project-name',
  description: 'A brief description of your project...',
  technologies: ['React', 'Node.js', 'MongoDB'],
  github: 'https://github.com/yourusername/project-name',
  demo: 'https://your-project-demo.com',
  image: '/assets/images/project-screenshot.jpg'
}
```

## How to Update

1. **Add your GitHub username** to `.env`:
   ```
   VITE_GITHUB_USERNAME=yourusername
   ```

2. **Fill in each project** in `projects.js`:
   - `description`: Write a brief description of what the project does
   - `technologies`: Add the technologies/libraries used
   - `github`: Add the full GitHub repository URL
   - `demo`: Add the live demo URL (optional, leave empty if none)
   - `image`: Add the path to a project screenshot (optional)

## Example URLs

If your GitHub username is `ketemabogale`:

```javascript
{
  id: 1,
  title: 'hotel-booking',
  description: 'A modern hotel booking system with real-time availability...',
  technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  github: 'https://github.com/ketemabogale/hotel-booking',
  demo: 'https://hotel-booking-demo.vercel.app',
  image: '/assets/images/hotel-booking.jpg'
}
```

## Adding Project Images

Place project screenshots in: `public/assets/images/`

Then reference them in the project object:
```javascript
image: '/assets/images/project-name.jpg'
```

## Tips

- Keep descriptions concise (2-3 sentences)
- List technologies in order of importance
- Use live demo URLs when available
- Add screenshots to make your portfolio more visual
