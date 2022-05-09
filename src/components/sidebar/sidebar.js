import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { IoIosPeople, IoMdListBox } from 'react-icons/io';
import { BiBuildings } from 'react-icons/bi';
import { sideBarItems } from '../../constants/formelements';

export const sideBarList = [
  {
    id: 1,
    name: sideBarItems.dashboard,
    icon: <MdDashboard size={18} />,
  },
  {
    id: 2,
    name: sideBarItems.customers,
    icon: <IoIosPeople size={18} />,
    open: false,
    hasChildren: true,
    children: [
      { name: sideBarItems.addCustomers, icon: <IoMdListBox size={18} /> },
      { name: sideBarItems.customersList, icon: <IoMdListBox size={18} /> },
    ],
  },
  {
    id: 3,
    name: sideBarItems.companies,
    icon: <BiBuildings size={18} />,
  },
  {
    id: 4,
    name: sideBarItems.transactions,
    icon: <IoMdListBox size={18} />,
  },
];
