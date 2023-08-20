import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
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
