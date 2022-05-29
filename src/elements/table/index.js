import React from 'react';
import DataTable from 'react-data-table-component';
import './index.scss';

const CTables = ({ columns, data, pagination }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination={pagination}
      style={{ backgroundColor: 'black !important' }}
    />
  );
};

export default CTables;
