import React from "react";
import { ResponsivePie } from '@nivo/pie'
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const data = [
  {
    "id": "erlang",
    "label": "erlang",
    "value": 581,
    "color": "hsl(235, 70%, 50%)"
  },
  {
    "id": "css",
    "label": "css",
    "value": 410,
    "color": "hsl(246, 70%, 50%)"
  },
  {
    "id": "haskell",
    "label": "haskell",
    "value": 271,
    "color": "hsl(305, 70%, 50%)"
  },
  {
    "id": "sass",
    "label": "sass",
    "value": 141,
    "color": "hsl(152, 70%, 50%)"
  },
  {
    "id": "php",
    "label": "php",
    "value": 416,
    "color": "hsl(130, 70%, 50%)"
  }
];

const Pie = ({ isDashboard = false }) => {
  const thememe = useTheme();
  return (
    <Box sx={{ height: isDashboard ? '55vh' : '75vh' }}>
      <ResponsivePie /* or Pie for fixed dimensions */
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
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={isDashboard ? 0.7 : 0.5}
        padAngle={0.6}
        cornerRadius={2}
        colors={{ scheme: 'blues' }}
        activeOuterRadiusOffset={8}
        enableArcLinkLabels={isDashboard ? false : true}
        enableArcLabels={isDashboard ? false : true}
        legends={isDashboard ? [] :
          [{
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            symbolShape: 'circle'
          }
          ]}
      />
    </Box>
  );
}

export default Pie;