import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"
import './Review.css'

export const Review = () => {
    const [review, setReview] = useState([]); // Initialize state to hold review data
    const {id} = useParams()
    useEffect(() => {
        const fetchReview = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/journal/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch Review content');
                }
                const data = await response.json();
                setReview(data);
            } catch (error) {
                console.error('Failed to fetch review entries:', error);
            }
        };
        fetchReview();
    }, [id]);

    return (
        <div>
            <h2 className='reviews'>Review Details</h2>
            <table className='review-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Aim</th>
                        <th>Objective</th>
                        <th>Methodology</th>
                    </tr>
                </thead>
                <tbody>
                    
                        <tr >
                            <td>{review?.fname} {review?.lname}</td>
                            <td>{review?.aim}</td>
                            <td>{review?.objective}</td>
                            <td>{review?.methodology}</td>
                        </tr>
               
                </tbody>
            </table>
        </div>
    );
}

export default Review;