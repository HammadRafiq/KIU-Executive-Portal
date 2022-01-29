import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { Select } from "antd";
const { Option } = Select;

const AdmissionsGraph = () => {
    // temporary data array
    const data = [
        {
            name: "2015",
            uv: 300,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "2016",
            uv: 270,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "2017",
            uv: 790,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "2018",
            uv: 650,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "2019",
            uv: 830,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "2020",
            uv: 450,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "2021",
            uv: 500,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="cashflow-chart-card primary-card-rounded admissions-chart-card">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="f-16 fw-600 m-0" className="h6-heading">Admissions</h6>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="m-0 f-14 me-2 text-dark">Last:</p>
                    <Select defaultValue="8 Years" className="select-secondary">
                        <Option value="7">7 Years</Option>
                        <Option value="5">5 Years</Option>
                    </Select>
                </div>
            </div>
            {/* 
                    //Pie Chart 
            */}
            <div style={{ width: "100%", height: 400 }}>
                <ResponsiveContainer>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid
                            vertical={false}
                            stroke="#EEEEEE"
                            strokeWidth={1}
                        />
                        <XAxis
                            fontSize={10}
                            fontWeight={300}
                            dataKey="name"
                            strokeWidth={1}
                        />
                        <YAxis fontSize={10} fontWeight={300} strokeWidth={1} />
                        <Tooltip />

                        <Line
                            dot={false}
                            activeDot={{
                                r: 5,
                                fill: "#ffffff",
                                stroke: "#089752",
                                strokeWidth: 1,
                            }}
                            type="linear"
                            dataKey="uv"
                            stroke="#089752"
                        />
                    </LineChart>
                </ResponsiveContainer>
                
                <div className="d-flex justify-content-center pt-2">
                    <div className="d-flex align-items-center">
                        <div className="green-circle rounded-circle"></div>
                        <span className="f-color-grey ms-1 f-12">
                            Cash Inflow
                        </span>
                    </div>
                    <div className="d-flex align-items-center ms-4">
                        <div className="blue-circle rounded-circle"></div>
                        <span className="f-color-grey ms-1 f-12">
                            Cash Outflow
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionsGraph
