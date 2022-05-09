import React from 'react';
import { sideBarItems } from '../../constants/formelements';
import { Dashboard } from '../../pages';
import Companies from '../../pages/companies';
import { AddCustomer, CustomerList } from '../../pages/customers';

const NavigationContainer = ({ page, sub }) => {
  switch (page) {
    case sideBarItems.dashboard:
      return <Dashboard />;
    case sideBarItems.customers:
      switch (sub) {
        case sideBarItems.addCustomers:
          return <AddCustomer />;
        case sideBarItems.customersList:
          return <CustomerList />;
      }
    case sideBarItems.companies:
      return <Companies />;
    default:
      return <Dashboard />;
  }
};

export default NavigationContainer;
