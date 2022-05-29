import React from 'react';
import { Card } from '../../../elements';
import CTables from '../../../elements/table';
import './index.scss';

const CustomerList = () => {
  const columns = [
    {
      name: 'Id',
      selector: (row) => row.id,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
    },
    {
      name: 'Company',
      selector: (row) => row.company,
    },
    {
      name: 'Phone',
      selector: (row) => row.phone,
    },
    {
      name: 'City',
      selector: (row) => row.city,
    },
    {
      name: 'Pan',
      selector: (row) => row.pan,
    },
    {
      name: 'GST',
      selector: (row) => row.gst,
    },
  ];

  const datas = [
    {
      id: 1,
      name: 'John Doe',
      company: 'ABC Company',
      phone: '+91-1234567890',
      city: 'Bangalore',
      pan: 'ABCD1234',
      gst: 'ABCD1234',
    },
    {
      id: 2,
      name: 'John Doe',
      company: 'ABC Company',
      phone: '+91-1234567890',
      city: 'Bangalore',
      pan: 'ABCD1234',
      gst: 'ABCD1234',
    },
    {
      id: 3,
      name: 'John Doe',
      company: 'ABC Company',
      phone: '+91-1234567890',
      city: 'Bangalore',
      pan: 'ABCD1234',
      gst: 'ABCD1234',
    },
    {
      id: 4,
      name: 'John Doe',
      company: 'ABC Company',
      phone: '+91-1234567890',
      city: 'Bangalore',
      pan: 'ABCD1234',
      gst: 'ABCD1234',
    },
    {
      id: 5,
      name: 'John Doe',
      company: 'ABC Company',
      phone: '+91-1234567890',
      city: 'Bangalore',
      pan: 'ABCD1234',
      gst: 'ABCD1234',
    },
    {
      id: 6,
      name: 'John Doe',
      company: 'ABC Company',
      phone: '+91-1234567890',
      city: 'Bangalore',
      pan: 'ABCD1234',
      gst: 'ABCD1234',
    },
    {
      id: 7,
      name: 'John Doe',
      company: 'ABC Company',
      phone: '+91-1234567890',
      city: 'Bangalore',
      pan: 'ABCD1234',
      gst: 'ABCD1234',
    },
    {
      id: 7,
      name: 'John Doe',
      company: 'ABC Company',
      phone: '+91-1234567890',
      city: 'Bangalore',
      pan: 'ABCD1234',
      gst: 'ABCD1234',
    },
    {
      id: 7,
      name: 'John Doe',
      company: 'ABC Company',
      phone: '+91-1234567890',
      city: 'Bangalore',
      pan: 'ABCD1234',
      gst: 'ABCD1234',
    },
    {
      id: 7,
      name: 'John Doe',
      company: 'ABC Company',
      phone: '+91-1234567890',
      city: 'Bangalore',
      pan: 'ABCD1234',
      gst: 'ABCD1234',
    },
    {
      id: 7,
      name: 'John Doe',
      company: 'ABC Company',
      phone: '+91-1234567890',
      city: 'Bangalore',
      pan: 'ABCD1234',
      gst: 'ABCD1234',
    },
    {
      id: 7,
      name: 'John Doe',
      company: 'ABC Company',
      phone: '+91-1234567890',
      city: 'Bangalore',
      pan: 'ABCD1234',
      gst: 'ABCD1234',
    },
    {
      id: 7,
      name: 'John Doe',
      company: 'ABC Company',
      phone: '+91-1234567890',
      city: 'Bangalore',
      pan: 'ABCD1234',
      gst: 'ABCD1234',
    },
  ];

  return (
    <div className='customerList'>
      <Card style={{ display: 'block' }}>
        <h3>All Customers</h3>
        <hr />
        <CTables columns={columns} data={datas} pagination={true} />
      </Card>
    </div>
  );
};

export default CustomerList;
