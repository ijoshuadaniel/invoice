import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { IoIosPeople, IoMdListBox } from 'react-icons/io';
import { BiBuildings } from 'react-icons/bi';

export const sideBarList = [
  {
    name: 'Dashboard',
    icon: <MdDashboard size={18} />,
  },
  {
    name: 'Customers',
    icon: <IoIosPeople size={18} />,
  },
  {
    name: 'Companies',
    icon: <BiBuildings size={18} />,
  },
  {
    name: 'Transactions',
    icon: <IoMdListBox size={18} />,
  },
];
