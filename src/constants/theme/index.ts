import { jsRgba } from "./helpers";

const defaultTheme = {
  defaultFont: "IRANSans",
  colors: {
    blue: {
      light: jsRgba(239, 246, 255),
      normal: jsRgba(104, 169, 212),
      dark: jsRgba(0, 135, 224),
      primary: jsRgba(0, 135, 224),
    },
    gray: {
      light: jsRgba(150, 150, 150),
      normal: jsRgba(120, 120, 120),
      dark: "#202020",
    },
    green: {
      light: jsRgba(224, 246, 235),
      normal: jsRgba(33, 213, 176),
      dark: jsRgba(34, 176, 147),
      highlightAndShadow: jsRgba(201, 248, 224),
    },
    red: {
      light: jsRgba(190, 85, 85, 0.1),
      normal: jsRgba(190, 85, 85),
      dark: jsRgba(190, 85, 58),
      highlightAndShadow: jsRgba(253, 231, 231),
    },
    yellow: {
      light: jsRgba(255, 243, 221),
      dark: jsRgba(194, 148, 67),
      normal: jsRgba(194, 148, 67),
    },
    white: "#ffffff",
    black: "#000000",
    transparent: "transparent",
  },
  styles: {
    shadow: `0 2px 4px 0 ${jsRgba(0, 0, 0, 0.05)}`,
    divider: `1px solid ${jsRgba(28, 28, 28, 0.1)}`,
  },
  viewports: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

export default defaultTheme;
