type TResponsiveSizes = {
    mobile: string;
    mobileXl: string;
    tablet: string;
    laptop: string;
    desktop: string;
    laptopLg: string;
}

const responsiveSizes: TResponsiveSizes = {
    mobile: '390px',
    mobileXl: '480px',
    tablet: '768px',
    laptop: '960px',
    desktop: '1280px',
    laptopLg: '1440px',
  }

type TDevices = {
  Mobile: string;
  MobileXl: string
  Tablet: string;
  Laptop: string;
  Desktop: string;
  LaptopLg: string; 
}
  
  const device: TDevices = {
    Mobile: `screen and (min-width: ${responsiveSizes.mobile})`,
    MobileXl: `screen and (min-width: ${responsiveSizes.mobileXl})`,
    Tablet: `screen and (min-width: ${responsiveSizes.tablet})`,
    Laptop: `screen and (min-width: ${responsiveSizes.laptop})`,
    Desktop: `screen and (min-width: ${responsiveSizes.desktop})`,
    LaptopLg: `screen and (min-width: ${responsiveSizes.laptopLg})`,
  }
  
  export { responsiveSizes, device }