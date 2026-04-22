# Glenn Hudson - Portfolio Website

A premium, modern, and conversion-focused portfolio website for Glenn Hudson, a London-based choreographer and artistic director. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Overview

This website serves as both a professional portfolio showcasing Glenn's work and a lead-generation platform for bookings, collaborations, workshops, and creative inquiries.

### Key Features

- **Premium Design System**: Elegant, editorial layout with careful typography and spacing
- **Smooth Animations**: Subtle Framer Motion transitions that respect user motion preferences
- **Fully Responsive**: Beautiful on mobile (375px+), tablet, and desktop
- **YouTube Integration**: Video section ready to pull from YouTube playlist/channel
- **Contact Form**: Lead capture with architecture ready for Supabase
- **SEO Optimized**: Full metadata, Open Graph, Twitter cards, and schema markup
- **Accessibility**: Semantic HTML, keyboard navigation, proper contrast, ARIA labels
- **Performance**: Optimized images, lazy loading, minimal heavy effects

### Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Crimson Text (display) + Sohne (body)
- **Deployment**: Vercel-ready
- **Backend**: Supabase (prepared, not yet required)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. Clone or navigate to the project directory:

```bash
cd glenn-hudson-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The site will automatically reload when you make changes.

## Project Structure

```
app/
  ├── api/
  │   └── contact/
  │       └── route.ts          # Contact form endpoint
  ├── layout.tsx                # Root layout with SEO metadata
  ├── page.tsx                  # Homepage
  └── globals.css               # Global styles & design tokens

components/
  ├── ui/
  │   ├── button.tsx            # Reusable button component
  │   ├── container.tsx         # Layout container
  │   └── motion.tsx            # Animation wrappers
  ├── navbar.tsx                # Sticky navigation
  ├── footer.tsx                # Footer with links
  └── sections/
      ├── hero.tsx              # Hero section
      ├── about.tsx             # About section
      ├── portfolio.tsx         # Work/portfolio showcase
      ├── videos.tsx            # YouTube video library
      ├── services.tsx          # Services overview
      └── contact.tsx           # Contact form

data/
  ├── site-content.ts           # Site configuration
  ├── portfolio.ts              # Portfolio items data
  ├── services.ts               # Services data
  └── mock-videos.ts            # Mock video data (fallback)

lib/
  ├── youtube.ts                # YouTube API integration
  ├── utils.ts                  # Utility functions
  └── supabase.ts               # Supabase setup (placeholder)

public/
  └── og-image.jpg              # Open Graph image (placeholder)

tailwind.config.ts              # Tailwind configuration
tsconfig.json                   # TypeScript configuration
next.config.ts                  # Next.js configuration
```

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory. Currently, these variables are optional (the site works with defaults):

```env
# TODO: YouTube Integration
YOUTUBE_API_KEY=your_youtube_api_key
YOUTUBE_PLAYLIST_ID=your_youtube_playlist_id

# TODO: Supabase Integration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# TODO: Update domain
NEXT_PUBLIC_SITE_URL=https://glennhudson.com
```

### Content Configuration

All site content is managed through data files. Edit these files to customize the website:

- **Site config**: `data/site-content.ts` - Main site settings, navigation, SEO
- **Portfolio items**: `data/portfolio.ts` - Work/project showcase
- **Services**: `data/services.ts` - Offered services with descriptions
- **Mock videos**: `data/mock-videos.ts` - Fallback video data

## YouTube Integration

### Setup Instructions

The video section is pre-built and ready to display real YouTube content. To enable:

1. **Get a YouTube Data API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable the "YouTube Data API v3"
   - Create an API key under "Credentials"

2. **Create or identify a YouTube Playlist**:
   - Go to your YouTube channel
   - Create a playlist or note the ID of an existing one
   - Playlist ID is the `list=` parameter in the URL

3. **Add to `.env.local`**:

```env
YOUTUBE_API_KEY=your_api_key_here
YOUTUBE_PLAYLIST_ID=your_playlist_id_here
```

4. **Restart the dev server** - The video section will now fetch real videos

If these variables are not set, the video section displays mock data as fallback.

## Supabase Integration

The contact form and potential CMS features are architected to use Supabase. To set up:

### Setup Instructions

1. **Create Supabase Project**:
   - Sign up at [supabase.com](https://supabase.com/)
   - Create a new project
   - Get your project URL and anonymous key

2. **Create Database Tables**:

```sql
-- Contact submissions table
CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  project_type VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Portfolio items table (optional, for future CMS)
CREATE TABLE portfolio_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description TEXT,
  image_url VARCHAR(255),
  year INTEGER,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

