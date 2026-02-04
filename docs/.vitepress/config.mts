import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Urban Sprawl Metrics",
  description: "Thesis: Urban Sprawl Metrics Calculator",

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'author', content: 'Nico Fehr, Kyra Maag' }],
    ['meta', { name: 'keywords', content: 'urban, sprawl, metrics, calculator, thesis, ost, gis' }],
    ['meta', { name: 'description', content: 'Thesis: Urban Sprawl Metrics Calculator' }],
    
    ['link', { rel: 'icon', href: '/favicon.ico' }],

    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap', rel: 'stylesheet' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contact', link: '/contact' },
      { text: 'Documentation', link: '/documentation' }
    ],

    sidebar: {
      "/documentation/": [
        {
          text: "Documentation", link: "/documentation/",
          items: [
            { text: 'Metrics Explained', link: "/documentation/metrics-explained",
              items: [
                { text: 'WUP', link: "/documentation/metrics/wup" },
                { text: 'DIS', link: "/documentation/metrics/dis" },
                { text: 'PBA', link: "/documentation/metrics/pba" },
                { text: 'LUP', link: "/documentation/metrics/lup" },
                { text: 'Utilization Density', link: "/documentation/metrics/ud" },
                { text: 'Urban Permeation', link: "/documentation/metrics/up" },
                { text: 'WUP<sub>b</sub>', link: "/documentation/metrics/wupb" },
                { text: 'WSPC', link: "/documentation/metrics/wspc" },
                { text: 'Total Sprawl', link: "/documentation/metrics/ts" }
              ]
            },
            /*
            { text: 'Usage', link: "/documentation/usage",
              items: [
                { text: 'Input Data', link: "/documentation/usage/input-data" },
                { text: 'Running the Calculator', link: "/documentation/usage/running-calculator" },
                { text: 'Output Data', link: "/documentation/usage/output-data" }
              ]
            },
            */
          ]
        },
        { text: 'Acknowledgements', link: "/documentation/acknowledgements" },
        { text: 'Authors', link: "/documentation/authors" }
      ]
    },

    socialLinks: [
      { icon: 'gitlab', link: 'https://gitlab.ost.ch/sa-urban-sprawl-metrics/usm-calculator' },
    ],

    footer: {
      message: 'Made with ❤️ in Switzerland',
      copyright: `Copyright © ${new Date().getFullYear()} Nico Fehr, Kyra Maag <br>Title Image: © San Francisco Sprawl by Phil Whitehouse under CC BY 2.0 (https://www.flickr.com/photos/philliecasablanca/2595289183)`
    }
  }
})
