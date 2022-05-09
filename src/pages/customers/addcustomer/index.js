import React from 'react';
import { Card, CInput } from '../../../elements';
import { addCustomerFields } from './addcustomer';
import './index.scss';

const AddCustomer = () => {
  return (
    <div className='addcustomer'>
      <Card style={{ display: 'block' }}>
        <div className='addcustomer-header'>Add Customer</div>
        <br />
        <div className='addcustomer-body row'>
          <div className='col-md-6'>
            {addCustomerFields.map((field, index) => {
              if (index <= 8) {
                return (
                  <CInput
                    key={index}
                    type={field.type}
                    placeholder={field.placeholder}
                    label={field.label}
                    mandatory={field.mandatory}
                  />
                );
              }
            })}
          </div>
          <div className='col-md-6'>
            {addCustomerFields.map((field, index) => {
              if (index > 8) {
                return (
                  <CInput
                    key={index}
                    type={field.type}
                    placeholder={field.placeholder}
                    label={field.label}
                    mandatory={field.mandatory}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className='addcustomer-button'>
          <CInput
            type='button'
            value='Cancel'
            style={{
              color: 'whitesmoke',
              backgroundColor: 'red',
              borderColor: 'red',
            }}
          />
          <CInput
            type='button'
            value='Add Customer'
            style={{
              width: '20vw',
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default AddCustomer;
