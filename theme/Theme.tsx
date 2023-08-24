import React, { ReactNode } from "react"
import { ThemeProvider } from "styled-components"

type TTheme = {
  colors: {
    dark_bg: string,
    lighter_dark: string,
    lila: string,
    green: string,
  }
}

const theme: TTheme = {
  colors: {
    dark_bg: '#1C2023',
    lighter_dark: '#242B34',
    lila: '#A4A1FE',
    green: '#CFFF93',
  }
}

interface ThemeProps {
  children: ReactNode,
}

export const Theme: React.FC<ThemeProps> = ({ children }) => <ThemeProvider theme={ theme }> { children } </ThemeProvider>