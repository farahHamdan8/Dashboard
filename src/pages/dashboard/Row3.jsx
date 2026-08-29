import { Box, Paper, Stack } from '@mui/material';
import React from 'react';
import Pie from '../pie/Pie';
import Bar from '../bar/Bar';
import InvoicesChart from '../invoicesChart/InvoicesChart';

const Row3 = () => {
  return (
    <Stack direction={'row'} sx={{ gap: 1, flexWrap: 'wrap' }}>
      <Paper sx={{ width: '30%', flexGrow: 1 }}>
        <Pie isDashboard={true} />
      </Paper>
      <Paper sx={{ width: { xs: '100%', sm: '30%' }, height: '55vh', flexGrow: 1 }}>
        <Bar isDashboard={true} />
      </Paper>
      <Paper sx={{ width: '30%', flexGrow: 1 }}>
        <InvoicesChart isDashboard={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;