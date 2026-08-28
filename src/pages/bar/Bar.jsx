import React from "react";
import { ResponsiveBar } from '@nivo/bar'
import data from './data.js'
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const Bar = ({ isDashboard = false }) => {
    const thememe = useTheme();

    return (
        <Box sx={{
            height: isDashboard ? '55vh' : '75vh',

        }}>
            <ResponsiveBar 
                theme={{
                    "text": {
                        "fontSize": 11,
                        "fill": "#333333",
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
                            "fill": "#000000",
                            "outlineWidth": 2,
                            "outlineColor": "#ffffff",
                            "outlineOpacity": 1
                        }
                    },
                    "tooltip": {
                        "wrapper": {},
                        "container": {
                            "background": thememe.palette.mode === 'dark' ? 'black' : 'white',
                            "color": thememe.palette.mode === 'dark' ? 'white' : ' black',
                            "fontSize": 12
                        },
                        "basic": {},
                        "chip": {},
                        "table": {},
                        "tableCell": {},
                        "tableCellValue": {}
                    }
                }}
                data={data}
                keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
                indexBy="country"
                labelSkipWidth={12}
                labelSkipHeight={12}
                colors={{ scheme: 'blues' }}

                legends={isDashboard ? [] : [
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: 120,
                        itemsSpacing: 3,
                        itemWidth: 100,
                        itemHeight: 16
                    }
                ]}
                axisBottom={{ legend: isDashboard ? null : 'country ', legendOffset: 40 }}
                axisLeft={{ legend: isDashboard ? null : 'food', legendOffset: -50 }}
                margin={{ top: 50, right: isDashboard ? 50 : 130, bottom: 50, left: 60 }}
            />
        </Box>

    );
}

export default Bar;