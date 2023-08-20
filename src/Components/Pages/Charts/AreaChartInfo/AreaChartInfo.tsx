import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

import PageLoader from '../../../Share/PageLoader/PageLoader';
import { covidCountryDate, covidCountryUpdate } from '../../../../Redux/action/api-data';

const cardinal = curveCardinal.tension(0.2);

const AreaChartInfo = () => {
  // const [data, setData] = useState() ;
  const dispatch = useDispatch();
  //get data covid-19 affected country from redux state 
  const covidData = useSelector((state: any) => state?.reducers?.covidCountry?.covidInfo);
  //get date covid-19 from redux state 
  const covidDate = useSelector((state: any) => state?.reducers?.covidDate?.covidInfoDate);
  //get date covid-19 from redux state 
  const covidUpdateInfo = useSelector((state: any) => state?.reducers?.covidInfoUpdate?.covidUpdate);


   //Get covid-19 date 

   const covidDateQuery = useQuery({
    queryKey: [dispatch],
    queryFn: async () => {
      const response = await  axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
      const data = await response.data;
      return dispatch(covidCountryDate(data))
    }
  });


  //Get covid-19 update 

     const covidUpdateQuery = useQuery({
      queryKey: [dispatch],
      queryFn: async () => {
        const response = await  axios.get('https://disease.sh/v3/covid-19/all');
        const data = await response.data;
        return dispatch(covidCountryUpdate(data))
      }
    });
    if( covidDateQuery.isLoading|| covidUpdateQuery.isLoading) return ( <PageLoader></PageLoader>)
    if( covidDateQuery.isError || covidUpdateQuery.isError ) return (<h1>Error loading data!!!</h1>)
  
console.log(covidUpdateQuery.data)
  return (
    <>
      <div style={{ height: "452px", width: "95%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={covidData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="critical" stroke="lime" fill="#8884d8" fillOpacity={0.3} />
      
          <Area type={cardinal} dataKey="deths" stroke="blue" fill="#82ca9d" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </>
  );

}

export default AreaChartInfo;
