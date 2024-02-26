import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import axios from "axios";

const GetItineraryForm = () => {
    const [place, setPlace] = useState("");
    const [days, setDays] = useState("");
    const [companions, setCompanions] = useState([]);
    const [interests, setInterests] = useState([]);
    const [itinerary, setItinerary] = useState(null);
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const baseUrl = process.env.REACT_APP_API;
    const url = `${baseUrl}/api/v1/itinerary/get-itinerary`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(url, {
                place,
                days,
                companions,
                interests,
            });
            if (res && res.data.success) {
                toast.success(res.data.message);
                setItinerary(res.data.itinerary);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <>
            <div className="form-container ">
                <form onSubmit={handleSubmit}>
                    <h4 className="title">Get itinerary</h4>

                    <div className="mb-3">
                        <input
                            type="text"
                            value={place}
                            onChange={(e) => setPlace(e.target.value)}
                            className="form-control"
                            placeholder="Enter Place"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            className="form-control"
                            placeholder="Enter Number of Days"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Choose Companions:</label>
                        <select
                            multiple
                            value={companions}
                            onChange={(e) => setCompanions(Array.from(e.target.selectedOptions, (option) => option.value))}
                            className="form-control"
                            required
                        >
                            <option value="solo">Solo</option>
                            <option value="partner">Partner</option>
                            <option value="friends">Friends</option>
                            <option value="family">Family</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label>Choose Interests:</label>
                        <select
                            multiple
                            value={interests}
                            onChange={(e) => setInterests(Array.from(e.target.selectedOptions, (option) => option.value))}
                            className="form-control"
                            required
                        >
                            <option value="hiking">Hiking</option>
                            <option value="sightseeing">Sightseeing</option>
                            <option value="beach">Beach</option>
                            <option value="cultural">Cultural</option>
                            <option value="adventure">Adventure</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">SUBMIT</button>
                    </div>
                </form>
            </div>
            {itinerary && (
        <div className="itinerary-container">
          <h2>{itinerary.trip.heading}</h2>
          <h3>Places to Stay:</h3>
          <ul>
            {itinerary.placesToStay.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
          {itinerary.days.map((day) => (
            <div key={day.dayNumber}>
              <h3>Day {day.dayNumber}</h3>
              <p>{day.description}</p>
              <ul>
                {day.activities.map((activity, index) => (
                  <li key={index}>
                    <h4>{activity.name}</h4>
                    <p>{activity.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
            
            
        </>
    );
};

export default GetItineraryForm;
