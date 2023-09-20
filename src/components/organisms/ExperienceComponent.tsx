import {FC} from 'react'
import { SectionLayout } from '../molecules/SectionLayout'
import { Timeline } from '../molecules/Timeline'
import { ExperienceInfo } from '../../utils/ExperienceInfo'
import {BlurryCircle} from '../atoms/BlurryCircle';

export const ExperienceComponent: FC = () => {
  return (
    <SectionLayout 
      title="Profesional Experience"
      number="04"
      subtitle="Choose a job you love, and you'll never have to work a day in your life — unless it's Monday morning!"
      color="secondary"
      hasLink={ false }  
      id="experience"
    >
      <Timeline dates={ ExperienceInfo } color={ "secondary" } />
      <BlurryCircle color="secondary" XPositionLaptop="-15%" YPositionLaptop="50%"/>
    </SectionLayout> 
  )
}