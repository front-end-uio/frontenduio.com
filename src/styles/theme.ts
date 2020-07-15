export const sizes = {
  maxContainerWidth: '1170px',
  headerDesktopHeight: '70px',
  borderRadius: '4px',
};

export const colors = {
  surface: '#FFFFFF',
  heroOverlay: 'rgba(1, 22, 56, 0.4)',
  blue: {
    primary: '#011638',
    secondary: '#042A67',
  },
  light: {
    border: 'rgba(162,162,162,0.3)',
  },
  dark: {
    border: 'rgba(162,162,162,0.5)',
  },
};

export const widthBreakPoints = {
  normalMobile: 340,
  tablet: 768,
  desktop: 1024,
  desktopWide: 1440,
};

export const mq = {
  normalMobile: `@media (min-width: ${widthBreakPoints.normalMobile}px)`,
  tablet: `@media (min-width: ${widthBreakPoints.tablet}px)`,
  desktop: `@media (min-width: ${widthBreakPoints.desktop}px)`,
  untilTablet: `@media (max-width: ${widthBreakPoints.tablet}px)`,
};

export const fonts = {
  serif: 'georgia, serif',
  sansSerif:
    'Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  code:
    '"SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono", "Liberation Mono", Menlo, Courier, monospace;',
};
