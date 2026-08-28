import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './data';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from '@mui/icons-material';

const Team = () => {
  const theme = useTheme();


  const columns = [
    { field: 'col1', headerName: 'ID', width: 33, align: 'center', headerAlign: 'center' },
    { field: 'col2', headerName: 'Name', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'col3', headerName: 'Email', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'col4', headerName: 'Age', align: 'center', headerAlign: 'center' },
    { field: 'col5', headerName: 'Phone', flex: 1, align: 'center', headerAlign: 'center' },
    {
      field: 'col6', headerName: 'Access', flex: 1, align: 'center', headerAlign: 'center',
      renderCell: ({ row: { col6 } }) => {
        return (
          <div>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                p: '5px',
                m: '8px auto ',
                width: '99px',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '5px',
                color: theme.palette === 'light' ? 'white' : 'white',
                backgroundColor: col6 === 'Admin' ? theme.palette.primary.dark : col6 === 'User' ? theme.palette.secondary.dark : '#3da58a',

              }}>
              {
                { col6 } === 'Admin' ?
                  <AdminPanelSettingsOutlined fontSize='small' /> :
                  { col6 } === 'User' ?
                    <LockOpenOutlined fontSize='small' /> :
                    <SecurityOutlined fontSize='small' />

              }
              <Typography sx={{ fontSize: '14px' }} >{col6}</Typography>
            </Box>
          </div>

        );
      }

    },
  ];


  return (
    <Box sx={{ height: 600, minWidth: '600px', mx: 'auto', overflowX: 'auto' }}>
      <DataGrid rows={rows} columns={columns} />
    </Box>

  );
}

export default Team;
