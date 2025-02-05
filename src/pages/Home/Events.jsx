import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { Text } from "../../components";
import "./style.css";

export default function Events() {
  const events = [
    {
      date: "2025-08-22",
      heading: "NESA ECONOMIC DISCOURSE 8.0",
      details: "NED",
      location: "Unilag Main Auditorium",
      time: "8:00AM",
      image: "/images/Events/ned.png", // Replace with actual image URL
    },
    {
      date: "2025-09-10",
      heading: "NESA CAREER FAIR 2025",
      details: "Career Fair",
      location: "Unilag Multipurpose Hall",
      time: "10:00AM",
      image: "/images/Events/somelogo.png", // Replace with actual image URL
    },
  ];

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
                {event.date.split("-")[2]}
              </div>
              <div className="text-black text-2xl font-medium mt-2">
                {new Date(event.date).toLocaleString("default", { month: "short" })}
              </div>
            </div>
          </div>

          {/* Event Image */}
          <div
            className="w-[300px] h-[225px] bg-cover bg-center mt-4 md:mt-0"
            style={{ backgroundImage: `url(${event.image})` }}
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

            <Link to="/*">
              <button className="w-[146px] h-12 bg-[#03045e] text-white font-semibold rounded-full">
                Get Ticket
              </button>
            </Link>



            <Link to="/*">
            <button className="w-[146px] h-12 border border-black text-black font-normal rounded-full">
                View Details
              </button>
            </Link>


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
        <Link to="/events">
        <Text className="text-xl text-[#d97213] font-normal">View all</Text>
        <img
          className="w-[7.59px] h-[13.06px]"
          alt="Vector"
          src="https://c.animaapp.com/WzNSGM6X/img/vector-118.svg"
        />
        </Link>
      </div>
    </div>
  );
}
