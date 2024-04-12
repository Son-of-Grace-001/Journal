import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './djournal.css';

function Djournal() {
    const [journalEntries, setJournalEntries] = useState([]);
    
    useEffect(() => {
        const fetchJournalEntries = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/journal');
                if (!response.ok) {
                    throw new Error('Failed to fetch journal entries');
                }
                const data = await response.json();
                setJournalEntries(data);
            } catch (error) {
                console.error('Failed to fetch journal entries:', error);
            }
        };

        fetchJournalEntries();
    }, []);

    return (
        <div className='available-cont'>
            <h3 className="available">Available Journals</h3>
            <div className='grids'>
                {journalEntries.map(entry => (
                    <div className='flexx' key={entry.id}>
                        <div className='inner-grid'>
                            <img className='file' src={entry.image} alt="file" />
                        </div>
                        <div className='gridd'>
                            <div>
                                <h5 className='name'>{entry.title}</h5>
                                <h6 className='author'>{entry.fname} {entry.lname}</h6>
                                <p  style={{fontSize:'12px'}}> {entry.created_at} </p>
                            </div>
                            <div className='bottom'>
                                <div>
                                    <Link to={`/review/${entry.id}/`}>
                                        <button id='bttn' className='btn btn-success'>Review</button>
                                    </Link>
                                </div>
                                <div>
                                    <a href={entry.folder} download target="blank">
                                        <button id="bttns" className='btn btn-primary'>Download</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Djournal;
