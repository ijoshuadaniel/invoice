import React, { useContext, useEffect } from 'react';
import { Header, SideBar, NavigationContainer } from './components';
import { AppContext } from './context';
import { setRootColors } from './utils/colorsInjector';
import { useParams } from 'react-router-dom';
import './app.scss';

const App = () => {
  const { theme, setTheme } = useContext(AppContext);
  const { path, sub } = useParams();

  useEffect(() => {
    setRootColors(theme);
  }, [theme]);

  const styles = {
    backgroundColor: theme === 'light' ? 'rgb(245,245,245)' : 'rgb(32, 32, 32)',
    scrollbarfaceColor: '#367CD2',
  };

  return (
    <div className={`app`} style={styles}>
      <Header theme={theme} setTheme={setTheme} />
      <div className='row body'>
        <div className='col-md-2'>
          <SideBar />
        </div>
        <div className='col-md-10 body-content'>
          <NavigationContainer page={path} sub={sub} />
        </div>
      </div>
    </div>
  );
};

export default App;