3. **Add to `.env.local`**:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

4. **Update form submission** in `components/sections/contact.tsx`:
   - Uncomment Supabase client import in `lib/supabase.ts`
   - Replace the `/api/contact` endpoint with Supabase insert

## Content Customization

### Update Bio

Edit `data/site-content.ts`:

```typescript
export const siteConfig = {
  name: "Glenn Hudson",
  tagline: "London-based choreographer, artistic director",
  // ... other config
  about: {
    intro: "Your professional intro",
    bio: "Your detailed biography",
    expertise: ["Skill 1", "Skill 2", ...],
  },
};
```

### Add Portfolio Items

Edit `data/portfolio.ts`:

```typescript
{
  id: "7",
  title: "Project Title",
  category: "choreography",
  description: "Project description",
  tags: ["Tag1", "Tag2"],
  year: 2024,
  featured: true,
},
```

### Update Services

Edit `data/services.ts` to add or modify offered services.

### Update Contact Email

Edit `data/site-content.ts` and update:

```typescript
social: {
  email: "your.email@example.com",
  // ...
},
```

## TODO Items

Throughout the codebase, look for `// TODO:` comments marking where customization or integration is needed:

- `data/site-content.ts`: Update actual email, domain, Twitter handle
- `lib/youtube.ts`: YouTube API setup instructions
- `lib/supabase.ts`: Supabase integration instructions
- `components/sections/contact.tsx`: Wire up email notifications
- `app/api/contact/route.ts`: Add email sending service
- Various components: Update placeholder images and content

## Deployment

### Deploy to Vercel

The site is optimized for deployment to Vercel:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Import the repository
4. Add environment variables in Vercel project settings
5. Deploy

```bash
# Or deploy using Vercel CLI
npm install -g vercel
vercel
```

### Other Hosting

The site can be deployed to any platform that supports Node.js and Next.js:

```bash
npm run build
npm start
```

## Performance

The site is optimized for performance:

- ✅ Optimized images with Next.js Image component
- ✅ Lazy loading for sections and videos
- ✅ Minimal animation on lower-spec devices (respects `prefers-reduced-motion`)
- ✅ Code splitting and server components
- ✅ Tailwind CSS purging removes unused styles

Run Lighthouse audit in Chrome DevTools to verify performance metrics.

## Accessibility

The site meets modern accessibility standards:

- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ ARIA labels where needed
- ✅ Sufficient color contrast
- ✅ Visible focus states
- ✅ Respects `prefers-reduced-motion`
- ✅ Alt text strategy for images
- ✅ Accessible form controls and validation

## SEO

The site includes comprehensive SEO setup:

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter card tags
- ✅ JSON-LD schema markup (Person/CreativeProfessional)
- ✅ Canonical URLs
- ✅ Proper heading hierarchy
- ✅ XML sitemap (generated by Next.js)
- ✅ Robots.txt support

### Update SEO Fields

Edit `app/layout.tsx` to update domain and social handles:

```typescript
metadataBase: new URL("https://glennhudson.com"),
// ... update Open Graph and Twitter URLs
```

## Development

### Code Style

The project uses ESLint for code quality. Run checks with:

```bash
npm run lint
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Design System

### Color Palette

- **Background**: `#faf9f7` (cream)
- **Dark**: `#0f0e0c`
- **Text**: `#0f0e0c`
- **Muted**: `#6b6460`
- **Accent Warm**: `#d4a574`

### Typography

- **Display Font**: Crimson Text (serif)
- **Body Font**: Sohne (sans-serif)

### Spacing

Consistent spacing scale for visual rhythm:

- Small: 2rem
- Medium: 4rem
- Large: 6rem
- XL: 8rem

## Support & Troubleshooting

### Common Issues

**Videos not loading:**

- Check YouTube API key and playlist ID are correct
- Verify API quota hasn't been exceeded
- Check browser console for errors

**Contact form not working:**

- Verify `.env.local` is set up correctly
- Check browser console for errors
- Review `app/api/contact/route.ts` logs

**Styling issues:**

- Clear `.next` build cache: `rm -rf .next`
- Rebuild: `npm run build`

## License

© 2024 Glenn Hudson. All rights reserved.

---

**Last Updated**: April 2024
**Status**: Production Ready with Integration Points

# or

pnpm dev

# or

bun dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```
