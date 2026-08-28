import React from "react";
import { ResponsiveChoropleth } from '@nivo/geo'
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import data from './data.js';
import geo from './geo.jsx';

const InvoicesChart = ({ isDashboard = false }) => {
  const thememe = useTheme();
  return (
    <Box sx={{ height: isDashboard ? '55vh' : '75vh', border: isDashboard ? 'hidden' : '1px solid ', borderColor: thememe.palette.mode === 'dark' ? 'white' : 'black', padding: '3px' }}>
      <ResponsiveChoropleth
        theme={{
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
        }
        }
        data={data}
        features={geo.features}
        projectionScale={isDashboard ? 110 : 180}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="BrBG"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.8}
        borderColor="white"
        legends={
          isDashboard ? [] :
            [{
              anchor: 'bottom-left',
              direction: 'column',
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: 'left-to-right',
              itemTextColor: thememe.palette.mode === 'dark' ? 'white' : 'black',
              itemOpacity: 0.85,
              symbolSize: 18
            }
            ]}
      />
    </Box>
  );
}

export default InvoicesChart;