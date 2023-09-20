import {FC} from 'react'
import { SectionLayout } from '../molecules/SectionLayout'
import { Timeline } from '../molecules/Timeline'
import { EducationInfo } from '../../utils/EducationInfo'
import {BlurryCircle} from '../atoms/BlurryCircle';

export const EducationComponent: FC = () => {
  return (
    <SectionLayout 
      title="Education & Background"
      number="05"
      subtitle="I love knowing things. In the last 15 years, I haven't stopped studying, whether it's through self-learning or academic pursuits, and I ain’t not stopping"
      color="primary"
      hasLink={ false }  
      id="education"
    >
      <Timeline dates={ EducationInfo } color={ "primary" } />
      <BlurryCircle color="primary" XPositionLaptop="100%" YPositionLaptop="40%"/>
    </SectionLayout> 
  )
}