---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Urban Sprawl Metrics"
  text: "Calculator"
  tagline: A proof of concept webapp developed in 2024 and 2025 at Eastern Switzerland University of Applied Sciences (OST)

  image: 
    src: /banner-image.jpg
    alt: © San Francisco Sprawl by Phil Whitehouse under CC BY 2.0 (https://www.flickr.com/photos/philliecasablanca/2595289183)

  actions:
    - theme: brand
      text: Read the bachelor's thesis (~3 MB)
      link: /Bericht_BA_Fehr_Maag-compressed.pdf
    - theme: alt
      text: Read the second thesis (2025) at OST eprints (Bachelorarbeit)
      link: https://eprints.ost.ch/id/eprint/1311/
    - theme: alt
      text: Read the first thesis (2024) at OST eprints (Studienarbeit)
      link: https://eprints.ost.ch/id/eprint/1268/
    - theme: brand
      text: Contact Us
      link: /contact

features:
  - title: Repositories on GitLab (hosted by OST)
    icon: 👩‍💻
    details: The code repository of the USM Calculator can be found on OST's own GitLab repository.
    link: https://gitlab.ost.ch/sa-urban-sprawl-metrics/usm-calculator
    linkText: Find out more

  - title: QGIS Plugin
    icon: 🗺️
    details: With the optimization findings for the webapp we also improved an existing Python plugin for the open source software QGIS.
    link: https://plugins.qgis.org/plugins/usm_calculator_qgis/
    linkText: Install it from here (experimental)

  - title: Documentation
    icon: 📖
    details: This is a short software documentation to understand the calculator, its input parameters and their outcome after calculation.
    link: /documentation
    linkText: See the documentation
---