import React from 'react';
import { Link } from 'react-router-dom';
import { sideBarList } from './sidebar';
import './index.scss';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <ul>
        {sideBarList.map((item, i) => {
          return (
            <Link key={i} to={`/${item.name}`}>
              <li>
                {item.icon}
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
