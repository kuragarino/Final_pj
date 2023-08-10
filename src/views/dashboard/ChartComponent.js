import React, { lazy, useEffect } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router';
import ApexCharts from 'apexcharts'
import ReactApexChart from 'react-apexcharts';

const ChartComponent = () => {
    // Example data for the chart
    const chartData = {
      options: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
      }]
    };

    return (
        <div className="chart">
          <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
        </div>
      );
    };
    
    export default ChartComponent;