import React, { useState, useEffect } from 'react';

export const Review = () => {
    const [review, setReview] = useState([]); // Initialize state to hold review data

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/journal/<int:pk>/');
                if (!response.ok) {
                    throw new Error('Failed to fetch Review content');
                }
                const data = await response.json();
                console.log(data);
                setReview(data);
            } catch (error) {
                console.error('Failed to fetch review entries:', error);
            }
        };
        fetchReview();
    }, []);

    return (
        <div>
            <h2>Review Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Aim</th>
                        <th>Objective</th>
                        <th>Methodology</th>
                    </tr>
                </thead>
                <tbody>
                    {review.map(entry => (
                        <tr key={entry.id}>
                            <td>{entry.fname} {entry.lname}</td>
                            <td>{entry.aim}</td>
                            <td>{entry.objective}</td>
                            <td>{entry.methodology}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Review;
