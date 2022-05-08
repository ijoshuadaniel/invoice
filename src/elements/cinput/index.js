import React, { useContext } from 'react';
import { inputTypes } from '../../constants/formelements';
import { AppContext } from '../../context';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import './index.scss';

const CInput = ({ type, style, placeholder, value, handleChange }) => {
  const { theme } = useContext(AppContext);

  const handleSwitchButton = () => {
    if (theme === 'light') {
      return (
        <>
          <span className='cinput-switch-button' />
          <BsMoonStars
            size={18}
            style={{ paddingRight: '0.3rem' }}
            onClick={handleChange}
          />
        </>
      );
    }
    return (
      <>
        <BsSun
          size={18}
          style={{ paddingLeft: '0.3rem' }}
          onClick={handleChange}
        />
        <span className='cinput-switch-button' />
      </>
    );
  };

  switch (type) {
    case inputTypes.search:
      return (
        <div className='cinput-search'>
          <input type='search' style={style} placeholder={placeholder} />
          <AiOutlineSearch size={22} />
        </div>
      );
    case inputTypes.switch:
      return (
        <div className='cinput-switch cinput-switch-active'>
          {handleSwitchButton()}
        </div>
      );
    default:
      break;
  }
};

export default CInput;
