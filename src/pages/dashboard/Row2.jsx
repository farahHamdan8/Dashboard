import React from 'react';
import { Stack, Paper, Box, Typography, useTheme, IconButton } from '@mui/material';
import Line from '../line/Line';
import { DownloadOutlined } from '@mui/icons-material';
import { Transactions } from './data';


const Row2 = () => {
  const theme = useTheme();
  let i = 0;
  return (
    <Stack
      direction={"row"}
      sx={{ my: 2, gap: 1, flexWrap: 'wrap' }}>
      <Paper sx={{ width: { xs: '100%', md: "50%" } }}>
        <Stack direction={"row"}
          sx={{ gap: 1.5, flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography
              variant='h6'
              sx={{ mb: 1, mt: 2, ml: 4, color: theme.palette.secondary.main, fontWeight: 600 }}
            >Revenue Generated</Typography>
            <Typography
              variant='body2'
              sx={{ ml: 4 }}
            >$59,342,32</Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3, mt: 2 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashbord={true} sx={{ flexGrow: 1 }} />
      </Paper>
      <Box sx={{ flexGrow: 1, minWidth: '280px', maxHeight: 396, overflow: 'auto' }}>
        <Paper>
          <Typography
            variant='h6'
            sx={{ color: theme.palette.secondary.main, fontWeight: "bold", p: 1.2 }}
          >Recent Transactions</Typography>
        </Paper>

        {Transactions.map((item) => {
          i = i + 1;
          return (
            <Paper key={i}
              sx={{ mt: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ p: 1.2 }}>
                <Typography variant='body1' sx={{ fontWeight: 600 }}>
                  Test
                </Typography>
                <Typography variant='body2' >
                  test
                </Typography>
              </Box>
              <Typography variant='body1' >
                test
              </Typography>
              <Typography variant='body2'
                sx={{
                  borderRadius: 1.4,
                  p: 1,
                  mr: 1,
                  bgcolor: theme.palette.error.main,
                  color: theme.palette.getContrastText(theme.palette.error.main)
                }}
              >
                $5.55
              </Typography>
            </Paper>
          )
        })}
      </Box>
    </Stack>
  );
};

export default Row2;