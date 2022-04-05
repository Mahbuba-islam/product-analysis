/* eslint-disable no-unused-vars */

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,  ResponsiveContainer, LineChart, Line, Tooltip } from 'recharts';


 
  
  const Dashboard = () => {
    const data =   [ {
        month: "Mar",
        investment: 100000,
        sell: 241,
        revenue: 10401
    },
    {
        month: "Apr",
        investment: 200000,
        sell: 423,
        revenue: 24500
    },
    {
        month: "May",
        investment: 500000,
        sell: 726,
        revenue: 67010
    },
    {
        month: "Jun",
        investment: 500000,
        sell: 529,
        revenue: 40405
    },
    {
        month: "Jul",
        investment: 600000,
        sell: 601,
        revenue: 50900
    },
    {
        month: "Aug",
        investment: 700000,
        sell: 670,
        revenue: 61000
    }
  ]
  
 return (
     <><LineChart width={500} height={280} margin={{
        top: 5,
        right: 50,
        left: 50,
        bottom: 5,
      }} data={data}>
         <Line dataKey={'month'}></Line>
         <Line dataKey={'investment'}></Line>
         <XAxis dataKey={'sell'}></XAxis>
         <XAxis dataKey={'revenue'}></XAxis>
         <YAxis ></YAxis>
     </LineChart><Tooltip></Tooltip>
     <br />
     <br />
     <BarChart width={500} height={280} fill ={'#8884d8'}  margin={{
              top: 5,
              right: 50,
              left: 50,
              bottom: 5,
            }} data={data}>
         <Bar dataKey={'month'}></Bar>
         <Bar dataKey={'investment'}></Bar>
         <XAxis dataKey={'sell'}></XAxis>
         <XAxis dataKey={'revenue'}></XAxis>
         <YAxis ></YAxis>
     </BarChart><Tooltip></Tooltip>
     </>
     
 )
          
  }               
  
export default Dashboard;
  
        
      
      
      
     
        
          
          
       