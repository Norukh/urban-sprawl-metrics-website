import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Urban Sprawl Metrics",
  description: "Thesis: Urban Sprawl Metrics Calculator",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      { icon: 'gitlab', link: 'https://gitlab.ost.ch/sa-urban-sprawl-metrics/usm-calculator' },
    ],

    footer: {
      message: 'Made with ❤️ in Switerland',
      copyright: `Copyright © ${new Date().getFullYear()} Nico Fehr, Title Image: © San Francisco Sprawl by Phil Whitehouse under CC BY 2.0 (https://www.flickr.com/photos/philliecasablanca/2595289183)`
    }
  }
})
