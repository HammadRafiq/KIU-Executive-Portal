import React from "react";
import {
    BarChart,
    Bar,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Cell,
    Tooltip,
} from "recharts";

const AgeGroupBarChart = () => {
    // temporary data array
    const data = [
        {
            name: "25-30",
            uv: 4000,
            pv: 3000,
        },
        {
            name: "31-40",
            uv: 3000,
            pv: 1000,
        },
        {
            name: "41-50",
            uv: 2000,
            pv: 3230,
        },
        {
            name: "51-60",
            uv: 2780,
            pv: 3800,
        },
    ];

    const colors = ["#36AA72", "#5F3379", "#343379", "#1F6166"];

    return (
        <div className="colleges-cashflow-card primary-card-rounded mt-4 agegroup-card">
            <div className="d-flex justify-content-between mb-18">
                <h6 className="f-16 fw-600">Age Group</h6>
            </div>
            {/* 
                    // Bar Chart 
            */}
            <div style={{ width: "100%", height: 450 }}>
                <ResponsiveContainer>
                    <BarChart data={data} barGap={0}>
                        <XAxis
                            fontSize={10}
                            fontWeight={300}
                            dataKey="name"
                            strokeWidth={1}
                        />
                        <YAxis fontSize={10} fontWeight={300} strokeWidth={1} />
                        <Tooltip />
                        <Bar barSize={20} dataKey="pv" fill="#343379" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AgeGroupBarChart
