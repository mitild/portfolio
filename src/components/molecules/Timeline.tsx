import { FC, Fragment, HTMLAttributes } from "react"
import styled from "styled-components"
import { FlexBox, dimensions, device, colors } from '../../styles'
import { TExperience } from "../../utils/ExperienceInfo"
import { Text } from "../atoms/Text"

const Container = styled(FlexBox)`
  width: 100vw;
  max-width: 1300px;
  margin-left: 15%;

  @media only ${ device.Laptop} {
    margin-left: 0;
  }
  /* min-height: 100vh; */
  /* margin: 0 auto 5rem; */
`

type TUlStyled = HTMLAttributes<HTMLUListElement> & {
  border: "primary" | "secondary"
}

const UlStyled = styled.ul<TUlStyled>`
  font-family: inherit;  
  margin: 0 auto;  
  position: relative;
  padding: 0 55px;   
  list-style: none;
  text-align: left;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  &:before {
    position: absolute;
    top: 50%;
    bottom: 50%;
    transform: translateY(-50%);
    left: -1px;
    content: "";
    width: 1px;
    height: 90%;
    background-color: ${({ border }) => border === 'primary' ? colors.primary : colors.secondary };
  }
`

type TLiWrapper = HTMLAttributes<HTMLDivElement> & {
  bgColor: string
}

const LiWrapper = styled.div<TLiWrapper>`
  position: relative;
  width: 250px;
  height: 45px;
  color: ${ colors.grey.grey5 };
  background-color: ${({ bgColor }) => bgColor === "dark" ? colors.black.black1 : colors.black.black3 };
  border-radius: ${ dimensions.borderRadius.round };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  @media only ${ device.Laptop} {
    width: 350px;
    height: 55px;
  }
`

type TLiStyled = HTMLAttributes<HTMLLIElement> & {
  dot_color: 'primary' | 'secondary'
}

const LiStyled = styled.li<TLiStyled>`
  /* border-bottom: 1px dashed fade(white, 10%); */
  /* padding-bottom: (50px * 0.5); */
  /* margin-bottom: 50px;   */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.1;
  /* position: relative; */
  

  &:before {
    position: absolute;
    top: 38%;
    /* bottom: 50%; */
    /* transform: translateY(-50%); */
    left: -130px;
    /* left: (((120px * 0.6) + 50px + 4px + 11px + (4px * 2)) * 1.5) * -1;     */ 
    content: attr(data-date);
    color: ${({ dot_color }) => dot_color === "primary" ? colors.primary : colors.secondary };
    text-align: right;
    font-weight: 700;    
    font-size: 0.8em;
    min-width: 120px;
    font-family: inherit;
  }

  &:after {
    position: absolute;
    /* display: block; */
    top: 50%;
    bottom: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 0 4px fade(white, 100%);    
    left: -61px;
    /* left: (50px + 4px + (11px * 0.35)) * -1;         */
    background: ${({ dot_color }) => dot_color === "primary" ? colors.primary : colors.secondary };    
    border-radius: 50%;  
    height: 11px;
    width: 11px;
    content: "";
  }
`

const primaryColor: string =  "brightness(0) saturate(100%) invert(92%) sepia(15%) saturate(1060%) hue-rotate(34deg) brightness(104%) contrast(102%)"
const secondaryColor: string = "brightness(0) saturate(100%) invert(56%) sepia(98%) saturate(883%) hue-rotate(204deg) brightness(106%) contrast(99%);"

type TImgStyled = HTMLAttributes<HTMLImageElement> & {
  svg_color: "primary" | "secondary"
}

const ImgStyled = styled.img<TImgStyled>`
  width: 60px;
  position: absolute;
  top: -40px;
  right: -15px;
  filter: ${({ svg_color }) => svg_color === "primary" ? primaryColor : secondaryColor };
`

type TTimeline = {
  dates: TExperience[]
  color?: "primary" | "secondary"
}

export const Timeline: FC<TTimeline> = ({ dates, color }) => {
  const items: React.ReactNode[] = dates.map(({ place, year, icon, alt, current }, index) => {
    const bgColor: string = index % 2 === 0 ? "dark" : "light"
    const fontSize: number = place.length < 27 ? 1 : .8
    return (
      <Fragment key={ index } >
        <LiWrapper bgColor={ bgColor } >
          <LiStyled data-date={ year } dot_color={ color! }>
            <Text color="white" fontSize= { `${ fontSize }rem` }>{ place }</Text>
            {
              current &&
              <Text color={ color === 'primary' ? colors.primary : colors.secondary } fontSize=".8rem" >CURRENT</Text>
            }
          </LiStyled>
          <ImgStyled src={ icon } alt={ alt } width="50px" svg_color={ color! } />
        </LiWrapper>
      </Fragment>
    )
  })
  return (
    <Container direction="column" gap="5rem" align="center" justify="center">
      <UlStyled border={ color! }>
        { items }
      </UlStyled>
    </Container>
  )
}








