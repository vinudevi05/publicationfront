import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function AddUsers() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    publication: "",
    doi: "",
    title: "",
    journal: "",
    pubid: "",
    date:"",
    contribution: "",
    reach: "",
    editionno: "",
    volnum:"",
    pfrom:"",
    pto:"",
    isbn:"",
    issn:"",
    indexing:"",
    issuenum:"",
    impactfactor:"",
    
    coAuthors: [] 
  });

  const { publication,impactfactor,date,issuenum,indexing,issn,isbn,pfrom,pto, doi, title,coAuthors, journal, pubid, contribution, reach, editionno, volnum } = user;
  const [othersSearch, setOthersSearch] = useState('');

  const [facultySearch, setFacultySearch] = useState("");
  const [facultyList, setFacultyList] = useState([]);
  const [othersSearchState, setOthersSearchState] = useState(''); // Mocked faculty list

  // Mocking a faculty list for search results
  const mockFacultyList = [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Davis",
    "Sona Patel"
  ];
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

  };
 
  const onOthersSearchChange = (e) => {
    setOthersSearch(e.target.value);
  };
  

  const onFacultySearchChange = (e) => {
    setFacultySearch(e.target.value);
    // Filter the mock faculty list based on the search input
    const filteredList = mockFacultyList.filter((name) =>
      name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFacultyList(filteredList);
  };

  const addCoAuthor = (name) => {
    if (!coAuthors.includes(name)) {
      setUser({ ...user, coAuthors: [...coAuthors, name] });
    }
  };
  
 
  
  

  const onSubmit = async (e) => {
    e.preventDefault();
   
    
  console.log('User data before sending:', user);
  console.log(user);
  
    
    try {
      //user.date = new Date(user.date).toISOString().slice(1,10);
      await axios.post("http://localhost:8080/user", user);
      navigate("/home");
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error Response:', error.response.data);
        console.error('Status Code:', error.response.status);
        console.error('Headers:', error.response.headers);
    } else if (error.request) {
        // Request was made but no response received
        console.error('Error Request:', error.request);
    } else {
        // Something else happened
        console.error('Error Message:', error.message);
    }
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 border rounded p-4 mt-2">
          <div className="box">
            <h2 className="text-center m-4">Publication</h2>
            <form onSubmit={onSubmit}>
              <div className="form-row">
                {/* Publication Type Dropdown */}
                <div className="form-group col-md-4">
                  <label htmlFor="publication" className="form-label">
                    Publication Type
                  </label>
                  <select
                    id="publication"
                    className="form-control"
                    name="publication"
                    value={publication}
                    onChange={onInputChange}
                  >
                    <option value="">Select a publication type</option>
                    <option value="journal">Journal</option>
                    <option value="conference">Conference</option>
                    <option value="book">Book</option>
                  </select>
                </div>

                {/* DOI/URL Input */}
                <div className="form-group col-md-8">
                  <label htmlFor="doi" className="form-label">
                    DOI/URL
                  </label>
                  <input
                    type="text"
                    id="doi"
                    className="form-control"
                    placeholder="http://"
                    name="doi"
                    value={doi}
                    onChange={onInputChange}
                  />
                </div>

                {/* Title Input */}
                <div className="form-group col-md-12">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control"
                    placeholder="Paper Title"
                    name="title"
                    value={title}
                    onChange={onInputChange}
                  />
                </div>

                {/* Journal Name Input */}
                <div className="form-group col-md-12">
                  <label htmlFor="journal" className="form-label">
                    Journal Name
                  </label>
                  <input
                    type="text"
                    id="journal"
                    className="form-control"
                    placeholder="Publication/Journal Name"
                    name="journal"
                    value={journal}
                    onChange={onInputChange}
                  />
                </div>

                {/* Publisher Id Input */}
                <div className="form-group col-md-5">
                  <label htmlFor="pubid" className="form-label">
                    Publisher Id
                  </label>
                  <input
                    type="text"
                    id="pubid"
                    className="form-control"
                    placeholder="Publisher Id"
                    name="pubid"
                    value={pubid}
                    onChange={onInputChange}
                  />
                </div>

                {/* Contribution Type Dropdown */}
                <div className="form-group col-md-4">
                  <label htmlFor="contribution" className="form-label">
                    Contribution Id
                  </label>
                  <select
                    id="contribution"
                    className="form-control"
                    name="contribution"
                    value={contribution}
                    onChange={onInputChange}
                  >
                    <option value="">Select a contribution type</option>
                    <option value="First Author">First Author</option>
                    <option value="Second Author">Second Author</option>
                    <option value="Other">Other</option>
                    <option value="Supervisor">Supervisor</option>
                  </select>
                </div>

                {/* Reach Type Dropdown */}
                <div className="form-group col-md-3">
                  <label htmlFor="reach" className="form-label">
                    Reach
                  </label>
                  <select
                    id="reach"
                    className="form-control"
                    name="reach"
                    value={reach}
                    onChange={onInputChange}
                  >
                    <option value="">Select a reach type</option>
                    <option value="international">International</option>
                    <option value="national">National</option>
                    <option value="regional">Regional</option>
                    <option value="institutional">Institutional</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="volnum" className="form-label">
                    Volume Number
                  </label>
                  <input
                    type="text"
                    id="volnum"
                    className="form-control"
                    placeholder="Volume Number"
                    name="volnum"
                    value={volnum}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="date" className="form-label">
                    Volume Number
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="form-control"
                    name="date"
                    value={date}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="pfrom" className="form-label">
                    Page From
                  </label>
                  <input
                    type="text"
                    id="pfrom"
                    className="form-control"
                    placeholder="From page"
                    name="pfrom"
                    value={pfrom}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="pto" className="form-label">
                    Page To
                  </label>
                  <input
                    type="text"
                    id="pto"
                    className="form-control"
                    placeholder="From to"
                    name="pto"
                    value={pto}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="issn" className="form-label">
                    ISSN
                  </label>
                  <input
                    type="text"
                    id="issn"
                    className="form-control"
                    placeholder="ISSN"
                    name="issn"
                    value={issn}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="isbn" className="form-label">
                    ISBN
                  </label>
                  <input
                    type="text"
                    id="isbn"
                    className="form-control"
                    placeholder="ISBN"
                    name="isbn"
                    value={isbn}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="indexing" className="form-label">
                    Indexing
                  </label>
                  <select
                    id="indexing"
                    className="form-control"
                    name="indexing"
                    value={indexing}
                    onChange={onInputChange}
                  >
                    <option value="">Select a indexing type</option>
                    <option value="sci">SCI</option>
                    <option value="scopus">SCOPUS</option>
                    <option value="ugc">UGC</option>
                    <option value="webofscience">Web ofScience</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="issuenum" className="form-label">
                    Issue Number
                  </label>
                  <input
                    type="text"
                    id="issuenum"
                    className="form-control"
                    placeholder="Issue Number"
                    name="issuenum"
                    value={issuenum}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="impactfactor" className="form-label">
                    Impact Factor
                  </label>
                  <input
                    type="text"
                    id="impactfactor"
                    className="form-control"
                    placeholder="Impact Factorr"
                    name="impactfactor"
                    value={impactfactor}
                    onChange={onInputChange}
                  />
                </div>


                {/* Username Input */}
                <div className="form-group col-md-6">
                  <label htmlFor="editionno" className="form-label">
                    Edition number
                  </label>
                  <input
                    type="text"
                    id="editionno"
                    className="form-control"
                    placeholder="Enter Endition no"
                    name="editionno"
                    value={editionno}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group col-md-6 mt-3">
                  <label className="form-label">Co-Authors from Sona</label>
                  <ul className="list-group">
                    {coAuthors.map((coAuthor, index) => (
                      <li key={index} className="list-group-item">
                        {coAuthor}
                      </li>
                    ))}
                  </ul>
                </div>

                
                {/* Search Faculty Input */}
                <div className="form-group col-md-4 mt-3">
                  <label htmlFor="facultySearch" className="form-label">
                    Search Faculty Name
                  </label>
                  <input
                    type="text"
                    id="facultySearch"
                    className="form-control"
                    placeholder="Enter faculty name"
                    value={facultySearch}
                    onChange={onFacultySearchChange}
                  />
                </div>

                {/* Add Co-Author Button */}
                <div className="form-group col-md-2 mt-3">
                  <label className="form-label">&nbsp;</label>
                  <button
                    type="button"
                    className="btn btn-outline-primary w-100"
                    onClick={() => addCoAuthor(facultySearch)}
                  >
                    Add Co-Author
                  </button>
                </div>

                {/* Co-Authors List */}
                
              </div>
              <div className="row">
<div className="col-md-6"></div>
              <div className="form-group col-md-4 mt-3 ml-12">
  <label htmlFor="othersSearch" className="form-label">
    Search Faculty Name from Others
  </label>
  <input
    type="text"
    id="othersSearch"
    className="form-control"
    placeholder="Enter other faculty name"
    value={othersSearch}
    onChange={onOthersSearchChange}
  />
</div>

{/* Add Co-Author Button for Others */}
<div className="form-group col-md-2 mt-3">
  <label className="form-label">&nbsp;</label>
  <button
    type="button"
    className="btn btn-outline-secondary w-100"
    onClick={() => addCoAuthor(othersSearch)}
    
  >
    Add Co-Author
  </button>
  </div>
</div>

              <button type="submit" className="btn btn-outline-primary mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
