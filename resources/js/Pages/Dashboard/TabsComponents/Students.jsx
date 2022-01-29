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
import TeachersBarChart from "./Charts/TeachersBarChart";
import QualificationPieChart from "./Charts/QualificationPieChart";
import CountryWiseTeachersBarChart from "./Charts/CountryWiseTeachersBarChart";
import AgeGroupBarChart from "./Charts/AgeGroupBarChart";
import StudentsPerformanceBarChart from "./Charts/StudentsPerformanceBarChart";
import CountryWiseStudentsBarChart from "./Charts/CountryWiseStudentsBarChart";
import GenderProportionPieChart from './Charts/GenderProportionPieChart'
import ScholarshipProportionPieChart from './Charts/ScholarshipProportionPieChart'

const Students = () => {
    return (
        <div className="students-main">
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
                    <div className="col-3">
                        {/* // Finance Card  */}

                        <div className="finance-card total-students-card primary-card-rounded">
                            <div className="d-flex justify-content-between">
                                <svg id="Component_17_1" data-name="Component 17 – 1" xmlns="http://www.w3.org/2000/svg" width="80.273" height="76.155" viewBox="0 0 60.273 76.155">
                                <path id="Path_583" data-name="Path 583" d="M105.508,49.753l-4.469-1.312L91.314,42.09V40.634a12.943,12.943,0,0,0,5.108-9.09,2.972,2.972,0,0,0,2.494-2.929v-4c0-.015,0-.031,0-.046V19.5a2.2,2.2,0,0,0,.92-1.795V13.064l6.711-1.143a2.379,2.379,0,0,0,.322-4.612L84.243.112a2.367,2.367,0,0,0-1.442,0l-22.623,7.2a2.387,2.387,0,0,0-.741,4.153v6.067h-.055a2.313,2.313,0,0,0-2.31,2.31V22.85L55.579,31.6a2.483,2.483,0,0,0,2.448,2.9h5.05a2.483,2.483,0,0,0,2.448-2.9L64.033,22.85V19.838a2.313,2.313,0,0,0-2.31-2.31h-.055V12.119l5.547.945V17.7a2.2,2.2,0,0,0,.915,1.791l0,5.119v4a2.971,2.971,0,0,0,2.494,2.929,12.943,12.943,0,0,0,5.1,9.087v1.462l-9.722,6.35-4.466,1.311a11.344,11.344,0,0,0-8.153,10.89v3.325a1.116,1.116,0,1,0,2.231,0V60.644a9.168,9.168,0,0,1,6.551-8.749l4.161-1.221,16.624,9.878a1.129,1.129,0,0,0,1.14,0l16.625-9.879,4.161,1.221a9.168,9.168,0,0,1,6.55,8.749V71.418a2.509,2.509,0,0,1-2.506,2.506h-4.917V69.116a1.116,1.116,0,0,0-2.231,0v4.808H65.267V69.116a1.116,1.116,0,1,0-2.231,0v4.808H58.124a2.509,2.509,0,0,1-2.506-2.506V69.183a1.116,1.116,0,1,0-2.231,0v2.234a4.743,4.743,0,0,0,4.737,4.737h50.8a4.743,4.743,0,0,0,4.737-4.737V60.643a11.344,11.344,0,0,0-8.152-10.89ZM63.076,32.272H58.027a.251.251,0,0,1-.249-.294l1.349-7.918h2.848l1.349,7.918A.251.251,0,0,1,63.076,32.272ZM61.8,19.838v1.99H59.3v-1.99a.079.079,0,0,1,.079-.079h2.341A.079.079,0,0,1,61.8,19.838ZM79.534,55.505l.444.682L68.589,49.421,75.818,44.7A23.433,23.433,0,0,0,79.534,55.505Zm-.008-4.815a28.685,28.685,0,0,0,7.995,0,21.3,21.3,0,0,1-1.878,3.6l-2.12,3.258L81.4,54.289a21.306,21.306,0,0,1-1.878-3.6Zm7.987,4.815A23.431,23.431,0,0,0,91.229,44.7l7.229,4.722L87.069,56.188Zm6.525-35.592h2.644V23.5H95.371a1.333,1.333,0,0,1-1.332-1.332V19.913ZM60.853,9.434l22.624-7.2a.147.147,0,0,1,.09,0l22.623,7.2a.125.125,0,0,1,.1.151c-.008.116-.074.127-.123.136l-7.48,1.274-2.808-.347a1.116,1.116,0,0,0-.274,2.214l1.995.247v4.573H69.445V13.108L80.989,11.68a20.664,20.664,0,0,1,5.066,0l4.369.54a1.116,1.116,0,0,0,.274-2.214l-4.369-.54a22.885,22.885,0,0,0-5.614,0L68.355,11,60.873,9.721c-.048-.008-.115-.019-.123-.136A.125.125,0,0,1,60.853,9.434ZM70.362,23.5V19.913h2.648v2.253A1.333,1.333,0,0,1,71.677,23.5H70.362Zm2.455,7.473a1.729,1.729,0,0,0-1.719-1.62.737.737,0,0,1-.736-.736V25.728h1.315a3.567,3.567,0,0,0,3.563-3.563V19.913H91.808v2.253a3.567,3.567,0,0,0,3.563,3.563h1.315v2.886a.737.737,0,0,1-.736.736,1.729,1.729,0,0,0-1.719,1.62,10.728,10.728,0,0,1-21.413,0ZM83.524,43.247a12.876,12.876,0,0,0,5.56-1.26v.707a21.261,21.261,0,0,1-.753,5.6,26.341,26.341,0,0,1-9.614,0,21.257,21.257,0,0,1-.753-5.6c0-.024,0-.047,0-.07,0,0,0-.009,0-.014v-.625A12.877,12.877,0,0,0,83.524,43.247Z" transform="translate(-53.387 0)" fill="#2f2f75"/>
                                </svg>
                                <div className="text-end">
                                    <p className="f-12">Total</p>
                                    <h4 className="f-22 fw-700 total-students-text pb-2 pt-2">2,582</h4>
                                    <p className="f-10 rate-text">
                                        <span className="me-1">
                                            <img
                                                src={Rate}
                                                alt=""
                                                className="me-1"
                                            />
                                            20%
                                        </span>
                                        Since last month
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        {/* // Finance Card  */}
                        <div className="finance-card total-students-card primary-card-rounded">
                            <div className="d-flex justify-content-between">
                                <h6 fw-600>Graduation Rate</h6>
                                <div className="text-end">
                                    <h4 className="f-22 fw-700 total-students-text">80%</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        {/* // Finance Card  */}
                        <div className="finance-card total-students-card primary-card-rounded">
                            <div className="d-flex justify-content-between">
                                <h6 fw-600>Exam Centers</h6>
                                <div className="text-end">
                                    <h4 className="f-22 fw-700 total-students-text">20</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        {/* // Finance Card  */}
                        <div className="finance-card total-students-card primary-card-rounded">
                            <div className="d-flex justify-content-between">
                                <h6 fw-600>Teachers to Students Ratio</h6>
                                <div className="text-end">
                                    <h4 className="f-22 fw-700 total-students-text">1:2</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-8">
                        <StudentsPerformanceBarChart/>
                    </div>
                    <div className="col-4">
                        <div className="primary-card-rounded students-count-card mt-4" >
                            <h6 className="f-16 fw-600 h6-heading">Students Count</h6>
                            <div className="table-wrapper students-table-wrapper">
                                <table className="students-count-table">
                                    <tbody>
                                        <tr>
                                            <td>English</td>
                                            <td>1000</td>
                                        </tr>
                                        <tr>
                                            <td >French</td>
                                            <td>200</td>
                                        </tr>
                                        <tr>
                                            <td>Urdu</td>
                                            <td>300</td>
                                        </tr>
                                        <tr>
                                            <td>Arabic</td>
                                            <td>150</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-8">
                        <CountryWiseStudentsBarChart />
                    </div>
                    <div className="col-4">
                        <GenderProportionPieChart />
                        <ScholarshipProportionPieChart />
                    </div>
                </div>
            </div>
        </div>
  )
};

export default Students
