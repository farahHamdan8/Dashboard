import React from 'react';
import { Stack } from '@mui/material';
import { SendOutlined } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Papers from './Paper';
import { useTheme } from '@mui/material';
import { data1, data2, data3, data4 } from './data.js';


const Row1 = () => {
    const theme = useTheme()
    return (
        <Stack direction={'row'} sx={{ flexWrap: 'wrap', gap: 1, mt: 1, justifyContent: { xs: "center", md: "space-between" } }}>


            <Papers icon={<EmailIcon sx={{ fontSize: '27px', color: theme.palette.secondary.main }} />}
                title={'12,361'} subTitle={'Emails Sent'} data={data1} increase={'14'} scheme={"category10"} />

            <Papers icon={<PointofSaleIcon sx={{ fontSize: '27px', color: theme.palette.secondary.main }} />}
                title={'431,225'} subTitle={'Sales Obtained'} data={data2} increase={'21'} scheme={"accent"} />

            <Papers icon={<PersonAddIcon sx={{ fontSize: '30px', color: theme.palette.secondary.main }} />}
                title={'32,441'} subTitle={'New Clients'} data={data3} increase={'5'} scheme={"dark2"} />

            <Papers icon={<TrafficIcon sx={{ fontSize: '30px', color: theme.palette.secondary.main }} />}
                title={'1,325,134'} subTitle={'Traffic Recived'} data={data4} increase={'43'} scheme={"nivo"} />
        </Stack>
    );
};

export default Row1;