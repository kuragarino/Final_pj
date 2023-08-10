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
import ChartComponent from './ChartComponent';



const Dashboard = () => {

  const history = useHistory();
  
  useEffect(() => {
    let flag = localStorage.getItem(`LoginProcess`)
    if(flag != "true"){
      history.push(`/Login`);
    }
}, );


  return (
    <>
    <p>This is dashboard</p>
    <div className="App">
      <header className="App-header">
        <h1>Just Testing...</h1>
      </header>
      <main className="App-main">
        <ChartComponent />
      </main>
    </div>

    </>
  );
}

export default Dashboard
