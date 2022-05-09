import React from 'react';
import { Card, CInput } from '../../elements';
import './index.scss';

const Companies = () => {
  return (
    <div className='companies'>
      <Card
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div className='companies-text'>Companies</div>
        <CInput
          type='button'
          value='+ Add Company'
          style={{
            width: '20vw',
            color: 'whitesmoke',
            backgroundColor: 'green',
            borderColor: 'green',
          }}
        />
      </Card>
      <Card>
        <CInput type='button' value='Add Customer' />
      </Card>
    </div>
  );
};

export default Companies;
