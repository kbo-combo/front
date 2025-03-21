const color = {
  background: '#FFFFFF',
  primary: '#5b94de',
  fontPrimaryForBackground: '#5b84de',
  fontAccentForBackground: '#d73a2e',
  sub: '#333333',
  subLight: '#444444',
  lightBlack: '#555555',
  accent: '#EB4D3D',
  gray: '#C8C8C8',
  grayLight: '#ECECEC',
  grayDark: '#A5A5A5',
  water: '#75AEDC',
  green: '#15b737',
  fontGreen: '#33ad73',
  fontRed: '#de675e',
  gold: '#FFD700',
  silver: '#C0C0C0',
  bronze: '#CD7F32',
} as const;

const font = {
  text: 'normal 600 1rem/1.4rem "jua"',
  emphasize: '',
  subTitle: 'normal 600 2rem/2.4rem "NanumSquareRound"',
  title: 'normal 700 3.2rem/4rem "NanumSquareRound"',
  input: 'normal 500 1.8rem/2.2rem "NanumSquareRound"',
  dictTitle: 'normal 600 1.8rem/2.2rem "NanumSquareRound"',
  dictContent: 'normal 400 1.4rem/1.8rem "NanumSquareRound"',
  reminderCardContent: '500 1rem/1.5rem "NanumSquareRound"',
} as const;

const width = {
  mobile: '360px',
  pad: '768px',
} as const;

const zIndex = {
  bottomBar: 1000,
  dropdown: 1010,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  offcanvas: 1050,
  modal: 1060,
  popover: 1070,
  tooltip: 1080,
} as const;

const theme = {
  color,
  font,
  width,
  zIndex,
} as const;

export default theme;
