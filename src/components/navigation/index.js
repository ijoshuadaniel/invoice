import React from 'react';
import { Dashboard } from '../../pages';

const NavigationContainer = ({ page }) => {
  switch (page) {
    case 'Dashboard':
      return <Dashboard />;
    default:
      return <Dashboard />;
  }
};

export default NavigationContainer;
