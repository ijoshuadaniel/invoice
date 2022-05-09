import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sideBarList } from './sidebar';
import './index.scss';

const SideBar = () => {
  const [sidebarItemList, setsidebarItemList] = useState(sideBarList);

  const handleSubmenu = (item) => {
    const newList = [...sidebarItemList];
    const newRow = newList.map((row) => {
      if (row.id === item.id) {
        row.open = !row.open;
      }
      return row;
    });
    setsidebarItemList(newRow);
  };

  return (
    <div className='sidebar'>
      <ul>
        {sidebarItemList.map((item, i) => {
          return (
            <div key={i}>
              {item.hasChildren ? (
                <li key={i} onClick={() => handleSubmenu(item)}>
                  {item.icon}
                  {item.name}
                </li>
              ) : (
                <Link key={i} to={`/${item.name}`}>
                  <li>
                    {item.icon}
                    {item.name}
                  </li>
                </Link>
              )}
              {item.hasChildren &&
                item.open &&
                item.children.map((child, j) => {
                  return (
                    <div className='sub-link' key={j}>
                      <Link to={`/${item.name}/${child.name}`}>
                        <li>
                          {child.icon}
                          {child.name}
                        </li>
                      </Link>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
