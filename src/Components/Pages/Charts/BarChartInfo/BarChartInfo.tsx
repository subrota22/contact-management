
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const BarChartInfo = () =>  {
   //get data covid-19 affected country from redux state 
   const covidData = useSelector((state: any) => state?.reducers?.covidCountry?.covidInfo);
    return (
      <div style={{height:"452px", width:"100%"}}>
      <ResponsiveContainer width="90%" height="90%">
        <BarChart
          width={500}
          height={300}
         data={covidData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend />
                
          <Bar dataKey="deaths" fill="#82ca9d" />
          <Bar dataKey="critical" fill="#82ca9d" />
          <Bar dataKey="recoveredPerOneMillion" fill="#82ca9d" />
          <Bar dataKey="casesPerOneMillion" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  
}

export default BarChartInfo ;