// $FlowFixMe
import Highcharts from 'highcharts/highstock.src';
import { colorBg, colorText } from './styles';

function merge(a: Object, b: Object) {
    if (process.env.NODE_ENV !== 'production') {
        return a;
    }
    return Highcharts.merge(a, b);
}

const downColor = '#c03';
const upColor = '#2E8836';

const themeColors = (theme: Theme): Object => ({
    spacing: [100, 10, 15, 10],
    plotOptions: {
        line: {
            color: colorBg(theme, 1),
        },
        area: {
            color: colorBg(theme, 1),
        },
    },
    xAxis: {
		gridLineColor: colorBg(theme, 0.25),
        labels: {
			style: {
				color: colorBg(theme, 0.75),
			},
		},
		lineColor: colorBg(theme, 0.25),
		title: {
			style: {
                color: colorBg(theme, 0.75),
			},
		},
	},
    yAxis: {
        gridLineColor: colorBg(theme, 0.2),
		labels: {
			style: {
				color: colorBg(theme, 0.75),
			},
		},
		tickColor: colorBg(theme, 0.2),
		title: {
			style: {
				color: colorBg(theme, 0.75),
			},
		},
	},
    tooltip: {
        backgroundColor: colorBg(theme, 0.8),
        borderRadius: 3,
        style: {
            color: colorText(theme, 1),
        },
    },
    noData: {
        style: {
            color: colorBg(theme, 0.5),
        },
    },
});

const commonTheme = {
    chart: {
		style: {
			fontFamily: "'Roboto', sans-serif",
		},
		backgroundColor: 'transparent',
        resetZoomButton: {
            theme: {
                display: 'none',
            },
        },
	},
    plotOptions: {
        series: {
            states: {
                hover: {
                    lineWidth: 1.5,
                },
            },
        },
        area: {
            lineWidth: 1.5,
        },
        ohlc: {
            color: downColor,
            upColor,
            lineWidth: 1.5,
        },
        candlestick: {
            color: 'rgba(204, 0, 51, 0.75)',
            lineColor: downColor,
            lineWidth: 1.5,
            upColor: 'rgba(46, 136, 54, 0.75)',
            upLineColor: upColor,
        },
    },
    xAxis: {
        labels: {
            y: 15,
        },
    },
	yAxis: {
		tickWidth: 1,
	},
    tooltip: {
        shadow: false,
    },
    noData: {
        style: {
            fontSize: '20px',
            fontWeight: 'bold',
        },
    },
    lang: {
        noData: 'Data not available',
    },
};

export const lightTheme = merge(
    commonTheme,
    themeColors('light'),
);

export const darkTheme = merge(
    commonTheme,
    themeColors('dark'),
);
