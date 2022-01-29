import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const StudentsPerformanceBarChart = () => {

    const barColors = ["#36AA72", "#5F3379", "#343379", "#1F6166"]

    // Temporary data array
    const data = [
        {
            name: "English",
            uv: 503,
        },
        {
            name: "French",
            uv: 763,
        },
        {
            name: "Urdu",
            uv: 1000,
        },
        {
            name: "Arabic",
            uv: 483,
        }
    ]

    return (
        <div className="students-performance-wrapper">
            <div className="primary-card-rounded students-performance-card mt-4">
                <div className="d-flex justify-content-between">
                    <h2 className="f-16 fw-600 mb-18">
                        Students Performance
                    </h2>
                </div>
                <div style={{ width: "100%", height: 262 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            layout="vertical"
                            barSize={17}
                            barCategoryGap={32}
                        >
                            <XAxis fontSize={10} type="number" />
                            <YAxis
                                dataKey="name"
                                type="category"
                                fontSize={14}
                            />
                            <Tooltip />
                            <Bar dataKey="uv" fill="#089752">
                                {
                                    data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
                                    ))
                                }
                            </Bar>
                            
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default StudentsPerformanceBarChart;