{/* <div id="timeline-content">
  <h1>Timeline</h1>

  <ul class="timeline">
    <li class="event" data-date="65Million B.C.">
      <h3>Dinosaurs Roamed the Earth</h3>
      <p>RAWWWWWWRRR 🐢🦂</p>
    </li>
    <li class="event" data-date="2005">
      <h3>Creative Component Launched</h3>
      <p>"We can be all things to all people!" 📣</p>    
    </li>
    <li class="event" id="date" data-date="2009">
      <h3>Squareflair was Born</h3>
      <p></p> <p>"We can be all things to Squarespace users!" 📣</p>    
    </li>
    
    <li class="event" data-date="2021">
      
      <h3>Squareflair Today</h3>
      
      <p>"We design and build from scratch!" 📣<p/> <p>When we say <em><strong>100% custom</strong></em> we mean it— and we build all sites on the Squarespace Developer platform.<p/>
<p>Did you know that all of our pixels are hand-forged from the rarest of subpixels grown and harvested in the <em>Nerd Forest</em>? <br>🤜💥🤛</p>
      
      <p><strong>Our success can be measured by lives and brands enhanced by 9+ years of 100% Squarespace-focused service!</strong></p>
      
<p><a href="https://www.squareflair.com">squareflair.com</a></p>
    </li>
  </ul>
</div> */}

/* Import */

// @import url('https://fonts.googleapis.com/css?family=Chivo:300,300i,400,400i,700,700i,900,900i|Saira+Extra+Condensed:100,200,300,400,500,600,700,800|Saira:100,200,300,400,500,600,700,800');

// /* Variables */

// @background: #252827;

// @color-primary: #004ffc;
// @color-light: white;
// @color-dim: #6c6d6d;
// @spacing: 50px;
// @radius: 4px;

// @date: 120px;
// @dotborder: 4px;
// @dot: 11px;
// @line: 4px;

// @font-title: 'Saira', sans-serif;
// @font-text: 'Chivo', sans-serif;

// /* Base */

// body {
//   background: @background;
//   font-size: 16px;
// }

// p {
//   font-weight: 300;
// }

// a { 
//   color: @color-dim;
//   text-decoration: none;
//   text-transform: uppercase;
//   display: block;
//   letter-spacing: .3em;
//   font-size: .6em;
//   font-weight: 400;
//   background: #252727;
//   padding: .3rem 1rem;
//   margin: 1.9rem 0 0 0;
//   float: right;
// }

// a:hover { 
//   color: @color-light;
//   background: @color-primary;
//   border-bottom: .35em solid black;
// }

// strong {
//   font-weight: 600;
// }

// h1 {
//  font-family: @font-title;
//  letter-spacing: 1.5px;
//  color: @color-light;  
//  font-weight: 400;
//  font-size: 2.4em;
// }

// #timeline-content {
//   margin-top: @spacing;
//   text-align: center;  
// }

// /* Timeline */

// .timeline {
//   border-left: @line solid @color-primary;
//   border-bottom-right-radius: @radius;
//   border-top-right-radius: @radius;    
//   background: fade(@color-light, 3%);
//   color: fade(white, 80%);
//   font-family: @font-text;  
//   margin: @spacing auto;  
//   letter-spacing: 0.5px;   
//   position: relative;
//   line-height: 1.4em;
//   font-size: 1.03em;   
//   padding: @spacing;   
//   list-style: none;
//   text-align: left;  
//   font-weight: 100;  
//   max-width: 30%; 
  
//   h1 {
//    font-family: @font-title;
//    letter-spacing: 1.5px;
//    font-weight: 100;
//    font-size: 1.4em;    
//   }
  
//   h2, h3 {
//    font-family: @font-title;
//    letter-spacing: 1.5px;
//    font-weight: 400;
//    font-size: 1.4em;
//   }
  
//   .event {
//     border-bottom: 1px dashed fade(@color-light, 10%);
//     padding-bottom: (@spacing * 0.5);
//     margin-bottom: @spacing;  
//     position: relative;

//     &:last-of-type { 
//       padding-bottom: 0;
//       margin-bottom: 0; 
//       border: none;      
//     }

//     &:before, &:after {
//       position: absolute;
//       display: block;
//       top: 0;
//     }

//     &:before {
//       left: (((@date * 0.6) + @spacing + @line + @dot + (@dotborder * 2)) * 1.5) * -1;    
//       color: fade(@color-light, 40%);    
//       content: attr(data-date);
//       text-align: right;
//       font-weight: 100;    
//       font-size: 0.9em;
//       min-width: @date;
//       font-family: @font-title;
//     }

//     &:after {
//       box-shadow: 0 0 0 @dotborder fade(@color-primary,100%);    
//       left: (@spacing + @line + (@dot * 0.35)) * -1;        
//       background: lighten(@background,5%);    
//       border-radius: 50%;  
//       height: @dot;
//       width: @dot;
//       content: "";
//       top: 5px;
//     }
//   }
// }
