// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://us4u.us',
  integrations: [
    sitemap({
      // Customize which pages show up in the sitemap
      filter: (page) => {
        // Exclude any pages with draft: true in the frontmatter
        const isDraft = page.includes('draft');
        return !isDraft;
      },
      // Add any additional sitemap entries
      customPages: [
        'https://us4u.us/tools/tax-calculator',
        'https://us4u.us/tools/claims-tracker',
        'https://us4u.us/tools/appeals-guide'
      ],
      // Customize the sitemap output
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ]
});
