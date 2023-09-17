export type TExperience = {
  place: string;
  year: string;
  icon: string;
  alt?: string;
  current?: boolean;
}

export const ExperienceInfo: TExperience[] = [
  {
    place: "Frontend Developer",
    year: "2023",
    icon: "/experience/itacademy.svg",
    alt: "IT Academy",
    current: true,
  },
  {
    place: "Web Developer & Graphic Designer",
    year: "2020",
    icon: "/experience/hoyt.svg",
    alt: "Estudio Høyt",
    current: true,
  },
  {
    place: "Digital Content Creator",
    year: "2019",
    icon: "/experience/tucco.svg",
    alt: "Tucco Real Food",
    current: false,
  },
  {
    place: "Sales & Marketing",
    year: "2018",
    icon: "/experience/runzebra.svg",
    alt: "Run Zebra Run",
    current: false,
  },
  {
    place: "Logistics Coordinator",
    year: "2016",
    icon: "/experience/h&m.svg",
    alt: "H&M Norway",
    current: false,
  },
  {
    place: "Paralegal & Administrative",
    year: "2008",
    icon: "/experience/estudiob&l.svg",
    alt: "Estudio B&L",
    current: false,
  }
]