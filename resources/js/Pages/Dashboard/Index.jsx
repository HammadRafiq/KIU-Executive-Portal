import React, { useEffect } from "react";
import Layout from "../../layout/Index";
import { Select } from "antd";
import Bars from "../../Assets/icons/bars.svg";
import Rate from "../../Assets/icons/Group 3112.svg";
import CashFlowGraph from "../../Components/Dashboard/CashFlowGraph";
import RevenueBarChart from "./../../Components/Dashboard/RevenueBarChart";
import CollegesBarChart from "../../Components/Dashboard/CollegesBarChart";
import FundPieChart from "../../Components/Dashboard/FundPieChart";
import SponsersCard from "../../Components/Dashboard/SponsersCard";
import Finance from "./TabsComponents/Finance";
import { useState} from "react";
import Admissions from "./TabsComponents/Admissions";
import Teachers from "./TabsComponents/Teachers";
import Students from "./TabsComponents/Students";

const { Option } = Select;

const Index = () => {

    const [tab, setTab] = useState("finance")

    const params = new URLSearchParams(window.location.search)

    useEffect(() => {
        for(var value of params.values()) {
            setTab(value)
          }
    }, [])
 
    return (
        <Layout currentPage={0}>
            {tab === "profile1"  ? <Profile/> :
            <div className="dashboard-wrapper">
                <div className="d-flex justify-content-start align-items-center">
                    <h6 className="fw-bold f-22 m-0">All Colleges</h6>
                </div>
                <div className="kiu-tabs mt-md-4 d-flex justify-content-start">
                    <div className={tab === "finance" ? "kiu-tabs-item active" : "kiu-tabs-item"} onClick={() => setTab("finance")}>
                        <svg className={tab === "finance" ? "active" : ""} id="finance" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.107" viewBox="0 0 14.105 14.107">
                        <path id="Path_619" data-name="Path 619" d="M379.8,8.3V0h-2.111V7.6a4.454,4.454,0,0,1,.863,1.524h2.838V8.3Z" transform="translate(-367.282)" fill="#089752"/>
                        <path id="Path_620" data-name="Path 620" d="M128.766,250.322a3.606,3.606,0,1,0,3.606,3.606A3.61,3.61,0,0,0,128.766,250.322Zm0,3.192a1.4,1.4,0,0,1,.413,2.727v.63h-.826v-.63a1.4,1.4,0,0,1-.982-1.332h.826a.569.569,0,1,0,.569-.569,1.4,1.4,0,0,1-.413-2.727v-.63h.826v.63a1.4,1.4,0,0,1,.982,1.332h-.826a.569.569,0,1,0-.569.569Z" transform="translate(-121.714 -243.426)" fill="#089752"/>
                        <path id="Path_621" data-name="Path 621" d="M3.75,200.927V198.8H1.639v2.825H.049v.826H2.887A4.453,4.453,0,0,1,3.75,200.927Z" transform="translate(-0.049 -193.323)" fill="#089752"/>
                        <path id="Path_622" data-name="Path 622" d="M273.16,66.267h-2.111V70.53a4.405,4.405,0,0,1,2.111.772Z" transform="translate(-263.583 -64.441)" fill="#089752"/>
                        <path id="Path_623" data-name="Path 623" d="M166.524,132.533h-2.111v3.21a4.405,4.405,0,0,1,2.111-.772Z" transform="translate(-159.885 -128.882)" fill="#089752"/>
                        </svg>
                        Finance
                    </div>
                    <div className={tab === "admissions" ? "kiu-tabs-item active" : "kiu-tabs-item"} onClick={() => setTab("admissions")}>
                        <svg className={tab === "admissions" ? "admissions-svg active" : "admissions-svg"} id="id-card_1_" data-name="id-card (1)" xmlns="http://www.w3.org/2000/svg" width="14.5" height="10.875" viewBox="0 0 14.5 10.875">
                        <path id="id-card_1_2" data-name="id-card (1)" d="M12.838,3H1.661A1.663,1.663,0,0,0,0,4.661v7.552a1.663,1.663,0,0,0,1.661,1.661H12.838A1.663,1.663,0,0,0,14.5,12.213V4.661A1.663,1.663,0,0,0,12.838,3ZM4.531,5.417a1.51,1.51,0,1,1-1.51,1.51A1.513,1.513,0,0,1,4.531,5.417ZM7.25,11.005a.453.453,0,0,1-.453.453H2.266a.453.453,0,0,1-.453-.453v-.3A1.663,1.663,0,0,1,3.474,9.042H5.588A1.663,1.663,0,0,1,7.25,10.7Zm4.984.453H8.911a.453.453,0,1,1,0-.906h3.323a.453.453,0,1,1,0,.906Zm0-2.417H8.911a.453.453,0,0,1,0-.906h3.323a.453.453,0,0,1,0,.906Zm0-2.417H8.911a.453.453,0,0,1,0-.906h3.323a.453.453,0,0,1,0,.906Z" transform="translate(0 -3)" fill="#898989"/>
                        </svg>
                        Admissions
                    </div>
                    <div className={tab === "teachers" ? "kiu-tabs-item active" : "kiu-tabs-item"} onClick={() => setTab("teachers")}>
                        <svg className={tab === "teachers" ? "active" : ""} id="mortarboard" xmlns="http://www.w3.org/2000/svg" width="13.723" height="12" viewBox="0 0 13.723 12">
                        <path id="Path_12" data-name="Path 12" d="M419.4,184.88v-4.268l-.8.268v4a1.265,1.265,0,0,0-.861,1.2v2.153a.4.4,0,0,0,.4.4h1.722a.4.4,0,0,0,.4-.4v-2.153A1.265,1.265,0,0,0,419.4,184.88Z" transform="translate(-406.538 -176.633)" fill="#898989"/>
                        <path id="Path_13" data-name="Path 13" d="M100.3,203.333l-3.9-1.3v2.738a.4.4,0,0,0,.118.284,5.883,5.883,0,0,0,8.32,0,.4.4,0,0,0,.118-.284v-2.738l-3.9,1.3A1.206,1.206,0,0,1,100.3,203.333Z" transform="translate(-93.816 -197.48)" fill="#898989"/>
                        <path id="Path_14" data-name="Path 14" d="M6.861,37.245a.4.4,0,0,0,.127-.021l6.459-2.153a.4.4,0,0,0,0-.763L6.988,32.156a.4.4,0,0,0-.254,0L.275,34.309a.4.4,0,0,0,0,.763l6.459,2.153a.4.4,0,0,0,.127.021Z" transform="translate(0 -32.135)" fill="#898989"/>
                        </svg>
                        Teachers
                    </div>
                    <div className={tab === "students" ? "kiu-tabs-item active" : "kiu-tabs-item"} onClick={() => setTab("students")}>
                        <svg className={tab === "students" ? "active" : ""} id="student-with-graduation-cap" xmlns="http://www.w3.org/2000/svg" width="12.027" height="14.343" viewBox="0 0 12.027 14.343">
                        <g id="Layer_2_9_">
                            <g id="Group_3105" data-name="Group 3105" transform="translate(0)">
                            <path id="Path_597" data-name="Path 597" d="M86.288,2.481c.138.078,1.07.528,1.521.745,0,.175.006.477.012.482.05.433.135.913.159,1.049-.041.023-.251.16-.251.588v.007c0,.011,0,.023,0,.034.091,1.189.564.677.661,1.2A2.589,2.589,0,0,0,89.8,8.294a1.988,1.988,0,0,0,1.717,0,2.589,2.589,0,0,0,1.407-1.709c.1-.521.571-.008.661-1.2,0-.012,0-.023,0-.034V5.346c0-.428-.21-.566-.251-.588.025-.136.11-.616.159-1.049.006-.005.01-.307.012-.482.247-.119.64-.309.966-.468v1.15a.3.3,0,0,0-.03.5s-.131.738-.174.954.748.173.713,0-.174-.954-.174-.954a.3.3,0,0,0-.03-.5v-1.3c.122-.06.212-.106.248-.127.1-.055.151-.126.14-.2.013-.076-.042-.159-.19-.231C93.912,1.533,91.214.213,90.948.086a.545.545,0,0,0-.587,0c-.267.127-2.964,1.447-4.022,1.965-.148.073-.2.155-.19.231C86.137,2.355,86.19,2.426,86.288,2.481Z" transform="translate(-84.641)" fill="#898989"/>
                            <path id="Path_598" data-name="Path 598" d="M47.057,295.429a13.267,13.267,0,0,1-1.513-.777.26.26,0,0,0-.366.114c-.41.687-1.171,2.685-1.7,2.722h-.02c-.531-.037-1.292-2.035-1.7-2.722a.26.26,0,0,0-.366-.114,13.266,13.266,0,0,1-1.513.777c-1.671.6-2.422,1.217-2.422,1.636v2.786H49.479v-2.786C49.479,296.646,48.728,296.032,47.057,295.429Z" transform="translate(-37.452 -285.508)" fill="#898989"/>
                            </g>
                        </g>
                        </svg>
                        Students
                    </div>

                </div>
                {tab === "finance" ?
                    <Finance /> :
                tab === "admissions" ?
                    <Admissions /> :
                tab === "teachers" ?
                    <Teachers /> :
                    <Students/>
                }

            </div>
            }
        </Layout>
    );
};

export default Index;
