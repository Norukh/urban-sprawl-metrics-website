---
layout: home

hero:
    name: "Contact Us"
    tagline: Contact the creators
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/kyra.jpg',
    name: 'Kyra Maag',
    title: 'Creator and Author',
    desc: `Kyra completed her Bachelor of Science in 2025 and currently works
        as a system administrator for a municipality in
        Switzerland. She enjoys organizing and managing projects; her
        strength lies in keeping workloads well organized and
        maintaining a clear overview across tasks and contributors.`,
    links: [
      { icon: 'github', link: 'https://github.com/kymaag' },
      { icon: 'gmail', link: 'mailto:kyra@urbansprawl.ch' },
    ]
  },
  {
    avatar: '/nico.jpg',
    name: 'Nico Fehr',
    title: 'Creator and Author',
    desc: `Nico completed his Bachelor of Science in 2025 and has multiple years of experience as a
        software engineer in the banking industry. He is interested in geodata, software
        architecture and distributed systems. He cares deeply about the
        quality and attention to detail of the systems he creates, ensuring
        reliable and maintainable solutions.`,
    links: [
      { icon: 'github', link: 'https://github.com/Norukh' },
      { icon: 'buymeacoffee', link: 'https://buymeacoffee.com/nfehr' },
      { icon: 'gmail', link: 'mailto:nico@urbansprawl.ch' }
    ]
  },
]
</script>
<VPTeamMembers size="small" :members style="marginTop: 0;" />

## Acknowledgements
Many thanks to the advisors **Joël Schwab** and **Prof. Stefan Keller** from the Institute for Software [IFS](https://www.ost.ch/en/research-and-consulting-services/computer-science/ifs-institute-for-software) at [OST](https://ost.ch/en) University for their help and advice on this project.

Special thanks to **Yves Maurer Weisbrod** from the Federal Office of Spatial Development ([ARE](https://www.are.admin.ch/en/)) for providing important resources and current developments on the topic of urban sprawl.