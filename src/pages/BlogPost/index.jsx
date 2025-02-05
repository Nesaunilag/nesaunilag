import React from "react";
import { Heading } from "../../components";
import { useParams } from "react-router-dom";

const blogPosts = [
  {
    id: "3",
    dateCreated: "2024-10-22",
    title: "A New Dawn for NESA",
    image: "/images/executives/temidayo.jpg",
    content: [
      { heading: "", text: "As I assume the role of President of the Nigerian Economics Students’ Association (NESA), I am overwhelmed with a deep sense of gratitude and responsibility. The outgoing president and executives have been pillars of strength, guiding NESA with passion, dedication, and an unwavering commitment to excellence. Their efforts have not only sustained the association but have also propelled it forward, setting a high standard for leadership and community engagement. I would like to extend my heartfelt appreciation to them for their remarkable contributions, which have paved the way for this new chapter in NESA's journey." },
      
      
      { heading: "", text: "Today marks the beginning of a new era for NESA, one that promises growth, unity, and innovation. It is an honor to be the new president, and I am both humbled and excited by the opportunity to lead this esteemed association. My vision for this tenure is clear and ambitious which is to create a NESA community that is not just inclusive but truly united, a community where both present and past members feel connected, valued, and engaged." },
      
      
      { heading: "", text: "In this new chapter, we will focus on building bridges between current NESAites and our esteemed alumni. We recognize the wealth of experience and knowledge that our alumni possess, and we are committed to fostering strong relationships with them. These connections will not only provide mentorship and guidance to our members but will also create a network of support that extends far beyond the walls of the University of Lagos." },
    
    
      { heading: "", text: "One of our primary goals is to ensure that every member of NESA has access to valuable opportunities that will enhance their academic and professional journey. We are determined to create internship opportunities that will give our members practical experience and a competitive edge in the job market. These internships will be tailored to meet the diverse interests and career aspirations of our members, ensuring that everyone has the chance to thrive." },

    

      { heading: "", text: "But our vision goes beyond academics and career development. We want this tenure to be filled with excitement and a sense of belonging. To that end, we are planning to host the most spectacular sports festival that the University of Lagos has ever seen. This event will not only showcase the talents of our members but will also serve as a platform for building friendships and fostering unity within our community." },


      { heading: "", text: "Inclusivity will be at the heart of everything we do. We want every member of NESA to feel seen, heard, and valued. Your opinions, ideas, and feedback will be the driving force behind our initiatives. This is your association, and together, we will shape its future. We are committed to creating an environment where everyone feels empowered to contribute and where diverse perspectives are embraced and celebrated." },


      { heading: "", text: "As we embark on this journey together, I am filled with optimism and excitement for what lies ahead. The challenges we may face will only serve to strengthen us and bring us closer together as a community. I am confident that with your support, we will achieve great things and leave a legacy for future generations of NESAites." },


      { heading: "", text: "In conclusion, I want to reiterate my deep gratitude to the outgoing executives for their service and to you, the members of NESA, for entrusting me with this responsibility. I am eager to work alongside you to build a NESA that is not only a model of excellence but also a true family—a place where everyone feels at home." },


      { heading: "", text: "Let us move forward together, united in our vision and determined to make this tenure the best in NESA’s history. Thank you, and here’s to a future filled with success, unity, and endless possibilities." },


      { heading: "", text: "– Temidayo Ogunmuyiwa \n President (Elect), Nigeria Economics Students’ Association (NESA)." },



      { heading: "", text: "" },
    
    
    ],
  },
  {
    id: "1",
    dateCreated: "2024-09-10",
    title: "5 THINGS NEEDED FOR RESUMPTION",
    image: "/images/newsblogs/Back2School.jpeg",
    content: [
      { heading: "", text: "The holiday after a whole academic session is nothing short of bliss—free food, no assignments or projects due, and no rushing for an 8 a.m. class. Well, except for the small detail of being transformed into an unpaid, overworked laborer at home. But let’s not dwell on that—it doesn’t take away from the holiday's enjoyment. Sadly, that glorious break is almost over. All the horrors we faced last session are about to make their grand return" },
      { heading: "", text: "On October 28, we go again." },
      { heading: "5 Essentials You Need When Resuming as a University Student", text: "Ah, back to campus life! Whether you’re excited about lectures (unlikely), the freedom of student life, or the idea of living on noodles and bread again, there are a few things you absolutely need to survive the chaos. I’m not talking about textbooks or sensible decisions. I’m talking about the real essentials. Let’s break it down." },

      { heading: "1. A Bag That Can Carry Your Entire Existence", text: "A good bag is more than just something to carry your laptop—it’s your portable life container. This bag will carry your books, water bottle, emergency snacks, and probably some crumpled-up papers you forgot were due yesterday. Choosing the right bag is a whole quest in itself." },
      { heading: "", text: "There’s the classic backpack, perfect for our tech bros who travel everywhere with their gadgets. But, let’s be honest, carrying a bulky backpack all the time can feel like a workout in itself. That’s where the trending alternative comes in—the tote bag. Why didn’t I discover this sooner?! It would’ve saved me a world of stress. Tote bags are not only convenient but also stylish. Their versatility is undeniable—suitable for both men and women, easy to customize, and perfect for school events or daily classes. Plus, they won’t weigh you down like a mobile storage unit." },
      
      
      
      { heading: "2. Powerbank: Your Academic Lifeline", text: "Let’s be real: as a student, your phone is practically your best friend and lifeline. It’s not just for social media—it keeps you updated on class schedules, assignment deadlines, and even group chats for class activities. Your phone is where you get last-minute changes to lecture venues, share notes, and even snap pictures of the whiteboard when you’re too tired to write. But of course, right when you need it most—like during an important online quiz or when that group project member finally replies—your phone will decide to die" },
      
      
      
      { heading: "3. Flashlight: Because the National Grid Will Fail You", text: "As a Nesaite and Akokite, you already know that power outages on campus aren’t just random—they’re practically a tradition. Whether it's due to the national grid collapsing again or some other mysterious power issue, you're bound to find yourself in the dark. Sure, your phone has a torch feature, but do you really want to risk your phone falling, slipping into water, in this economy?? Where small phone's are almost a hundred thousand naira now?? (Laughs in Tinubu regime)" },
      { heading: "", text: "That’s where having an actual flashlight comes in. It’ll save your phone’s battery and, more importantly, keep it safe from accidental drops while you’re trying to find your way through a pitch-black hostel." },





      { heading: "4. Umbrella: Because Rain Has No Chill", text: "Unpredictable as the economy may be, the weather lately seems to take the same wheel. We are in the last quarter of the year, yet it feels like we are in June. A minute, the weather is hot and next rain drops begin to pour. Let's just say the weather is trying to be interesting, just like our academic lives in school. Mother Nature can decide to throw water at you at the any moment which an umbrellaa necessity. I have learned my lesson from last semester. It was very cold. So, to save yourself and dress from stress, having an umbrella is non-negotiable. Bonus points if it’s small enough to fit in your giant life-bag" },




      { heading: "5. A Rechargeable Version of Yourself", text: "No, seriously. Resuming school can be exhausting. Between balancing lectures, social life, assignments, and pretending to have your life together, you need to recharge! Whether that means catching a nap between classes, grabbing a snack, or zoning out with some music, don’t forget to take time to refuel yourself. This semester isn’t a sprint—it’s a marathon of last-minute assignments, existential crises, and overpriced meals in campus. So, recharge, reboot, and survive until the next break." },


      { heading: "", text: "See you next time,\nRahmat" },
    ],
  },
];

