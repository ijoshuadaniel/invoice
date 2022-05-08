import React, { createContext, useState } from 'react';

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('bp4-light');

  const AppContextValue = {
    theme,
    setTheme,
  };
  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
