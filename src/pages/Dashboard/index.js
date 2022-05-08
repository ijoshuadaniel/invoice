import React from 'react';
import { Card } from '../../elements';
import { dashboardList, iconStyles } from './dashboard';
import './index.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard-list'>
        {dashboardList.map((item, index) => {
          return (
            <Card key={index} style={{ width: '23%' }}>
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
    </div>
  );
};

export default Dashboard;
