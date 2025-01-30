import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch events from the backend
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://faculty-backend-55jd.onrender.com/UpcomingEvents");
        console.log(response.data);
        setEvents(response.data); // Assuming the response is an array of event objects
        setLoading(false);
      } catch (err) {
        console.error("Error fetching events:", err.message);
        setError("Failed to fetch events. Please try again later.");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="relative w-full h-auto bg-white py-10 px-4 md:px-20">
      {/* Header - Upcoming Events */}
      <div className="text-5xl font-medium text-black text-left mb-10 md:mb-0">
        Upcoming Events
      </div>

      {events.map((event, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center justify-between mb-16">
          {/* Date Card */}
          <div className="w-[120px] h-[120px] flex-shrink-0 bg-[#fffdfb] border border-solid border-[#03045e] flex items-center justify-center">
            <div>
              <div className="text-black text-5xl font-medium leading-none">
                {event.date?.split("-")[2]} {/* Assuming date format is YYYY-MM-DD */}
              </div>
              <div className="text-black text-2xl font-medium mt-2">
                {new Date(event.date).toLocaleString("default", { month: "short" })} {/* Converts month to short name */}
              </div>
            </div>
          </div>

          {/* Event Image */}
          <div
            className="w-[300px] h-[225px] bg-cover bg-center mt-4 md:mt-0"
            style={{ backgroundImage: `url(${event.image || "https://via.placeholder.com/300x225"})` }}
          />

          {/* Event Info */}
          <div className="flex-grow ml-6 md:ml-10">
          <div className="text-2xl text-black mb-2">{event.details}</div>
            <div className="text-[32px] font-medium text-black mb-2">{event.heading}</div>
            <div className="text-2xl text-black mb-2">{event.location}</div>
            <div className="text-2xl text-black">{event.time}</div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-4 mt-6 md:mt-0">
            <button className="w-[146px] h-12 bg-[#03045e] text-white font-semibold rounded-full">
              Get Ticket
            </button>
            <button className="w-[146px] h-12 border border-black text-black font-normal rounded-full">
              View Details
            </button>
          </div>
        </div>
      ))}

      {/* Decorative Line */}
      <img
        className="w-full max-w-[1160px] mx-auto h-px my-16 object-cover"
        alt="Vector"
        src="https://c.animaapp.com/WzNSGM6X/img/vector-33-1.svg"
      />

      {/* View All Section */}
      <div className="flex items-center justify-center space-x-4">
        <div className="text-xl text-[#d97213] font-normal">View all</div>
        <img
          className="w-[7.59px] h-[13.06px]"
          alt="Vector"
          src="https://c.animaapp.com/WzNSGM6X/img/vector-118.svg"
        />
      </div>
    </div>
  );
}
