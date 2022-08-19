export const Breakpoints = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1024px",
  largeDesktop: "1440px",
};

export const devices = {
  mobile: `(max-width: ${Breakpoints.mobile})`,
  tablet: `(max-width: ${Breakpoints.tablet})`,
  desktop: `(max-width: ${Breakpoints.desktop})`,
  largeDesktop: `(max-width: ${Breakpoints.largeDesktop})`,
};
