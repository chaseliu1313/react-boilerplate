import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import bg from '../../assets/404.png';
import { SubTitle } from '../../components';
import { Button } from '@mui/material';

export const Page404 = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
      <img src={bg} style={{ width: '40%', height: 'auto' }} alt="404 page not found" />
      <SubTitle>There is no content here.</SubTitle>
      <Button
        variant="text"
        onClick={() => {
          navigate('/');
        }}>
        Go back to Home
      </Button>
    </div>
  );
};
