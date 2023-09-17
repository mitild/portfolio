export type TProjects = {
  title: string
  subtitle: string
  src: string
  alt: string
  description: string
  software: string[]
  link: string
  url: string
  github: string
}

export const frontendProjects: TProjects[] = [
  {
    title: 'Wottu',
    subtitle: 'What to watch next?',
    src: '/wottu_full.png',
    alt: 'Wottu landing page',
    description: 'Wottu is a web application that helps you find your next movie or tv show to watch. You can search for movies and tv shows, add them to your watchlist, and rate them.',
    software: ['REACTJS', 'VITEJS', 'AXIOS', 'CONTEXT API', 'ESLINT', 'FIREBASE', 'REACT ROUTER', 'STYLED COMPONENTS'],
    link: '/',
    url: 'https://wottu.estudiohoyt.com/',
    github: 'https://github.com/mitild/wottu'
  },
  {
    title: 'SShips',
    subtitle: 'Ship, ship, hooray!',
    src: '/starships_full.png',
    alt: 'Star Ships landing page',
    description: 'Find all the Star Wars ships, discover in which movies they appear, and who their pilots are. Psst, Only registered users can access all the content.',
    software: ['REACTJS', 'VITEJS', 'AXIOS', 'CONTEXT API', 'ESLINT', 'LOCAL STORAGE', 'REACT ROUTER', 'STYLED COMPONENTS'],
    link: '/',
    url: 'https://starwars-ships-jmld.netlify.app/',
    github: 'https://github.com/mitild/starwars'
  },
  {
    title: 'Folio',
    subtitle: "Juanma's land",
    src: '/portfolio_full.png',
    alt: "Juanma portfolio's landing page",
    description: 'Get to knnow me better, see my projects, my experiences, softwares and technologies and contact me to make big things together. See you there!',
    software: ['REACTJS', 'VITEJS', 'FRAMER MOTION', 'CUSTOM HOOKS', 'ESLINT', 'REACT ROUTER', 'STYLED COMPONENTS', 'FIGMA'],
    link: '/',
    url: '/',
    github: 'https://github.com/mitild/portfolio'
  }
]