import React from "react";
import { Stack } from '@mui/material';
import { SendOutlined } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { ResponsivePie } from "@nivo/pie";
import { useTheme } from '@mui/material/styles';


const Papers = ({ icon, title, subTitle, increase, data, scheme }) => {
    const thememe = useTheme();

    return (
        <Paper sx={{
            flexGrow: 1,
            minWidth: '300px', p: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
            <Stack direction={'column'}
                sx={{ gap: 1 }}
            >
                {icon}
                <Typography variant='body2' sx={{ fontSize: '13px' }}>{title}</Typography>
                <Typography variant='body2' sx={{ fontSize: '13px' }}>{subTitle}</Typography>
            </Stack>
            <Stack direction={'column'}
                sx={{ gap: 1, alignItems: 'center' }}
            >
                <Box sx={{ height: '80px', width: '80px' }}>
                    <ResponsivePie /* or Pie for fixed dimensions */
                        data={data}
                        theme=
                        {{
                            "text": {
                                "fontSize": 11,
                                "fill": thememe.palette.mode === 'dark' ? 'white' : 'black',
                                "outlineWidth": 0,
                                "outlineColor": "#ffffff"
                            },
                            "axis": {
                                "domain": {
                                    "line": {
                                        "stroke": "#777777",
                                        "strokeWidth": 1
                                    }
                                },
                                "legend": {
                                    "text": {
                                        "fontSize": 12,
                                        "fill": thememe.palette.mode === 'dark' ? 'white' : 'black',
                                        "outlineWidth": 0,
                                        "outlineColor": "#ffffff"
                                    }
                                },
                                "ticks": {
                                    "line": {
                                        "stroke": "#777777",
                                        "strokeWidth": 1
                                    },
                                    "text": {
                                        "fontSize": 11,
                                        "fill": thememe.palette.mode === 'dark' ? 'white' : 'black',
                                        "outlineWidth": 0,
                                        "outlineColor": "#ffffff"
                                    }
                                }
                            },
                            "grid": {
                                "line": {
                                    "stroke": "#dddddd",
                                    "strokeWidth": 1
                                }
                            },
                            "legends": {
                                "title": {
                                    "text": {
                                        "fontSize": 11,
                                        "fill": thememe.palette.mode === 'dark' ? 'white' : 'black',
                                        "outlineWidth": 0,
                                        "outlineColor": "#ffffff"
                                    }
                                },
                                "text": {
                                    "fontSize": 11,
                                    "fill": thememe.palette.mode === 'dark' ? 'white' : 'black',
                                    "outlineWidth": 0,
                                    "outlineColor": "#ffffff"
                                },
                                "ticks": {
                                    "line": {},
                                    "text": {
                                        "fontSize": 10,
                                        "fill": thememe.palette.mode === 'dark' ? 'white' : 'black',
                                        "outlineWidth": 0,
                                        "outlineColor": "#ffffff"
                                    }
                                }
                            },
                            "annotations": {
                                "text": {
                                    "fontSize": 13,
                                    "fill": thememe.palette.mode === 'dark' ? 'white' : 'black',
                                    "outlineWidth": 2,
                                    "outlineColor": "#ffffff",
                                    "outlineOpacity": 1
                                },
                                "link": {
                                    "stroke": "#000000",
                                    "strokeWidth": 1,
                                    "outlineWidth": 2,
                                    "outlineColor": "#ffffff",
                                    "outlineOpacity": 1
                                },
                                "outline": {
                                    "stroke": "#000000",
                                    "strokeWidth": 2,
                                    "outlineWidth": 2,
                                    "outlineColor": "#ffffff",
                                    "outlineOpacity": 1
                                },
                                "symbol": {
                                    "fill": thememe.palette.mode === 'dark' ? 'white' : 'black',
                                    "outlineWidth": 2,
                                    "outlineColor": "#ffffff",
                                    "outlineOpacity": 1
                                }
                            },
                            "tooltip": {
                                "wrapper": {},
                                "container": {
                                    "background": thememe.palette.mode === 'dark' ? 'black' : ' white',
                                    "color": thememe.palette.mode === 'dark' ? 'white' : 'black',
                                    "fontSize": 12
                                },
                                "basic": {},
                                "chip": {},
                                "table": {},
                                "tableCell": {},
                                "tableCellValue": {}
                            }

                        }}
                        colors={{ scheme: scheme }}
                        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
                        innerRadius={0.7}
                        padAngle={0.6}
                        cornerRadius={2}
                        activeOuterRadiusOffset={8}
                        enableArcLinkLabels={false}
                        enableArcLabels={false}
                    />
                </Box>
                <Typography variant='body2' sx={{ fontSize: '13px' }}>+{increase}%</Typography>

            </Stack>

        </Paper>
    )
}
export default Papers;