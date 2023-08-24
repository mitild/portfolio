import { VscCode, VscSymbolColor, VscTools, VscBriefcase, VscMortarBoard, VscPerson } from 'react-icons/vsc';

export type TNavigationItems = {
  name: string
  link: string
  icon: React.ReactNode
  id: number
}

export const NavigationItems: TNavigationItems[] = [
  {
    name: 'Frontend',
    link: '/',
    icon: <VscCode />,
    id: 1
  },
  {
    name: 'Designs',
    link: '/',
    icon: <VscSymbolColor />,
    id: 2
  },
  {
    name: 'Software',
    link: '/',
    icon: <VscTools/>,
    id: 3
  },
  {
    name: 'Experience',
    link: '/',
    icon: <VscBriefcase />,
    id: 4
  },
  {
    name: 'Education',
    link: '/',
    icon: <VscMortarBoard />,
    id: 5
  },
  {
    name: 'About me',
    link: '/',
    icon: <VscPerson />,
    id: 6
  },
]