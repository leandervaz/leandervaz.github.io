const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tabletS: '576px',
    tabletM: '768px',
    tabletL: '992px',
    laptopS: '1024px',
    laptopM: '1440px',
    laptopL: '1920px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptopS: `(max-width: ${size.laptopS})`,
    laptopM: `(max-width: ${size.laptopM})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    // LaptopMMax: `(min-width: ${size.laptopM})`,
    // LaptopLMax: `(min-width: ${size.laptopL})`,
    // desktopMax: `(min-width: ${size.desktop})`,

};