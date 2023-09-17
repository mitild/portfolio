import { FC } from "react"
import styled from "styled-components"
import { FlexBox, colors } from "../../styles"
import { Text } from "./Text"

type TRoundBox = {
  width?: string
  height?: string
  borderRadius?: string
}

const RoundBoxStyled = styled(FlexBox)<TRoundBox>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  background-color: ${colors.primary};
  border-radius: ${({ borderRadius }) => borderRadius || '50%'};
`

type TRoundBoxTitle = TRoundBox & {
  title: string
}

export const RoundBoxTitle: FC<TRoundBoxTitle> = ({ width, height, borderRadius, title }) => 
  <RoundBoxStyled width={ width } height={ height } borderRadius={ borderRadius }>
    <Text fontFamily="Neue Machina" fontSize="1rem" fontWeight="800">
      { title }
    </Text>
  </RoundBoxStyled>