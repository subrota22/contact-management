import { useQuery } from '@tanstack/react-query';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PageLoader from '../../../Share/PageLoader/PageLoader';
import { useDispatch, useSelector } from 'react-redux';
import { covidCountryData } from '../../../../Redux/action/api-data';
import axios from 'axios';
import React from "react";
const DataLineChart = () => {
    const dispatch = useDispatch();
    //get data covid-19 affected country from redux state 
    const covidData = useSelector((state: any) => state?.reducers?.covidCountry?.covidInfo);
    //get covid-19 affected country
    const {isLoading , data=[]} = useQuery({
        queryKey: [dispatch],
        queryFn: async () => {
            const response = await axios.get('https://disease.sh/v3/covid-19/countries');
            const data= await response.data;
            return dispatch(covidCountryData(data));
        }
    });
    //use effect to get covid country data 
    React.useEffect(() => {
        async function covidData() {
            const response = await axios.get('https://disease.sh/v3/covid-19/countries');
            const data = await response.data;
            return dispatch(covidCountryData(data));
        }
        covidData();
    }, [dispatch]);
    if (isLoading) return (<PageLoader></PageLoader>)
    // if (covidCountryQuery.isError) return (<h1>Error loading data!!!</h1>)

    return (
        <div style={{ height: "450px", width: "95%" }}>
            <ResponsiveContainer width="100%" height="80%">
                <LineChart
                    style={{ height: "400px" }}
                    data={covidData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 5" color='white' />
                    <XAxis dataKey="oneCasePerPeople" stroke="white"/>
                    <YAxis dataKey="todayRecovered" stroke="white" />
                    <Tooltip itemStyle={{ background: "darkblue", padding: "20px", height: "auto", width: "auto" }} />
                    <Legend style={{ background: "lime" }} />

                    <Line type="monotone" dataKey="country" stroke="white" />
                    <Line type="monotone" dataKey="deaths" stroke="red" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="casesPerOneMillion" stroke="yellow" />
                    <Line type="monotone" dataKey="active" stroke="lime" />
                    <Line type="monotone" dataKey="recovered" stroke="lime" />
                    <Line type="monotone" dataKey="critical" stroke="yellow" />
                    <Line type="monotone" dataKey="updated" stroke="lime" />
                    <Line type="monotone" dataKey="recoveredPerOneMillion" stroke="white" />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );

}

export default DataLineChart;