import { alpha, createTheme, darken, lighten } from '@mui/material/styles';

import { backgroundCritical, backgroundLevel2, backgroundLevel3, brandLight, colorInfo60, contentDefault, contentSuccess, textDefault } from './topper-theme';

export const BLACK900 = '#101010';
export const BLACK800 = '#212121';
export const BLACK600 = '#707070';
export const WHITE = '#fff';


const BRAND_NAVY = '#212443';
const BRAND_BLUE = colorInfo60;
const BRAND_GREEN = brandLight;
const ORANGE_CRITICAL = backgroundCritical;
const BRAND_YELLOW = '#F6DC9F';
const BRAND_PURPLE = '#6C0E7C';
const BRAND_BROWN = '#CC996C';
const STANDARD_FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
const MONOSPACE_FONT_FAMILY =
  'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace';

const BASE_THEME = createTheme({
  palette: {
    background: {
      default: BLACK900,
    },
    text: {
      primary: '#fff',
      secondary: backgroundLevel2,
    },
  },
  typography: {
    // fontFamily: STANDARD_FONT_FAMILY,
    fontFamily: '-apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  },
});

const THEME = createTheme(BASE_THEME, {
  palette: {
    brand: {
      navy: BRAND_NAVY,
      blue: BRAND_BLUE, 
      red: ORANGE_CRITICAL,
      green: BRAND_GREEN,
      yellow: BRAND_YELLOW,
      purple: BRAND_PURPLE,
      brown: BRAND_BROWN,
    },
    success: {
      main: BRAND_GREEN,
      light: lighten(BRAND_GREEN, 0.15),
      dark: darken(BRAND_GREEN, 0.15),
    },
    error: {
      main: ORANGE_CRITICAL,
      light: lighten(ORANGE_CRITICAL, 0.15),
      dark: darken(ORANGE_CRITICAL, 0.15),
    },
    cadet: {
      100: '#AFB',
      200: '#F2F5F7',
      300: '#DCE4EA',
      500: '#6A8BA4',
    },
    highlight: {
      100: lighten(BRAND_YELLOW, 0.8),
      200: lighten(BRAND_YELLOW, 0.6),
      300: lighten(BRAND_YELLOW, 0.4),
      400: lighten(BRAND_YELLOW, 0.2),
      500: BRAND_YELLOW,
    },
    info: {
      main: BRAND_BLUE,
    },
    primary: {
      main: BRAND_GREEN,
    },
    secondary:{
      main: '#FFF',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        address {
          font-style: normal;
        }
        fieldset {
          border: none;
          padding: 0;
        }
        pre {
          font-family: ${MONOSPACE_FONT_FAMILY}
          white-space: pre-wrap;
          font-size: 12px;
        }

        .hljs-string {
          color: #d69d85; 
        }

        .hljs-tag, .hljs-name, .hljs-attr, .hljs-number {
          color: #569cd6 !important; 
        }

        .hljs-keyword {
          color: #c586c0;
        }

        .hljs-comment {
          color: #6a9955;
          font-style: italic;
        }
      `,
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontSize: BASE_THEME.typography.pxToRem(14),
        },
        action: {
          paddingTop: 0,
          marginRight: 0,
        },
        filledSuccess: {
          backgroundColor: BRAND_GREEN,
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontWeight: BASE_THEME.typography.fontWeightMedium,
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        paper: {
          background: BLACK800,

        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          paddingTop: BASE_THEME.spacing(1),
          paddingBottom: BASE_THEME.spacing(2),
        },
      },
    },
    MuiDialogTitle: {
      defaultProps: {
        variant: 'h4',
      },
      styleOverrides: {
        root: {
          paddingTop: BASE_THEME.spacing(3),
          paddingBottom: BASE_THEME.spacing(1),
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          borderTop: '1px solid',
          borderTopColor: BASE_THEME.palette.divider,
          marginTop: BASE_THEME.spacing(2.5),
          padding: `${BASE_THEME.spacing(1.5)} ${BASE_THEME.spacing(3)}`,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          ...BASE_THEME.typography.body2,
          borderColor: BASE_THEME.palette.grey[200],
        },
        head: {
          ...BASE_THEME.typography.overline,
          fontWeight: BASE_THEME.typography.fontWeightMedium,
          letterSpacing: '0.075em',
          color: BASE_THEME.palette.text.secondary,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td': {
            borderBottom: 0,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          fontSize: BASE_THEME.typography.pxToRem(14),
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-filledError, &.MuiChip-filledSuccess': {
            fill: BASE_THEME.palette.primary.contrastText,
          },
        },
        sizeSmall: {
          borderRadius: BASE_THEME.spacing(0.5),
          fontSize: 12,
        },
        iconSmall: {
          fontSize: 14,
          marginLeft: BASE_THEME.spacing(1),
        },
        colorSecondary: {
          borderColor: BASE_THEME.palette.grey[400],
          color: BASE_THEME.palette.text.secondary,
        },
        label: {
          fontWeight: BASE_THEME.typography.fontWeightMedium,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: 'none'
        }
      },
      defaultProps: {
        PaperProps: {
          elevation: 2,
        },
      },
    },
    // Inspector Tooltips
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: BASE_THEME.typography.pxToRem(14),
          padding: '4px 10px',
          border: `1px solid ${BLACK600}`,
          backgroundColor: BLACK800,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          height: 1,
        },
        track: {
          height: 1,
          border: 'none',
        },
        rail: {
          height: 1,
          backgroundColor: BASE_THEME.palette.grey[500],
        },
        mark: {
          backgroundColor: BASE_THEME.palette.grey[500],
        },
        markActive: {
          height: 0,
        },
        thumb: {
          height: 16,
          width: 16,
          cursor: 'col-resize',
          '&:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: `0 0 0 4px ${alpha(BRAND_BLUE, 0.2)}`,
          },
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          background: BLACK800
        }
      }
    },
    MuiPaper: {
      stylesOverrides: {
        root: {
          border: '10px solid red',
          background: '#ff00ff',
        }
      },
      defaultProps: {
        elevation: 2,
        square: true,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        focusRipple: true,
      },
      styleOverrides: {
        root: {
          '&.MuiButton-containedSecondary.Mui-disabled': {
            backgroundColor: '#ff0000'
          },
        },
      },
    },
    MuiButtonGroup: {
        backgroundColor: '#ff0000',
        defaultProps: {
        disableElevation: true,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        edgeStart: {
          marginLeft: BASE_THEME.spacing(-1),
        },
        colorSecondary: {
          color: BASE_THEME.palette.grey[500],
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root:{
          backgroundColor: BLACK900,
          '&:hover, &:active, &:focus': {
            backgroundColor: BLACK800,
          },
          margin: '2px',
        },
        textPrimary: {
          color: BASE_THEME.palette.text.primary,
        },
        textSecondary: {
          color: BASE_THEME.palette.text.secondary,
        },
        outlinedPrimary: {
          borderColor: BASE_THEME.palette.grey[300],
          color: BASE_THEME.palette.text.primary,
          '&:hover, &:active, &:focus': {
            borderColor: BASE_THEME.palette.grey[500],
            color: BASE_THEME.palette.text.primary,
          },
        },
        containedSecondary: {
          backgroundColor: backgroundLevel2,
          border: `1px solid ${BASE_THEME.palette.grey[300]}`,
          color: BASE_THEME.palette.text.primary,
          '&:hover, &:active, &:focus': {
            backgroundColor: backgroundLevel3,
            borderColor: BASE_THEME.palette.grey[500],
            color: BASE_THEME.palette.text.primary,
          },
        },
      },
    },

    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: 'white',
          paddingLeft: BASE_THEME.spacing(1.5),
          paddingRight: BASE_THEME.spacing(1.5),
        },
      },
    },


    MuiMenu: {
      styleOverrides: {
        paper: {
          background: BLACK800
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: `1px solid ${BASE_THEME.palette.grey[400]}`,
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: `1px solid ${BASE_THEME.palette.grey[500]} !important`,
          },
          '&:after': {
            borderBottom: `1px solid ${BASE_THEME.palette.text.primary} !important`,
          },
          '&.MuiOutlinedInput-root:not(.Mui-error)': {
            '& fieldset': {
              borderColor: BASE_THEME.palette.grey[300],
              transition: 'border-color 0.2s',
            },
          },
          '&.MuiOutlinedInput-root:not(.Mui-disabled, .Mui-error)': {
            '&:hover fieldset': {
              borderColor: BASE_THEME.palette.grey[400],
            },
            '&.Mui-focused fieldset': {
              borderColor: BASE_THEME.palette.text.secondary,
              borderWidth: 1,
            },
          },
        },
        input: {
          fontSize: BASE_THEME.typography.pxToRem(14),
          '&.Mui-disabled': {
            WebkitTextFillColor: 'inherit',
            color: BASE_THEME.palette.text.secondary,
          },
        },
        inputSizeSmall: {},
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          '& legend': {
            fontSize: '0.85em',
            maxWidth: '100%',
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            fontSize: BASE_THEME.typography.pxToRem(14),
            color: BASE_THEME.palette.text.secondary,
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        shrink: {
          transform: 'scale(0.85)',
          fontWeight: BASE_THEME.typography.fontWeightMedium,
          '&.Mui-focused': {
            color: BASE_THEME.palette.text.primary,
          },
          '&.MuiInputLabel-standard': {
            transform: 'translate(0, -4px) scale(0.85)',
            color: backgroundLevel2,
          },
          '&.MuiInputLabel-outlined': {
            transform: 'translate(15px, -8px) scale(0.85)',
          },
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        variant: 'scrollable',
      },
      styleOverrides: {
        indicator: {
          height: '4px',
          top: '1px',
          backgroundColor: BRAND_GREEN,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          minWidth: BASE_THEME.spacing(2),
          paddingLeft: BASE_THEME.spacing(1.5),
          paddingRight: BASE_THEME.spacing(1.5),
          fontSize: BASE_THEME.typography.pxToRem(14),
          fontFamily: BASE_THEME.typography.fontFamily,
          lineHeight: 1.5,
          fontWeight: BASE_THEME.typography.fontWeightMedium,
          transition: 'color 0.2s',
          '&.Mui-selected': {
            color: BASE_THEME.palette.text.primary,
          },
          '&:hover': {
            color: BASE_THEME.palette.text.primary,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: BASE_THEME.typography.pxToRem(18),
          fontWeight: BASE_THEME.typography.fontWeightMedium,
        },
      },
    },
  },
  typography: {
    fontFamily: BASE_THEME.typography.fontFamily,
    h1: {
      fontFamily: BASE_THEME.typography.fontFamily,
      fontSize: BASE_THEME.typography.pxToRem(40),
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      fontWeight: BASE_THEME.typography.fontWeightMedium,
    },
    h2: {
      fontFamily: BASE_THEME.typography.fontFamily,
      fontSize: BASE_THEME.typography.pxToRem(32),
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      fontWeight: BASE_THEME.typography.fontWeightMedium,
    },
    h3: {
      fontFamily: BASE_THEME.typography.fontFamily,
      fontSize: BASE_THEME.typography.pxToRem(24),
      lineHeight: 1.5,
      letterSpacing: '-0.01em',
      fontWeight: BASE_THEME.typography.fontWeightMedium,
    },
    h4: {
      fontFamily: BASE_THEME.typography.fontFamily,
      fontSize: BASE_THEME.typography.pxToRem(20),
      lineHeight: 1.5,
      letterSpacing: '-0.01em',
      fontWeight: BASE_THEME.typography.fontWeightMedium,
    },
    h5: {
      fontFamily: BASE_THEME.typography.fontFamily,
      fontSize: BASE_THEME.typography.pxToRem(18),
      lineHeight: 1.5,
      letterSpacing: '-0.01em',
      fontWeight: BASE_THEME.typography.fontWeightMedium,
    },
    h6: {
      fontFamily: BASE_THEME.typography.fontFamily,
      fontSize: BASE_THEME.typography.pxToRem(16),
      lineHeight: 1.5,
      letterSpacing: '-0.005em',
      fontWeight: BASE_THEME.typography.fontWeightMedium,
    },
    body1: {
      fontSize: BASE_THEME.typography.pxToRem(14),
    },
    body2: {
      fontSize: BASE_THEME.typography.pxToRem(12),
    },
    overline: {
      fontWeight: BASE_THEME.typography.fontWeightMedium,
      letterSpacing: '0.05em',
    },
    button: {
      textTransform: 'none',
      fontWeight: BASE_THEME.typography.fontWeightMedium,
      lineHeight: 1.5,
    },
    caption: {
      letterSpacing: 0,
      lineHeight: 1.5,
    },
  },
  shadows: [
    'none',
    '0px 4px 15px rgba(33, 36, 67, 0.04), 0px 0px 2px rgba(33, 36, 67, 0.04), 0px 0px 1px rgba(33, 36, 67, 0.04)',
    '0px 10px 20px rgba(33, 36, 67, 0.04), 0px 2px 6px rgba(33, 36, 67, 0.04), 0px 0px 1px rgba(33, 36, 67, 0.04)',
    '0px 16px 24px rgba(33, 36, 67, 0.05), 0px 2px 6px rgba(33, 36, 67, 0.05), 0px 0px 1px rgba(33, 36, 67, 0.05)',
    '0px 24px 32px rgba(33, 36, 67, 0.06), 0px 16px 24px rgba(33, 36, 67, 0.06), 0px 4px 8px rgba(33, 36, 67, 0.06)',
    ...Array(20).fill('none'),
  ],
});

export default THEME;
