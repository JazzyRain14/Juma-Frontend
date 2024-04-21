import React from 'react'
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);
const HorizontalBarChat = () => {
    const data = {
        labels: ['Snacks', 'Sweet', 'Ethnic', 'Alcohol', 'Soft Drinks', 'Deserts', 'Sauces'],
        datasets: [
            {
                label: 'Total Sales By Category',
                data: [1000, 300, 800, 100, 2000, 3100, 200],
                backgroundColor: ['#3a0e0e', 'red', 'blue', 'indigo', 'yellow', '#6d4c41', 'black'],

            }
        ]
    }
    const options = {
        indexAxis: 'y',
        layout: {
            padding: 80
        }
    }
    return (
        <>
            <Bar data={data} options={options}>

            </Bar>
        </>
    )
}

export default HorizontalBarChat