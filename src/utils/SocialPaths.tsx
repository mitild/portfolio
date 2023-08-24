import { FaLinkedinIn, FaGithub, FaBehance, FaEnvelope } from 'react-icons/fa'

export type TSocials = {
  name: string
  path: string
  icon: React.ReactNode
  id: number
}

export const Socials: TSocials[] = [
  {
    name: 'LinkedIn',
    path: 'https://www.linkedin.com/in/jmldomaica/',
    icon: <FaLinkedinIn />,
    id: 1
  },
  {
    name: 'GitHub',
    path: 'https://github.com/mitild',
    icon: <FaGithub />,
    id: 2
  },
  {
    name: 'Behance',
    path: 'https://www.behance.net/estudiohoyt',
    icon: <FaBehance />,
    id: 3
  },
  {
    name: 'Email',
    path: 'mailto:mitild82@gmail.com?subject=Would%20you%20join%20our%20team?&body=Dear%20Juanma,%0A%0AWe%20love%20your%20work!%0A%0ARegards,%0A%0AName:%0AEmail:%0APhone:%0A',
    icon: <FaEnvelope />,
    id: 4
  }
]
