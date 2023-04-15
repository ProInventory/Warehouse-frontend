import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

let currentDay = new Date();
currentDay.setDate(currentDay.getDate() - 9);

function getNextDay(date = currentDay) {
    const next = new Date(date.getTime());
    next.setDate(date.getDate() + 1);

    currentDay = next;

    return next;
}

function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
}

function formatDate(date) {
    return [padTo2Digits(date.getDate())].join("-");
}

const labels = [
    formatDate(currentDay),
    formatDate(getNextDay()),
    formatDate(getNextDay()),
    formatDate(getNextDay()),
    formatDate(getNextDay()),
    formatDate(getNextDay()),
    formatDate(getNextDay()),
    formatDate(getNextDay()),
    formatDate(getNextDay()),
    formatDate(getNextDay()),
];

const options = {
    scales: {
        y: {
            title: {
                display: true,
                text: "LKR",
                font: {
                    family: 'Rubik',
                    size: 15,
                    weight: "bold",
                },
            },
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
    },
};

const data = {
    labels,
    datasets: [
        {
            label: "Earnings",
            data: [10, 60, 20, 80, 30, 90, 40, 100, 50, 110],
            backgroundColor: "rgba(140, 140, 140, 0.8)",
        },
    ],
};

const Graph = () => {
    return (
        <React.Fragment>
            <Bar options={options} data={data} />
        </React.Fragment>
    );
};

export default Graph;
