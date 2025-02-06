import React from "react";
import { Heading } from "../../components";
import { useParams } from "react-router-dom";
import Error404 from "../Error404"

const blogPosts = [

  {
    id: "8",
    dateCreated: "2025-02-05",
    title: "THE DOMINANCE OF CHINA'S ECONOMY IN ASIA",
    image: "/images/NewsBlogs/China.jpg", // Replace with actual image URL
    content: [
      { heading: "", text: "Let’s be real, when you think of rich countries, your mind probably goes straight to places like the U.S., Dubai, or the UK, not China." },
      { heading: "", text: "Looking at it, China is not just rich; it’s dominating Asia’s economy" },
      { heading: "", text: "In 2024, China’s economy has a GDP of $18.27 trillion. Japan, the second largest economy in Asia, has just $4.07 trillion, while India, in third place, has $3.89 trillion. That means China’s economy is more than four times Japan’s and nearly five times India’s GDP rate." },
      { heading: "How Did China Become This Rich?", text: "It wasn’t overnight. China played the game smartly, and now they’re reaping the benefits." },
      { heading: "", text: "Think about it, who makes your phone? Your laptop? The ring light you use for TikTok videos? China." },
      { heading: "", text: "They turned their country into the factory of the world. While other nations were chilling, China was busy building industries, manufacturing goods, and flooding global markets with cheaper alternatives. If a product is too expensive somewhere else, best believe China has a cheaper, almost identical version waiting for you." },
      { heading: "", text: "And then there’s technology. China is not just using tech, they’re leading it now. Other countries are still arguing about whether AI will take their jobs, while China is already using robots to serve food in restaurants and build cars." },
      { heading: "", text: "With 1.42 billion citizens, China has enough people to buy, sell, and produce everything they need without even relying on other countries. Imagine a country where the population alone is enough to keep the economy running, that’s China." },
      { heading: "", text: "The rest of Asia’s countries are trying, but China is just too far ahead. Japan and India are the closest competitors, but let’s be honest, the gap is huge. Other countries like Indonesia, South Korea, and Vietnam are also in the race, but it’s like trying to chase Usain Bolt when he already has a 20-second head start." },
      { heading: "", text: "China is not just leading, they are rewriting the rules and setting the standards." },
      { heading: "", text: "Japan, India, and South Korea are making moves, but unless something drastic happens, China isn’t losing its top spot anytime soon." },
      { heading: "", text: "And the world is watching." },
      { heading: "", text: "" },
      { heading: "", text: "" },
    ],
  },
  {
    id: "4",
    dateCreated: "2025-01-20",
    title: "MEET THE BEST GRADUATING STUDENT",
    image: "/images/NewsBlogs/BGS.jpg", 
    content: [
      { heading: "", text: "Over the past week, the University of Lagos students have been trending on social media with discussions about how achieving a 5.0 GPA or a first-class degree is easy in Unilag. This is baffling so I took the initiative to interview the best-graduating student from the Department of Economics at the University of Lagos. Let’s explore her journey together." },
      { heading: "", text: "Interviewer: Congratulations on graduating at the top of your class in the highly respected Economics department at the University of Lagos. Not only did you graduate with a first-class degree, but you were also recognized as the Best Graduating Student of the ECN Class of 2023. That's a remarkable achievement! Can you introduce yourself to our audience? \n Victoria: My name is Awopetu Victoria Jolayemi, and excelling in everything I do has always been my priority. Wait, it seems like I may need to know more about myself!" },
      { heading: "", text: "Interviewer: (laughs) You’re quite funny! Well, we at least got to know your name. Thank you for joining us, Victoria. It’s an honour to have you here despite your busy schedule. You mentioned that you always strive to excel. Were you an A-list student from childhood, or when did this journey begin for you? \n Victoria: Yes, I've always been an A-list student. I graduated at the top of my class throughout primary and junior secondary school, and I even led the art class in senior secondary. Mathematics and English were my strongest subjects, and I excelled in them, winning several prizes. I graduated with the highest JAMB score of 308 and was the Valedictorian at my school. Academics have always been important to me, and while I did once receive validation for my performance at secondary school, excelling remains a top priority for me." },
      { heading: "", text: "Interviewer: Wow, I must commend you again; these achievements are outstanding! You must be a genius! Do you believe geniuses truly exist? \n Victoria: (laughs) Rest in Jesus' name! I don’t consider myself a genius. Honestly, I believe there are areas where I still need to grow. I think everyone has a bit of genius within them. The key is that we are all willing to work on becoming the best versions of ourselves. Even the bluntest iron can become sharp when properly sharpened. There are geniuses, and they are identified by the singular characteristic of commitment to what everyone thinks is difficult." },
      { heading: "", text: "Interviewer: Thank you, my BGS; I've just learned that I am a genius too, just like everyone else! The essential thing is our willingness to improve ourselves. (giggles) Can you share a bit about your childhood, the schools you attended, and the prizes you won? I’m here for all the gist. \n Victoria: I’m the last card of three children, so I grew up doing chores like washing dishes. I completed my WAEC at Debis Land, a school near my home. Honestly, I can’t remember all the prizes I won—I was head girl and participated in quizzes and led debates, but I can't remember anymore.",  img: "/images/NewsBlogs/BGS2.jpg",  },
      { heading: "", text: "Interviewer: It sounds like there were many! Have you always wanted to study Economics, considering you were in the art class in secondary school? \n Victoria: I originally dreamed of studying law and often imagined myself as a lawyer when I was younger. However, in senior secondary school, we got a new economics teacher I greatly admired, and that changed my path. I decided to study economics because I excelled in it, wanted to be like my teacher, and learned from my mentors that economics could lead to greater opportunities. Although I was an art student throughout secondary school, I took the required commercial subjects for JAMB. Economics was my first choice, and I was determined to pursue it before I even received my admission." },
      { heading: "", text: "Interviewer: And you followed through, congratulations again! Many students hold various mindsets about academics, with sentiments like \"school is a scam\" or \"I don’t promise anyone a first-class degree.\" What motivated you during your studies? Did you simply believe in your ability, or was there more to it? You mentioned having mentors as well. \n Victoria: Thank you very much! I can’t pinpoint a specific motivation, but I did have a lot of supportive people around me. I initially started with a second-class grade, and my first goal was to raise it to a first-class. I just wanted to graduate with a first-class degree, so I focused on gathering as many A’s as possible. Once I achieved a first-class grade, my drive shifted to earning as many prizes as I could. It wasn’t for monetary rewards; it was simply because I've always been accustomed to going up on stage to receive awards. I knew that my time at UNILAG had to be no different. People often say there’s no first position in a class, but that’s not true. There is always a best-graduating student, and even among them, there’s an overall best. While striving to improve my grades and collect awards, I ended up becoming the best and most decorated student in my department. With my determination to graduate well and the right support around me, I was able to surpass my expectations." },
      { heading: "", text: "Interviewer: This is inspiring, and I am so motivated. I’m genuinely happy for you—you achieved what you wanted! Aside from being a regular student, what else do you do? I know you’re the outgoing financial secretary of Nesa. How do you manage to balance your academics and social life? Also, you didn't get a chance to tell us about your mentors. \n Victoria: It wasn't just about the books for me. I enrolled in courses on data analytics and later transitioned into data science. I also became involved in several volunteering roles and internships. Additionally, I co-founded an eco-friendly NGO with a group of friends and joined a fellowship to broaden my horizons.", img: "/images/NewsBlogs/BGS4.jpg",  },
      { heading: "", text: "Interviewer: Oh, really? What's the NGO about? \nVictoria: The NGO was an eco-friendly organization that focused on converting plastic into renewable materials. While plastic is technically renewable, we aimed to transform it into other items that can also be renewed. It was a great project, but we weren't able to move forward with it. It was something we were passionate about at the time, but unfortunately, it no longer exists." },
      { heading: "", text: "Interviewer: I’m sorry to hear that. \n Victoria: You don’t need to be sorry.", img: "/images/NewsBlogs/BGS1.jpg",  },
      { heading: "", text: "Interviewer: Do you usually study alone, or do you have study partners? \n Victoria: I prefer studying alone because I don’t assimilate well when I study with others. I do have a small group of friends with whom I occasionally review materials, but it's mostly about going over what I’ve already studied. It’s about 90% reading alone and 10% studying with friends. I believe the most important thing is finding what works for you. I know that studying with friends doesn’t suit me, especially when I’m trying to understand a topic and someone else starts asking questions about something different. That can be overwhelming for me." },
      { heading: "", text: "Interviewer: I can relate; I also don’t like studying in groups. Have you ever failed, perhaps in secondary school, or has it all been smooth sailing for you? \n Victoria: Hmm... have I ever failed? It depends on what you mean by failure." },
      { heading: "", text: "Interviewer: How do you define failure? \n Victoria: To me, failure means not trying again. I’ve never reached a point where I wouldn’t try again. If you’re asking about failing academically, I did experience something in primary school. I didn’t come in first place one term and was second instead." },
      { heading: "", text: "Interviewer: You view the second place as a failure? \n Victoria: I was in primary four at the time. It didn’t feel great, so I considered it a form of failure.", img: "/images/NewsBlogs/BGS3.jpg",  },
      { heading: "", text: "Interviewer: That’s impressive; many people would celebrate being second. It’s clear that everyone has a different definition of failure, and yours seems quite high. Did you stay in the school hostel, or did you have your own place? Because environments can also influence success. \n Victoria: I didn't stay in the school hostel until my third year, and honestly, I stayed at Honours, however, I believe it’s all about your mindset. You can ignore these challenges because they will always be present. The key is focusing on the positives rather than the negatives. Also, you should schedule your study time when others are out of the hostel." },
      { heading: "", text: "Interviewer: Thank you for sharing that, Victoria. We've discussed a lot, and you've given some great tips. I still have a few questions. What advice do you have for undergraduates who are juggling subjects like Econometrics, Microeconomics, and others? \n Victoria: I would say to take it one step at a time. While it’s good to listen to others and seek their advice, it’s essential to listen to yourself first. When I entered the University of Lagos, my classmates were often reaching out for help with courses and getting discouraging feedback, like \"You’ll fail Econometrics\" or \"Just expect to get an E or F.\" That kind of talk was intimidating, but I told myself that I was going to read and pass no matter what. It’s crucial to filter out the negative comments; people will always have opinions, but you need to learn to shut your ears to the negativity." },
      { heading: "", text: "Interviewer: Very true, most of us still have fears of some courses. I’ve also read somewhere that there’s no such thing as time management since time is static, but there is self-management. I noticed from your LinkedIn profile that you interned at several firms. How did you manage yourself? \n Victoria: For me, it was all about putting myself forward for opportunities. The important thing is to be proactive in seeking what you want; the worst that can happen is receiving a rejection email." },
      { heading: "", text: "Interviewer: You also won an AESP award in 2023. Would you like to tell us more about it? \n Victoria: Yes, the AESP (African Economics Scholars’ Program) is designed for those pursuing pure economics, such as macroeconomics and policies. I had the opportunity to participate in the 2023 program cohort, where I led my team and graduated as a top three scholar. If you’re interested in entering the field of economics, I highly encourage you to apply. Interviewer: I will look more into this and make sure I do. Thank you very much for taking the time to participate in this interview and for sharing your insights. It was a pleasure to hear you speak and to learn from you. Congratulations once again! I am proud of your achievements.", img: "/images/NewsBlogs/BGS5.jpg",  },
      { heading: "", text: "It’s evident from our conversation that Victoria Jolayemi didn’t become the top student by chance; she put in her utmost effort, and the results speak for themselves. Her perspective on failure truly resonates with me, and we can all learn from her approach to academics. If you have any specific questions, please feel free to ask on our social media platforms, and we will be sure to respond. Thank you for reading, and we encourage you to share your thoughts on the interview in the comments." },
      { heading: "", text: "" },
      { heading: "", text: "" },
    ],
  },

  {
    id: "3",
    dateCreated: "2024-10-22",
    title: "A New Dawn for NESA",
    image: "/images/Executives/temidayo.jpg",
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
    image: "/images/NewsBlogs/Back2School.jpeg",
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
    return <div className="text-center text-xl text-red-500">
      <Error404 />
    </div>;
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
            
              <img
                src={section.img}
                className="w-full lg:w-[30%] h-auto"
              />
          </div>
        ))}

        {/* Blog Date */}
        <p className="text-gray-500 italic">{blogPost.dateCreated}</p>
      </div>
    </div>
  );
}
