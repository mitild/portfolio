import {FC} from 'react'
import { SectionLayout } from '../molecules/SectionLayout'
import { Timeline } from '../molecules/Timeline'
import { ExperienceInfo } from '../../utils/ExperienceInfo'
import { EducationInfo } from '../../utils/EducationInfo'
import {BlurryCircle} from '../atoms/BlurryCircle';

export const ExperienceComponent: FC = () => {
  return (
    <SectionLayout 
      title="Profesional Experience"
      number="05"
      subtitle="Choose a job you love, and you'll never have to work a day in your life — unless it's Monday morning!"
      color="primary"
      hasLink={ false }  
    >
      <Timeline dates={ ExperienceInfo } color={ "primary" } />
      <BlurryCircle color="primary" XPositionLaptop="-15%" YPositionLaptop="50%"/>
    </SectionLayout> 
  )
}