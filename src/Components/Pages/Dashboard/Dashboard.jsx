import { Helmet } from "react-helmet";
import BarChartInfo from "../Charts/BarChartInfo/BarChartInfo";
import DataLineChart from "../Charts/LineChart/LineChart";
import PieChartInfo from "../Charts/PieChartInfo/PieChartInfo";
const Dashboard = () => {
    return (
        <>
         <Helmet>
            <title> Dashboard</title>
         </Helmet>
            <div className="dashboardDiv shadow-xl">
                <h2 className="my-6 pt-3 text-2xl font-semibold"> All covid-19 information of past and recent !! </h2>
                <hr className="bg-white my-5" />
                <div className="flex sm:flex-col md:flex-col lg:flex-row justify-between">
                    <PieChartInfo></PieChartInfo>
                    <div className="h-auto w-1 bg-white  sm:d-none md:d-none lg:d-block"></div>
                    <BarChartInfo></BarChartInfo>
                </div>
                <hr className="bg-white my-5" />

                <DataLineChart></DataLineChart>

            </div>
        </>
    );
};

export default Dashboard;