import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import Avatar from '@mui/material/Avatar';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import AreaChartOutlinedIcon from '@mui/icons-material/AreaChartOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
const drawerWidth = 240;

// @ts-ignore
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

// @ts-ignore
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  // @ts-ignore
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const LogoImg = () => (
  <img
    src="./farah.jpg"
    alt="Logo"
    style={{ width: '7%', height: '7%', borderRadius: '50%' }}
  />
);
const Array1 = [{ text: 'Dashboard', icon: <HomeOutlinedIcon />, path: '/' }, ,
{ text: 'Manage Team', icon: <PeopleOutlinedIcon />, path: '/Team' },
{ text: 'Contacts Information', icon: <ContactsOutlinedIcon />, path: '/Contact' },
{ text: 'Invoices Balances', icon: <ReceiptOutlinedIcon />, path: '/Invoices' }];



const Array2 = [{ text: 'Profile Form', icon: <AccountCircleOutlinedIcon />, path: '/Form' }, ,
{ text: 'Calendar', icon: <CalendarTodayOutlinedIcon />, path: '/Calender' },
{ text: 'FAQ Page', icon: <LiveHelpOutlinedIcon />, path: '/FAQ' },
]


const Array3 = [{ text: 'Bar Chart', icon: <BarChartOutlinedIcon />, path: '/Bar' }, ,
{ text: 'Pie Chart', icon: <PieChartOutlineOutlinedIcon />, path: '/Pie' },
{ text: 'Line Chart', icon: <ShowChartOutlinedIcon />, path: '/Line' },
{ text: 'Invoices Chart', icon: <AreaChartOutlinedIcon />, path: '/InvoicesChart' }];

// @ts-ignore
const DrawerApp = ({ open, handleDrawerClose }) => {
  let location = useLocation(); 
  const theme = useTheme();
  const navigate = useNavigate(); 
  return (
    <Drawer variant="permanent" open={open}
      sx={{

        '&::-webkit-scrollbar-track': {
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#35383d' : '#c1c1c1',
          '&:hover': {
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1e1e1e' : '#f1f1f1',
          },
        },
        scrollbarWidth: 'thin',
        scrollbarColor: (theme) =>
          theme.palette.mode === 'dark'
            ? '#35383d #1e1e1e'
            : '#ccc #f1f1f1',
      }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar alt="Remy Sharp" src="../src/imgs/farah.jpg" sx={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', margin: "20px 0px", width: open ? '100px' : '45px', height: open ? '100px' : '45px', border: '2px solid #ccc' }} />
      {open ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>Farah Hamdan <span style={{ color: '#1976d2' }}>Admin</span></div> : ''}
      <Divider />
      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 40,
                px: 2,
                justifyContent: open ? 'initial' : 'center',
                bgcolor: (item.path === location.pathname) ? (localStorage.getItem('currentMode') === 'dark') ? grey[800] : grey[200] : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: 'center',
                  mr: open ? 3 : 'auto',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 40,
                px: 2.5,

                justifyContent: open ? 'initial' : 'center',
                bgcolor: (item.path === location.pathname) ? (localStorage.getItem('currentMode') === 'dark') ? grey[800] : grey[200] : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: 'center',
                  mr: open ? 3 : 'auto',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path); 
              }}
              sx={{
                minHeight: 40,
                px: 2,
                justifyContent: open ? 'initial' : 'center',
                bgcolor: (item.path === location.pathname) ? (localStorage.getItem('currentMode') === 'dark') ? grey[800] : grey[200] : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: 'center',
                  mr: open ? 3 : 'auto',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerApp;