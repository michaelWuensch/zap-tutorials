export const colors = {
  white: "#ffffff",
  black: "#000000",
  lightningOrange: "#fd9800",
  lightningBrown: "#4a2c00",
  deepseaBlue: "#242633",
  seaBlue: "#313340",
  hoverSeaBlue: "#353745",
  underwaterBlue: "#373947",
  seaGray: "#f3f3f3",
  hoverSeaGray: "#f2f2f2",
  underwaterGray: "#ebebeb",
  superGreen: "#39e673",
  pineGreen: "#0d331a",
  superRed: "#e63939",
  superBlue: "#005dfc",
  superOrange: "#fd9800",
  mudBrown: "#330d0d",
  gray: "#959595",
  darkGray: "#050f19",
  lightGray: "#e7e7e7",
  lightGreen: "#eefff4",
  lightOrange: "#fff3e1",
  lightRed: "#ffeded"
};

export default {
  public: "./public",
  htmlContext: {
    favicon: "public/images/favicon/favicon.ico"
  },
  repository: "https://github.com/LN-Zap",
  website: "https://zaphq.io",
  ignore: ["README.md"],
  themeConfig: {
    fonts: {
      sans: "Roboto, system-ui, sans-serif",
      heading: "Roboto, system-ui, sans-serif",
      monospace: "'Lucida Console', Monaco, monospace"
    },
    letterSpacings: {
      normal: "normal",
      caps: "0.025em"
    },
    shadows: {
      xs: "0 2px 3px 0 rgba(0, 0, 0, 0.3)",
      s: "0 2px 4px 0 rgba(0, 0, 0, 0.4)",
      m: "0 2px 24px 0 rgba(0, 0, 0, 0.5)",
      l: "0 20px 70px 0 rgba(0, 0, 0, 0.6)"
    },
    fontSizes: {
      xxs: "8px",
      xs: "10px",
      s: "13px",
      m: "14px",
      l: "16px",
      xl: "40px",
      xxl: "56px",
      xxxl: "60px"
    },
    lineHeights: {
      small: 1,
      normal: 1.4,
      heading: 1.2
    },
    radii: {
      s: "5px",
      m: "8px",
      l: "14px",
      xl: "24px",
      xxl: "40px"
    },
    space: [0, 4, 8, 16, 32, 45, 72, 108],
    fontWeights: {
      heading: 700,
      light: 300,
      normal: 400,
      bold: 700
    },
    styles: {
      h1: {
        fontWeight: 400
      },
      h2: {
        fontWeight: 400
      },
      h3: {
        fontWeight: 400
      }
    },

    // NOTE: Since the basetheme defines the initial colour mode as `light` we can not cxhange it here.
    // So in our theme, darks is actually light, and light is actually dark!
    initialColorMode: "light",
    colors: {
      primary: colors.lightningOrange,
      accent: colors.lightningOrange,
      text: colors.white,
      muted: colors.gray,
      link: colors.lightningOrange,
      background: colors.deepseaBlue,
      border: null,
      sidebar: {
        bg: "transparent",
        navGroup: colors.gray,
        navLink: colors.lightGray,
        navLinkActive: colors.lightningOrange,
        tocLink: colors.gray,
        tocLinkActive: colors.lightningOrange
      },
      header: {
        bg: colors.deepseaBlue,
        text: colors.white,
        border: colors.darkGray,
        button: {
          bg: colors.seaBlue,
          color: colors.white,
          hover: colors.lightningOrange
        }
      },
      props: {
        bg: colors.deepseaBlue,
        text: colors.white,
        highlight: colors.hoverSeaBlue,
        defaultValue: colors.darkGray,
        descriptionText: colors.gray,
        descriptionBg: colors.seaBlue
      },
      playground: {
        bg: colors.darkGray,
        border: colors.darkGray
      },
      blockquote: {
        bg: colors.underwaterBlue,
        border: colors.seaBlue,
        color: colors.gray
      },

      modes: {
        dark: {
          primary: colors.lightningOrange,
          accent: colors.lightningOrange,
          text: colors.darkGray,
          muted: colors.gray,
          link: colors.lightningOrange,
          background: colors.white,
          border: null,
          sidebar: {
            bg: "transparent",
            navGroup: colors.gray,
            navLink: colors.darkGray,
            navLinkActive: colors.lightningOrange,
            tocLink: colors.gray,
            tocLinkActive: colors.lightningOrange
          },
          header: {
            bg: colors.seaGray,
            text: colors.darkGray,
            border: colors.lightGray,
            button: {
              bg: colors.underwaterGray,
              color: colors.white,
              hover: colors.lightningOrange
            }
          },
          props: {
            bg: colors.white,
            text: colors.darkGray,
            highlight: colors.hoverSeaGray,
            defaultValue: colors.gray,
            descriptionText: colors.darkGray,
            descriptionBg: colors.white
          },
          playground: {
            bg: colors.darkGray,
            border: colors.darkGray
          },
          blockquote: {
            bg: colors.lightGray,
            border: colors.gray,
            color: colors.gray
          }
        }
      }
    },
    styles: {
      root: {
        fontSize: "m",
        fontFamily: "sans",
        fontWeight: "light",
        lineHeight: "normal"
      }
    }
  },
  title: "Zap Documentation",
  menu: [
    "General",
    "Community",
    {
      name: "Desktop",
      menu: [
        "Getting Started",
        "BTCPay Server",
        "LND Remote Control",
        "LND Configuration",
        "Neutrino Remote Control"
      ]
    },
    "iOS",
    "Android"
  ]
};
