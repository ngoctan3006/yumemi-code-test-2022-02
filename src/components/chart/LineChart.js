import { useContext } from 'react';
import Chart from 'react-apexcharts';
import { PrefectureContext } from '../../contexts/PrefectureContext';

const LineChart = () => {
    const {
        prefState: { prefsChecked }
    } = useContext(PrefectureContext);

    const generateOptions = (data) => ({
        series: data.map((el) => {
            const { name, data } = el;
            return {
                name,
                data
            };
        }),
        options: {
            chart: {
                background: 'transparent'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            legend: {
                position: 'right'
            },
            grid: {
                show: false
            },
            xaxis: {
                categories: data[0] ? data[0].year : [],
                title: {
                    text: '年度'
                }
            },
            yaxis: {
                title: {
                    text: '人口数',
                    rotate: -90
                }
            }
        }
    });

    const chartOptions = generateOptions(prefsChecked);

    return (
        <div className='section'>
            <div className='chart-container'>
                <Chart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type='line'
                    width='100%'
                />
            </div>
        </div>
    );
};

export default LineChart;
