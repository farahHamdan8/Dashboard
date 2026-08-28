import React from "react";
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { rows, columns } from './data.js';



const Invoices = () => {
  return (
    <Box sx={{ height: 650, minWidth: '1000px', mx: 'auto', overflowX: 'auto' }}>

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default Invoices;