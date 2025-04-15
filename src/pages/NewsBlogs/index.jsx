import React, { useState, useEffect } from "react";
import { Heading } from "../../components";
import { Link } from "react-router-dom"; // Import Link
import axios from "axios";

export default function NewsBlogs() {

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
        <div className="w-full bg-[#ffffff]">

                <div className="flex justify-center bg-[#d97213] py-12 md:py-5">
                <div className="container-sm flex md:px-5">
                    <Heading
                    size="heading3x1"
                    as="h1"
                    className="text-[25px] px-5 font-bold !text-[#ffffff] md:text-[44px] sm:text-[38px]"
                    >
                    INSIGHTS FROM OUR BLOG
                    </Heading>
                </div>
            </div>
             <div className="container-sm px-5 md:px-5">
                 {/* Fresh from the Blog Header */}
                <div className="mt-40 mb-10 lg:text-[40px] text-[24px] font-bold text-black">Fresh from the Blog</div>

                {/* Blog Posts */}
                <div className="space-y-8">
                {blogPosts.map((post) => (
                <div key={post.id} className="flex flex-row bg-[#fffbf6] shadow-lg p-6">
                    <div className="flex-grow">
                    <p className="text-[20px] lg:text-[30px] font-normal text-black mb-4">{post.title}</p>
                    <Link to={`/blog/${post.id}`} className="text-xl italic text-[#03045e]">
                        Read More...
                    </Link>
                    </div>
                    <div className="w-[100px] h-[80px] lg:w-[200px] lg:h-[150px] bg-[#d97213] flex items-center justify-center text-white">
                    <div>
                        <div className="text-3xl lg:text-5xl font-medium">{post.dateCreated?.split("-")[2]}</div>
                        <div className="text-2xl">
                        {new Date(post.dateCreated).toLocaleString("default", { month: "short" })}
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