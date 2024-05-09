import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Djournal.css';
import logo from './log.jpeg'
import './Nav.css'

function Djournal() {
    const [searchQuery, setSearchQuery] = useState('');
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

    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
      }
    
      const filteredJournal = journalEntries.filter((journalEntries1) =>
        journalEntries1.title.toLowerCase().includes(searchQuery.toLowerCase())
      )

    return (
        <div>
            <div className='header'>
                <div className='left'>
                    <div className='logo'>
                        <a href='/'><img className='logo-img' src={logo} alt='au logo'/></a>
                    </div>

                    <div className='text'>
                        <h3 className='literature'>
                        Repository
                        </h3>
                    </div>
                </div>


                <div className='right'>
                    <ul id="list" className="nav-option">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/dashboard">Home</a>
                        </li>
                        <li className="nav-item">
                        <Link id="upload" className="nav-link" to="/upload">Upload</Link>
                        </li>
                        <li>
                        <input id='search' className='search' type="search" placeholder="Enter the name of journal"
                        value={searchQuery}
                        onChange={handleSearch}/>
                        </li>
                        <li  className="nav-item">
                        <a id="journal" className="nav-link" href="#journal">Journal</a>
                        </li>
                    </ul>
                </div>

                <div className='btn-div'>
                    <Link to="/">
                        <button id='btn' className='btn btn-primary'>logout</button>
                    </Link>
                </div>
            </div>
            <div className='available-cont' id='journal'>
                <h3 className="available">Available Journals</h3>
                <div className='grids'>
                    {filteredJournal.map(entry => (
                        <div className='flexx' key={entry.id}>
                            <div className='inner-grid'>
                                <img className='file' src={entry.image} alt="file" />
                            </div>
                            <div className='gridd'>
                                <div>
                                    <h4 className='name'>{entry.title}</h4>
                                    <h5 className='author'>{entry.fname} {entry.lname}</h5>
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
        </div>
    );
}

export default Djournal;