import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://alianxatravel.org',
  integrations: [tailwind(), sitemap()],
  site: 'https://alianxatravel.com'
})
