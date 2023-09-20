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
    link: '/#frontend',
    icon: <VscCode />,
    id: 1
  },
  {
    name: 'Designs',
    link: '/#designs',
    icon: <VscSymbolColor />,
    id: 2
  },
  {
    name: 'Software',
    link: '/#software',
    icon: <VscTools/>,
    id: 3
  },
  {
    name: 'Experience',
    link: '/#experience',
    icon: <VscBriefcase />,
    id: 4
  },
  {
    name: 'Education',
    link: '/#education',
    icon: <VscMortarBoard />,
    id: 5
  },
  {
    name: 'About me',
    link: '/#about',
    icon: <VscPerson />,
    id: 6
  },
]