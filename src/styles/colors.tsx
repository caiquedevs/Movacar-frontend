const darkMode = localStorage.getItem('darkMode') || 'dark';

const colorPaletteOne = {
  white: '#ffffff',
  black: '#000000',
  silver: '#cecece',
  light: '#212832',
  dark: '#19202A',
  orange: '#ffb200',
};

const colorPaletteTwo = {
  white: '#ffffff',
  black: '#000000',
  silver: '#cecece',
  light: '#ffffff',
  dark: '#bdbdbd',
};

const pallete: any = darkMode === 'dark' ? colorPaletteOne : colorPaletteTwo;
export default pallete;
