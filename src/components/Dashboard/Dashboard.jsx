import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    const marksArray = [
        {
            "id": 1,
            "name": "Alice",
            "physics": 75,
            "chemistry": 82,
            "math": 90
        },
        {
            "id": 2,
            "name": "Bob",
            "physics": 80,
            "chemistry": 78,
            "math": 85
        },
        {
            "id": 3,
            "name": "Charlie",
            "physics": 95,
            "chemistry": 90,
            "math": 92
        },
        {
            "id": 4,
            "name": "Dave",
            "physics": 70,
            "chemistry": 85,
            "math": 80
        },
        {
            "id": 5,
            "name": "Eve",
            "physics": 88,
            "chemistry": 95,
            "math": 89
        },
        {
            "id": 6,
            "name": "Frank",
            "physics": 82,
            "chemistry": 86,
            "math": 88
        },
        {
            "id": 7,
            "name": "Grace",
            "physics": 90,
            "chemistry": 92,
            "math": 95
        },
        {
            "id": 8,
            "name": "Harry",
            "physics": 75,
            "chemistry": 70,
            "math": 78
        },
        {
            "id": 9,
            "name": "Ivy",
            "physics": 92,
            "chemistry": 88,
            "math": 90
        },
        {
            "id": 10,
            "name": "Jack",
            "physics": 80,
            "chemistry": 85,
            "math": 82
        },
        {
            "id": 11,
            "name": "Kate",
            "physics": 85,
            "chemistry": 90,
            "math": 92
        },
        {
            "id": 12,
            "name": "Liam",
            "physics": 78,
            "chemistry": 80,
            "math": 75
        }
    ]


    return (
        <div className=''>
            <LineChart
                width={1000}
                height={300}
                data={marksArray}
            >

                <Line dataKey="physics" stroke="red"></Line>
                <Line dataKey="math" stroke="#8884d8"></Line>
                <Line dataKey="chemistry" stroke="green"></Line>
                
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;