import React from 'react';
import { CInput } from '../../elements';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import './index.scss';
import { changeTheme } from '../../utils/helper';

const Header = ({ theme, setTheme }) => {
  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className={`header`}>
      <div className='header__logo'>iBilling</div>
      <div className='header__group'>
        <CInput type='search' placeholder='search customers..' />
        <MdOutlineNotificationsActive size={22} />
        <CInput type='switch' handleChange={handleChangeTheme} />
        <div className='header__user'>welcome Daniel</div>
      </div>
    </div>
  );
};

export default Header;
