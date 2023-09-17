import {FC} from 'react'
import { SectionLayout } from '../molecules/SectionLayout'
import { Timeline } from '../molecules/Timeline'
import { EducationInfo } from '../../utils/EducationInfo'
import {BlurryCircle} from '../atoms/BlurryCircle';

export const EducationComponent: FC = () => {
  return (
    <SectionLayout 
      title="Education & Background"
      number="06"
      subtitle="I love knowing things. In the last 15 years, I haven't stopped studying, whether it's through self-learning or academic pursuits, and I ain’t not stopping"
      color="secondary"
      hasLink={ false }  
    >
      <Timeline dates={ EducationInfo } color={ "secondary" } />
      <BlurryCircle color="secondary" XPositionLaptop="100%" YPositionLaptop="40%"/>
    </SectionLayout> 
  )
}