import React, { useState, useEffect } from "react";
import highlight1 from "../../images/department-highlight-1.jpeg"
import highlight2 from "../../images/nesa-removebg-preview 2.png"
import { Component18 } from "../../components/Component18";
import { Link } from "react-router-dom"; // Import Link
import axios from "axios";
import "./style.css";

export default function Highlights() {
  const blogPosts = [
    {
      id: "8",
      dateCreated: "2025-02-05",
      title: "THE DOMINANCE OF CHINA'S ECONOMY IN ASIA",
      details: "NED",
      location: "Unilag Main Auditorium",
      time: "8:00AM",
      image: "/images/Events/ned.png", // Replace with actual image URL
    },
    {
      id: "7",
      dateCreated: "2025-01-30",
      title: "ECONOMIST OF THE WEEK: Tope Kolade Fasua",
      details: "NED",
      location: "Unilag Main Auditorium",
      time: "8:00AM",
      image: "/images/Events/ned.png", // Replace with actual image URL
    },
    
    {
      id: "4",
      dateCreated: "2025-01-20",
      title: "MEET THE BEST GRADUATING STUDENT",
      details: "NED",
      location: "Unilag Main Auditorium",
      time: "8:00AM",
      image: "/images/Events/ned.png", // Replace with actual image URL
    },
    {
      id: "3",
      dateCreated: "2024-10-22",
      title: "A New Dawn for NESA",
      details: "NED",
      location: "Unilag Main Auditorium",
      time: "8:00AM",
      image: "/images/Events/ned.png", // Replace with actual image URL
    },
    {
      id: "",
      dateCreated: "2024-10-22",
      title: "MEET OUR NEWLY SELECTED EXCOS",
      details: "NED",
      location: "Unilag Main Auditorium",
      time: "8:00AM",
      image: "/images/Events/ned.png", // Replace with actual image URL
    },
    {
      id: "1",
      dateCreated: "2024-09-10",
      title: "5 Essentials You Need When Resuming as a University Student",
      details: "Career Fair",
      location: "Unilag Multipurpose Hall",
      time: "10:00AM",
      image: "/images/Events/somelogo.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="w-full h-full bg-white py-10 px-4 md:px-20 overflow-hidden">
      {/* Department Highlights Header */}
      <div className="text-5xl font-medium text-black mb-10">Department Highlights</div>

      {/* Static Highlights Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Highlight Card 1 */}
        <div className="flex flex-col shadow-lg">
          <div className="h-[279px] bg-[#d9d9d9]" 
          style={{
            backgroundImage: `url(${highlight1})`, // Correct import used here
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          <div className="bg-[#fffdfb] p-6">
            <p className="text-2xl font-normal text-black mb-4">
            SCREAMS IN ACADEMIC DANGER 😭

            </p>
            <p>View more</p>
           
           
           <div className="flex flex-row justify-between">
           <a href="https://www.linkedin.com/in/samuel-aribigbola-ab6a01214/" target="_blank">
            
                Instagram


          </a>



          <a href="https://www.linkedin.com/in/samuel-aribigbola-ab6a01214/" target="_blank">
            
            X

          </a>



          <a href="https://www.linkedin.com/in/samuel-aribigbola-ab6a01214/" target="_blank">
            
            Tiktok

          </a>
           </div>



          </div>
        </div>

        {/* Highlight Card 2 */}
        <div className="flex flex-col shadow-lg">
        <div className="h-[279px] bg-[#d9d9d9]" 
          style={{
            backgroundImage: `url(${highlight2})`, // Correct import used here
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          <div className="bg-[#fffdfb] p-6">
            <p className="text-2xl font-normal text-black mb-4">
            NESA Mentorship Program
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeakZn7jO5YqLWlgddKMOule74U49LmdxeO28HOawMGrQbOmg/viewform"
              target="_blank"
            className="text-xl italic text-[#03045e]">Read More...</a>
          </div>
        </div>

        {/* Highlight Card 3 */}
        <div className="hidden flex flex-col shadow-lg">
          <div className="h-[279px] bg-[#d9d9d9]" />
          <div className="bg-[#fffdfb] p-6">
            <p className="text-2xl font-normal text-black mb-4">
              FOSTERING COMMUNITY THROUGH ECONOMIC DISCOURSES
            </p>
            <div className="text-xl italic text-[#03045e]">Read More...</div>
          </div>
        </div>
      </div>

      {/* Fresh from the Blog Header */}
      <div className="mt-40 mb-10 text-5xl font-medium text-black">Fresh from the Blog</div>

      {/* Blog Posts */}
      <div className="space-y-8">
      {blogPosts.map((post) => (
        <div key={post.id} className="flex flex-col md:flex-row bg-[#fffbf6] shadow-lg p-6">
          <div className="flex-grow">
            <p className="text-[32px] font-normal text-black mb-4">{post.title}</p>
            <Link to={`/blog/${post.id}`} className="text-xl italic text-[#03045e]">
              Read More...
            </Link>
          </div>
          <div className="w-[200px] h-[150px] bg-[#d97213] flex items-center justify-center text-white">
            <div>
              <div className="text-5xl font-medium">{post.dateCreated?.split("-")[2]}</div>
              <div className="text-2xl">
                {new Date(post.dateCreated).toLocaleString("default", { month: "short" })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
      {/* View All Section */}
      <div className="flex justify-end items-center mt-10 text-xl text-[#d97213]">
        <div className="mr-4">View all</div>
        <img
          className="w-[7.59px] h-[13.06px]"
          alt="Vector"
          src="https://c.animaapp.com/WzNSGM6X/img/vector-118.svg"
        />
      </div>


     




      {/* Subscription Section */}
      <div className="bg-[#03045e] text-white py-10 mt-20">
        <p className="text-[32px] font-medium text-center mb-4">Stay updated with NESA, UNILAG</p>
        <img
          className="mx-auto w-[628px] h-px mb-6"
          alt="Line"
          src="https://c.animaapp.com/WzNSGM6X/img/line-8.svg"
        />
        <div className="flex justify-center">
          <a href="https://nesaunilag.substack.com/subscribe?utm_source=menu&simple=true&next=https%3A%2F%2Fnesaunilag.substack.com%2Fp%2Fa-new-dawn-for-nesa-building-a-stronger" target="_blank" rel="noopener noreferrer">
          <button className="px-8 py-3 bg-[#d97213] text-white font-medium rounded-full">Subscribe</button>
          </a>
        </div>
      </div>



      
    </div>
  );
}
