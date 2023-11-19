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
  mobile?: string
  images?: {
    src: string
    desc: string
    title: string
  }[]
}

export const frontendProjects: TProjects[] = [
  {
    title: 'Wottu',
    subtitle: 'What to watch next?',
    src: '/wottu/wottu_full.png',
    alt: 'Wottu landing page',
    description: 'Wottu is a web application that helps you find your next movie or tv show to watch. You can search for movies and tv shows, add them to your watchlist, and rate them.',
    software: ['REACTJS', 'VITEJS', 'AXIOS', 'CONTEXT API', 'ESLINT', 'FIREBASE', 'REACT ROUTER', 'STYLED COMPONENTS'],
    link: '/',
    url: 'https://wottu.estudiohoyt.com/',
    github: 'https://github.com/mitild/wottu',
    mobile: "/wottu/home_mobile.png",
    images: [
      {
        src: "/wottu/cast.png",
        desc: "Crafting the React cast section posed a challenge. I ensured smooth navigation through diverse cast data, optimizing for an enriched user experience.",
        title: "The Cast"
      },
      {
        src: "/wottu/list.png",
        desc: "Explore a captivating array of movies on my React app. Carousels showcase diverse posters, each with a brief description and trailer for an enticing visual journey.",
        title: "Carousel"
      },
      {
        src: "/wottu/login.png",
        desc: "Signing up is a breeze on our React app linked to Firebase. The form is user-friendly and fun, allowing you to pick your avatar for a personal touch to your profile.",
        title: "Sign up"
      },
      {
        src: "/wottu/search.png",
        desc: "Explore joyfully with the dropdown search bar on my React site. It suggests movies as you type, and the genre list adds options for a tailored search. Dive into a world of choices.",
        title: "Browsing"
      },
      {
        src: "/wottu/single.png",
        desc: "Dive deep into your chosen show on my React site's single show page. Show cast, trailers, key info, and similar titles for an immersive viewing experience.",
        title: "The Show"
      },
      {
        src: "/wottu/trailer.png",
        desc: "Experience excitement up close with the trailer modal. Get a sneak peek into the show's essence, effortlessly launched within a sleek modal for an immersive preview.",
        title: "The Trailer"
      },
      {
        src: "/wottu/watchlist.png",
        desc: "Your watchlist on my React site, backed by LocalStorage, securely stores and recalls your favorite titles for quick access.",
        title: "Watchlist"
      },
    ]
  },
  {
    title: 'SShips',
    subtitle: 'Ship, ship, hooray!',
    src: '/starships/starships_full.png',
    alt: 'Star Ships landing page',
    description: 'Find all the Star Wars ships, discover in which movies they appear, and who their pilots are. Psst, Only registered users can access all the content.',
    software: ['REACTJS', 'VITEJS', 'AXIOS', 'CONTEXT API', 'ESLINT', 'LOCAL STORAGE', 'REACT ROUTER', 'STYLED COMPONENTS'],
    link: '/',
    url: 'https://starwars-ships-jmld.netlify.app/',
    github: 'https://github.com/mitild/starwars',
    mobile: "/starships/home_mobile.png",
    images: [
      {
        src: "/starships/login.png",
        desc: "Effortless access: on-demand login/signup modal for Star Wars Ships web. Pops up exploring restricted content or at your request, securely managed with localStorage.",
        title: "The Forms"
      },
      {
        src: "/starships/hero.png",
        desc: "Dive into the Star Wars universe with our captivating Hero Section carousel. Immerse yourself in stunning images, bringing the saga to life through an eye-catching display of the latest updates.",
        title: "The Hero"
      },
      {
        src: "/starships/film.png",
        desc: "Discover your preferred Star Wars ship and unveil its cinematic journey. Easily access information on all movies featuring the vessel, providing a comprehensive view of its on-screen adventures.",
        title: "The Films"
      },
      {
        src: "/starships/list.png",
        desc: "Explore dynamic Star Wars ship list, expanding as you scroll. Each entry provides essential details, ensuring an immersive experience evolving with every swipe, delivering the most relevant information.",
        title: "The Ships"
      },
      {
        src: "/starships/pilot.png",
        desc: "Dive into the Star Wars galaxy, uncovering the skilled pilots behind each ship. Get to know the individuals who add a personal touch to navigating these vessels in your exploration.",
        title: "The Pilots"
      },
      {
        src: "/starships/ship.png",
        desc: "Embark on a detailed journey with each Star Wars ship. Access information, links to pilots, and movies. Immerse yourself in the rich history of these iconic vessels.",
        title: "The Ship"
      },
    ]

  },
  {
    title: 'Folio',
    subtitle: "Juanma's land",
    src: '/folio/portfolio_full.png',
    alt: "Juanma portfolio's landing page",
    description: 'Get to knnow me better, see my projects, my experiences, softwares and technologies and contact me to make big things together. See you there!',
    software: ['REACTJS', 'VITEJS', 'FRAMER MOTION', 'CUSTOM HOOKS', 'ESLINT', 'REACT ROUTER', 'STYLED COMPONENTS', 'FIGMA'],
    link: '/',
    url: '/',
    github: 'https://github.com/mitild/portfolio',
    mobile: "/folio/home_mobile.png",
    images: [
      {
        src: "/folio/branding.png",
        desc: "Explore my crafted branding projects—images, mockups, descriptions, and project links for a comprehensive view.",
        title: "My projects"
      },
      {
        src: "/folio/design.png",
        desc: "Diverse project carousels display my creative portfolio—explore various images for a comprehensive view.",
        title: "Carousels"
      },
      {
        src: "/folio/experience.png",
        desc: "Engage with custom timelines showcasing my professional journey and education—crafted for an appealing exploration.",
        title: "Timelines"
      },
      {
        src: "/folio/frontend.png",
        desc: "Explore my frontend projects through visually appealing cards, offering a captivating journey into the world of coding excellence :)",
        title: "The Cards"
      },
      {
        src: "/folio/about.png",
        desc: "Delve into my story with a bespoke ticker, elegantly presenting text in the About section for a personalized and engaging experience.",
        title: "Ticker"
      },
      {
        src: "/folio/gallery.png",
        desc: "Discover elegance in simplicity with my image gallery—a captivating visual journey designed for effortless enjoyment.",
        title: "Gallery"
      },
      {
        src: "/folio/software.png",
        desc: "Explore my tech expertise with a responsive grid design—showcasing a comprehensive display of technologies I master for a dynamic viewing experience.",
        title: "CSS Grid"
      },
      {
        src: "/folio/single.png",
        desc: "Embark on a visual journey with a captivating transition to full-sized images from the carousel—a seamless and immersive experience awaits you.",
        title: "Full size"
      },
      {
        src: "/folio/singleFe.png",
        desc: "Dive into the intricacies of my frontend projects with a beautifully designed page—crafted for a comprehensive and immersive exploration.",
        title: "The Whole"
      },
    ]

  }
]