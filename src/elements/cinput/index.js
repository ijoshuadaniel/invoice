import React, { useContext } from 'react';
import { inputTypes } from '../../constants/formelements';
import { AppContext } from '../../context';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import './index.scss';

const CInput = ({
  type,
  style,
  placeholder,
  value,
  handleChange,
  mandatory,
  label,
}) => {
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
    case inputTypes.text:
      return (
        <div className='cinput-text row'>
          <div className='col-md-4'>
            <label>
              {label} {mandatory && '*'} :
            </label>
          </div>
          <div className='col-md-4'>
            <input type='text' style={style} placeholder={placeholder} />
          </div>
        </div>
      );
    case inputTypes.email:
      return (
        <div className='cinput-text row'>
          <div className='col-md-4'>
            <label>
              {label} {mandatory && '*'} :
            </label>
          </div>
          <div className='col-md-4'>
            <input type='email' style={style} placeholder={placeholder} />
          </div>
        </div>
      );
    case inputTypes.number:
      return (
        <div className='cinput-text row'>
          <div className='col-md-4'>
            <label>
              {label} {mandatory && '*'} :
            </label>
          </div>
          <div className='col-md-4'>
            <input type='number' style={style} placeholder={placeholder} />
          </div>
        </div>
      );
    case inputTypes.button:
      return (
        <div className='cinput-button'>
          <button style={style}>{value}</button>
        </div>
      );
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
