import React from 'react';
import { useSelector, useDispatch } from 'react-redux';  //Hooks da lib react-redux
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

const Page = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default Page;
