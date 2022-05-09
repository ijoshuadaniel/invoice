import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoMdPeople } from 'react-icons/io';
import { FaFileInvoice } from 'react-icons/fa';
import { BiMoney } from 'react-icons/bi';

export const dashboardList = [
  {
    heading: 'Amount Due',
    icon: <BsCurrencyDollar size={22} />,
    amount: '$ 1,000.00',
    color: 'green',
  },
  {
    heading: 'Customers',
    icon: <IoMdPeople size={22} />,
    amount: '2456',
    color: 'blue',
  },
  {
    heading: 'Invoices',
    icon: <FaFileInvoice size={22} />,
    amount: '400',
    color: 'purple',
  },
  {
    heading: 'Total Revenue',
    icon: <BiMoney size={22} />,
    amount: '$ 80,403.00',
    color: 'red',
  },
];

export const iconStyles = (color) => ({
  width: '50px',
  backgroundColor: color,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '1rem',
  borderRadius: '0.3rem',
  color: 'whitesmoke',
});
