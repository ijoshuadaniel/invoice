import React from 'react';
import { Card } from '../../elements';
import { Chart } from 'react-google-charts';
import { dashboardList, iconStyles } from './dashboard';
import './index.scss';
import CTables from '../../elements/table';

export const data = [
  ['day', 'a', 'b', 'c', 'd'],
  ['Mon', 20, 28, 38, 45],
  ['Tue', 31, 38, 55, 66],
  ['Wed', 50, 55, 77, 80],
  ['Thu', 50, 77, 66, 77],
  ['Fri', 15, 66, 22, 68],
];

export const options = {
  chart: {
    title: 'Company Performance',
    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
  },
  hAxis: {
    textStyle: { color: '#FFF' },
  },
  vAxis: {
    textStyle: { color: '#FFF' },
  },
};

const columns = [
  {
    name: 'Id',
    selector: (row) => row.id,
  },
  {
    name: 'Date',
    selector: (row) => row.date,
  },
  {
    name: 'Invoice Number',
    selector: (row) => row.invoiceNo,
  },
  {
    name: 'Name',
    selector: (row) => row.name,
  },
  {
    name: 'Amount',
    selector: (row) => row.amount,
  },
  {
    name: 'Status',
    selector: (row) => row.invoiceNo,
  },
];

const datas = [
  {
    id: 1,
    date: '01/01/2019',
    invoiceNo: 'INV-001',
    name: 'John Doe',
    amount: '$100',
    status: 'Paid',
  },
  {
    id: 2,
    date: '01/01/2019',
    invoiceNo: 'INV-002',
    name: 'John Doe',
    amount: '$100',
    status: 'Paid',
  },
  {
    id: 3,
    date: '01/01/2019',
    invoiceNo: 'INV-002',
    name: 'John Doe',
    amount: '$100',
    status: 'Paid',
  },
  {
    id: 3,
    date: '01/01/2019',
    invoiceNo: 'INV-002',
    name: 'John Doe',
    amount: '$100',
    status: 'Paid',
  },
  {
    id: 3,
    date: '01/01/2019',
    invoiceNo: 'INV-002',
    name: 'John Doe',
    amount: '$100',
    status: 'Paid',
  },
  {
    id: 3,
    date: '01/01/2019',
    invoiceNo: 'INV-002',
    name: 'John Doe',
    amount: '$100',
    status: 'Paid',
  },
  {
    id: 3,
    date: '01/01/2019',
    invoiceNo: 'INV-002',
    name: 'John Doe',
    amount: '$100',
    status: 'Paid',
  },
];
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard-list'>
        {dashboardList.map((item, index) => {
          return (
            <Card key={index} style={{ width: '23.6%' }}>
              <div className='dashboard-flex'>
                <div className='dashboard-icon' style={iconStyles(item.color)}>
                  {item.icon}
                </div>
                <div className='dashboard-content'>
                  <div className='dashboard-content-heading'>
                    {item.heading}
                  </div>
                  <div className='dashboard-content-amount'>{item.amount}</div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <div className='dashboard-charts row'>
        <div className='col-md-6'>
          <Card>
            <Chart
              chartType='Bar'
              width='36.5vw'
              height='500px'
              data={data}
              options={options}
            />
          </Card>
        </div>
        <div className='col-md-6'>
          <Card>
            <Chart
              chartType='Line'
              className='chart-candle'
              width='36.5vw'
              height='500px'
              data={data}
              options={options}
              style={{ fill: 'green' }}
            />
          </Card>
        </div>
        <div className='dashboard-list' style={{ marginTop: '1rem' }}>
          <Card style={{ width: '39.5vw', marginRight: '1.5rem' }}>
            <CTables columns={columns} data={datas} pagination={false} />
          </Card>
          <Card style={{ width: '39.5vw' }}>
            <CTables columns={columns} data={datas} pagination={false} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
