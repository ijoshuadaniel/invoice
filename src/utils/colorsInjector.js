export const setRootColors = (theme) => {
  const color = theme === 'dark' ? 'rgb(245,245,245)' : 'rgb(32, 32, 32)';
  const hover = theme === 'light' ? 'rgb(245,245,245)' : 'rgb(32, 32, 32)';
  document.body.style.setProperty('--color', color);
  document.body.style.setProperty('--hover', hover);
};
