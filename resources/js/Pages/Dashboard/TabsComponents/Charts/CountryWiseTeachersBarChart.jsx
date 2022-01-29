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

const CountryWiseTeachersBarChart = () => {
    // Temporary data array
    const data = [
        {
            name: "UK",
            uv: 503,
        },
        {
            name: "UK",
            uv: 763,
        },
        {
            name: "USA",
            uv: 1000,
        },
        {
            name: "Pakistan",
            uv: 483,
        },
        {
            name: "UK",
            uv: 872,
        },
        {
            name: "Malaysia",
            uv: 129,
        },
        {
            name: "USA",
            uv: 430,
        },
        {
            name: "UK",
            uv: 876,
        },
        {
            name: "Malaysia",
            uv: 100,
        },
    ];

    return (
        <div className="revenue-bar-chart-wrapper mt-4">
            <div className="primary-card-rounded">
                <div className="d-flex justify-content-between">
                    <h2 className="f-16 fw-600 mb-18">
                        Country wise Teachers
                    </h2>

                    <u className="color-secondary f-12 cursor-pointer">
                        <InertiaLink href={"/dashboard/all-countries"}>
                            View all
                        </InertiaLink>
                    </u>
                </div>
                <div style={{ width: "100%", height: 450 }}>
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
                                fontSize={10}
                            />
                            <Tooltip />
                            <Bar dataKey="uv" fill="#089752" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default CountryWiseTeachersBarChart
