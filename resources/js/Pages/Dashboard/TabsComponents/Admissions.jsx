import React from "react";
import Layout from "../../../layout/Index";
import { Select } from "antd";
import Bars from "../../../Assets/icons/bars.svg";
import Rate from "../../../Assets/icons/Group 3112.svg";
import CashFlowGraph from "../../../Components/Dashboard/CashFlowGraph";
import RevenueBarChart from "../../../Components/Dashboard/RevenueBarChart";
import CollegesBarChart from "../../../Components/Dashboard/CollegesBarChart";
import FundPieChart from "../../../Components/Dashboard/FundPieChart";
import SponsersCard from "../../../Components/Dashboard/SponsersCard";
import EducationalChart from "./Charts/EducationalChart";
import AdmissionsGraph from "./Charts/AdmissionsGraph";

const Admissions = () => {
    return (
        <div className="admissions-main" >
            <div>
                <div className="d-flex justify-content-start align-items-center session-filter-wrapper">
                    <div className="d-flex align-items-center">
                        <p className="m-0 me-3 f-14 text-black">Session:</p>
                        <Select
                            defaultValue="2020"
                            className="select-secondary"
                        >
                            <Option value="2019">2019</Option>
                            <Option value="2018">2018</Option>
                            <Option value="2017">2017</Option>
                        </Select>
                    </div>
                    <div className="d-flex ms-5 align-items-center">
                        <p className="m-0 me-3 f-14 text-black">Semester:</p>
                        <Select
                            defaultValue="Fall"
                            className="f-14 select-secondary"
                        >
                            <Option value="Spring">Spring</Option>
                            <Option value="Fall">Fall</Option>
                        </Select>
                    </div>
                </div>

                {/* //  Content  */}

                <div className="row mt-4">

                    <div className="col-8">
                        {/* // Cash Inflow / Outflow lineChart */}

                        <AdmissionsGraph />
                    </div>

                    <div className="col-4">

                        {/* //  College Cashflow Bar Chart */}

                        <div className="primary-card-rounded acceptance-card" >
                            <h6 className="f-16 fw-600 h6-heading">Acceptance Rate</h6>
                            <div className="table-wrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <td>College</td>
                                            <td>Applied</td>
                                            <td>Accepted</td>
                                            <td>Rate</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>English</td>
                                            <td>10,000</td>
                                            <td>9,000</td>
                                            <td>90%</td>
                                        </tr>
                                        <tr>
                                            <td>English</td>
                                            <td>10,000</td>
                                            <td>9,000</td>
                                            <td>90%</td>
                                        </tr>
                                        <tr>
                                            <td>English</td>
                                            <td>10,000</td>
                                            <td>9,000</td>
                                            <td>90%</td>
                                        </tr>
                                        <tr>
                                            <td>English</td>
                                            <td>10,000</td>
                                            <td>9,000</td>
                                            <td>90%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* //Funds Pie Chart */}

                        <EducationalChart />
                    </div>

                </div>
                </div>
        </div>
  )
};

export default Admissions;
