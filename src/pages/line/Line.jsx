import React from "react";
import { ResponsiveLine } from '@nivo/line'
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import data from './data.js';

const Line = ({ isDashbord = false }) => {
  const thememe = useTheme();
  return (
    <Box sx={{ height: isDashbord ? "50vh" : '80vh' }}>
      <ResponsiveLine 
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
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        colors={{ scheme: 'blues' }}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={thememe.palette.mode === 'dark' ? 'white' : 'black'}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            symbolShape: 'circle'
          }
        ]}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{ legend: isDashbord ? null : 'transportation', legendOffset: 45 }}
        axisLeft={{ legend: isDashbord ? null : 'count', legendOffset: -50 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: 'circle'
          }
        ]}
      />
    </Box>
  );
}

export default Line;