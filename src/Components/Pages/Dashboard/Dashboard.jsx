import { Helmet } from "react-helmet";
import BarChartInfo from "../Charts/BarChartInfo/BarChartInfo";
import DataLineChart from "../Charts/LineChart/LineChart";
import PieChartInfo from "../Charts/PieChartInfo/PieChartInfo";
import { BsBarChart, BsPieChartFill } from "react-icons/bs";
import { GiChart } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title> Dashboard </title>
            </Helmet>
            <div className="card my-20  w-fulltext-primary-content">
                <div className="card-body text-center">
                    <div className="card-title">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mx-auto p-5 rounded-xl text-white w-full">
                            <p>All covid-19 information of past and recent !!</p>
                        </div>
                        <hr className="text-gray-600 my-5" />
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        {/* pie chart for covid-19 */}
                        <div className="card w-full bg-gradient-to-r from-cyan-500 to-blue-500 m-4 text-primary-content">
                            <div className="card-body">
                                <div className="card-title text-white text-center">
                                    <BsPieChartFill className="text-xl text-white mx-2"></BsPieChartFill>
                                    Covid-19 info by Pie chart
                                </div>
                                <hr />
                                <PieChartInfo></PieChartInfo>
                            </div>
                        </div>
                        {/* bar chart for covid-19 */}
                        <div className="card w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% m-4 text-primary-content">
                            <div className="card-body">
                                <div className="card-title text-white text-center">
                                    <BsBarChart className="text-xl text-white mx-2"></BsBarChart>
                                    Covid-19 info by Bar chart
                                </div>
                                <hr />
                                <BarChartInfo></BarChartInfo>
                            </div>
                        </div>

                    </div>
                    {/* line chart for covid-19 */}
                    <div className="card w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% m-4 text-primary-content">
                        <div className="card-body">
                            <div className="card-title text-white text-center">
                                <GiChart className="text-xl text-white mx-2"></GiChart>
                                Covid-19 info by Line chart
                            </div>
                            <hr />
                            <DataLineChart></DataLineChart>
                        </div>
                    </div>

                </div>
            </div>


            <div className="card my-10  w-fulltext-primary-content">
                <div className="card-body text-center">
                    <div className="card-title">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mx-auto p-5 rounded-xl text-white w-full">
                            <p>Our all company branch location</p>
                        </div>
                        <hr className="text-gray-600 my-5" />
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        {/* Our first Location map */}
                        <div className="card w-full bg-gradient-to-r from-cyan-500 to-blue-500 m-4 text-primary-content">
                            <div className="card-body">
                                <div className="card-title text-white text-center">
                                    <GrMapLocation className="text-xl text-white mx-2"></GrMapLocation>
                                    Our first Location
                                </div>
                                <hr />
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03615612356!2d-74.30934136091483!3d40.697539948438326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1692515458730!5m2!1sen!2sbd" width="100%" height="400px" style={{ border: "0px", borderRadius: "12px" }} allowfullscreen="true" title="first-map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        {/* Our second Location map */}
                        <div className="card w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% m-4 text-primary-content">
                            <div className="card-body">
                                <div className="card-title text-white text-center">
                                    <GrMapLocation className="text-xl text-white mx-2"></GrMapLocation>
                                    Our Second Location
                                </div>
                                <hr />
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6998898.249461299!2d-105.37224516183088!3d31.069942071994603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e0!3m2!1sen!2sbd!4v1692515757637!5m2!1sen!2sbd"
                                    width="100%" height="400px" style={{ border: "0px", borderRadius: "12px" }} allowfullscreen="true" title="second-map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                    </div>
                    {/* Our third Location map */}
                    <div className="card w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% m-4 text-primary-content">
                        <div className="card-body">
                            <div className="card-title text-white text-center">
                                <GrMapLocation className="text-xl text-white mx-2"></GrMapLocation>
                                Our Third Location
                            </div>
                            <hr />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6769270.143240359!2d-111.31994486723956!3d34.061625996974385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87185043e79852a9%3A0x46bf6e1a63359eba!2sNew%20Mexico%2C%20USA!5e0!3m2!1sen!2sbd!4v1692516008237!5m2!1sen!2sbd"
                                width="100%" height="400px" style={{ border: "0px", borderRadius: "12px" }}
                                allowfullscreen="true" title="Third location" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Dashboard;