export default function BlogPostDetails() {
  const { id } = useParams(); // Get blog post ID from URL
  const blogPost = blogPosts.find((post) => post.id === id);

  // ✅ Prevent crash if blogPost is undefined
  if (!blogPost) {
    return <div className="text-center text-xl text-red-500">Post not found</div>;
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-start bg-[#d97213] py-12 md:py-5">
        <div className="container-sm flex px-5">
          <Heading
            size="heading3xl"
            as="h1"
            className="text-[48px] font-bold !text-[#ffffff] md:text-[44px] sm:text-[38px]"
          >
            {blogPost.title}
          </Heading>
        </div>
      </div>

      {/* Blog Image */}
      <div className="flex justify-start my-5 py-12 md:py-5 px-6 lg:px-20">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full lg:w-[30%] h-auto"
        />
      </div>

         {/* Blog Content */}
         <div className="px-6 lg:px-20">
        {blogPost.content.map((section, index) => (
          <div key={index} className="mb-6">
            {/* Render heading only if it exists */}
            {section.heading && (
              <h2 className="text-2xl font-semibold text-black mb-2">
                {section.heading}
              </h2>
            )}
            {/* Render paragraph with line breaks */}
            <p className="text-lg text-gray-700 leading-6 whitespace-pre-line">
              {section.text}
            </p>
          </div>
        ))}

        {/* Blog Date */}
        <p className="text-gray-500 italic">{blogPost.dateCreated}</p>
      </div>
    </div>
  );
}
