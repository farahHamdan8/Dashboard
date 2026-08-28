import { Stack } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import { DownloadOutlined } from '@mui/icons-material';
import Box from '@mui/material/Box';


const Dashboard = () => {
  return (
    <div>
      <Box sx={{ textAlign: 'right' }}>
        <Button
          sx={{ padding: "6px 8px", textTransform: 'capitalize', fontSize: "12px" }}
          variant='contained' color="primary" >
          <DownloadOutlined sx={{ fontSize: "18px" }} />
          Download Reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;