import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { rows, columns } from './data.js';


const Contact = () => {
  return (
    <Box sx={{ height: 700, minWidth: '1000px', mx: 'auto', overflowX: 'auto' }}>
      <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
        showToolbar
        rows={rows} columns={columns} />
    </Box>
  );
};

export default Contact;