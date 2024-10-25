import React from "react";
import "./style.css";

export default function Highlights() {
  return (
    <div className="w-full h-full bg-white py-10 px-4 md:px-20 overflow-hidden">
      {/* Department Highlights Header */}
      <div className="text-5xl font-medium text-black mb-10">
        Department Highlights
      </div>

      {/* Highlights Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Highlight Card 1 */}
        <div className="flex flex-col shadow-lg">
          <div className="h-[279px] bg-[#d9d9d9]" />
          <div className="bg-[#fffdfb] p-6">
            <p className="text-2xl font-normal text-black mb-4">
              REBOUND AND RISE: REDISCOVERING RESILIENCE
            </p>
            <div className="text-xl italic text-[#03045e]">Read More...</div>
          </div>
        </div>

        {/* Highlight Card 2 */}
        <div className="flex flex-col shadow-lg">
          <div className="h-[279px] bg-[#d9d9d9]" />
          <div className="bg-[#fffdfb] p-6">
            <p className="text-2xl font-normal text-black mb-4">
              REBOUND AND RISE: REDISCOVERING RESILIENCE
            </p>
            <div className="text-xl italic text-[#03045e]">Read More...</div>
          </div>
        </div>

        {/* Highlight Card 3 */}
        <div className="flex flex-col shadow-lg">
          <div className="h-[279px] bg-[#d9d9d9]" />
          <div className="bg-[#fffdfb] p-6">
            <p className="text-2xl font-normal text-black mb-4">
              REBOUND AND RISE: REDISCOVERING RESILIENCE
            </p>
            <div className="text-xl italic text-[#03045e]">Read More...</div>
          </div>
        </div>
      </div>

      {/* Fresh from the Blog Header */}
      <div className="mt-20 mb-10 text-5xl font-medium text-black">
        Fresh from the Blog
      </div>

      {/* Blog Posts */}
      <div className="space-y-8">
        {/* Blog Post 1 */}
        <div className="flex flex-col md:flex-row bg-[#fffbf6] shadow-lg p-6">
          <div className="flex-grow">
            <p className="text-[32px] font-normal text-black mb-4">
              A New Dawn for NESA: Building a Stronger United Community
            </p>
            <div className="text-xl italic text-[#03045e]">Read More...</div>
          </div>
          <div className="w-[200px] h-[150px] bg-[#d97213] flex items-center justify-center text-white">
            <div>
              <div className="text-5xl font-medium">22</div>
              <div className="text-2xl">AUG</div>
            </div>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="flex flex-col md:flex-row bg-[#fffbf6] shadow-lg p-6">
          <div className="flex-grow">
            <p className="text-[32px] font-normal text-black mb-4">
              Masquerade, Dances and a Night to Remember: Why you attend NESA Dinner
            </p>
            <div className="text-xl italic text-[#03045e]">Read More...</div>
          </div>
          <div className="w-[200px] h-[150px] bg-[#d97213] flex items-center justify-center text-white">
            <div>
              <div className="text-5xl font-medium">05</div>
              <div className="text-2xl">AUG</div>
            </div>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="flex flex-col md:flex-row bg-[#fffbf6] shadow-lg p-6">
          <div className="flex-grow">
            <p className="text-[32px] font-normal text-black mb-4">
              Five of the Best Moments of First Semester
            </p>
            <div className="text-xl italic text-[#03045e]">Read More...</div>
          </div>
          <div className="w-[200px] h-[150px] bg-[#d97213] flex items-center justify-center text-white">
            <div>
              <div className="text-5xl font-medium">03</div>
              <div className="text-2xl">AUG</div>
            </div>
          </div>
        </div>
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
        <p className="text-[32px] font-medium text-center mb-4">
          Stay updated with NESA, UNILAG
        </p>
        <img
          className="mx-auto w-[628px] h-px mb-6"
          alt="Line"
          src="https://c.animaapp.com/WzNSGM6X/img/line-8.svg"
        />
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-[#d97213] text-white font-medium rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
