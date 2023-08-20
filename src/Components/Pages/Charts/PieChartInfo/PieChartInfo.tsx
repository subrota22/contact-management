import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import PageLoader from '../../../Share/PageLoader/PageLoader';
import { covidCountryDate, covidCountryUpdate } from '../../../../Redux/action/api-data';

const PieChartInfo = () => {
  // const [data, setData] = useState() ;
  const dispatch = useDispatch();
  //get data covid-19 affected country from redux state 
  const covidData = useSelector((state: any) => state?.reducers?.covidCountry?.covidInfo);
  //get date covid-19 from redux state 
  const covidDate = useSelector((state: any) => state?.reducers?.covidDate?.covidInfoDate);
  //get date covid-19 from redux state 
  const covidUpdateInfo = useSelector((state: any) => state?.reducers?.covidInfoUpdate?.covidUpdate);

  console.log(covidDate, covidUpdateInfo);

  //Get covid date 
  const { isLoading, data:covidDateInfo = {} } = useQuery({
    queryKey: ["data"],
    queryFn: () => fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=all`)
      .then(res => res.json())
      .then(data => dispatch(covidCountryDate(data)))
  });
  //Get covid-19 updae 
  const { data: covidUpdate = {} } = useQuery({
    queryKey: ["data"],
    queryFn: () => fetch(`https://disease.sh/v3/covid-19/all`)
      .then(res => res.json())
      .then(data => dispatch(covidCountryUpdate(data)))
  });


  //Print two data for test 
  console.log(covidDateInfo, covidUpdate);

  if (isLoading) {
    return <>

      <div className="h-screen">
        <PageLoader></PageLoader>
      </div>
    </>
  }

  return (
    <>
      <div style={{ height: "452px", width: "95%" }}>
        <ResponsiveContainer width="90%" height="90%">
          <PieChart width={400} height={400}>
            <Pie data={covidData} dataKey="active" decelerate="deaths" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
            <Pie data={covidData} dataKey="critical" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );

}

export default PieChartInfo;
