import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import PageLoader from '../../../Share/PageLoader/PageLoader';
import { covidCountryDate, covidCountryUpdate } from '../../../../Redux/action/api-data';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

const PieChartInfo = () => {
  // const [data, setData] = useState() ;
  const dispatch = useDispatch();
  //get date covid-19 from redux state 
  const covidDate = useSelector((state: any) => state?.reducers?.covidDate?.covidInfoDate);
  //get date covid-19 from redux state 
  const covidUpdateInfo = useSelector((state: any) => state?.reducers?.covidInfoUpdate?.covidUpdate);

  console.log("covidDate", covidDate, "covidUpdateInfo", covidUpdateInfo);

  //Get covid date 
  const { isLoading, data = {} } = useQuery({
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
  console.log(data, covidUpdate);

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
            <Pie data={data02} dataKey="value" decelerate="deaths" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
            <Pie data={data01} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );

}

export default PieChartInfo;
