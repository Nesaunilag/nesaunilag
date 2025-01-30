
import { Button, Input, Text } from "../../components";
// import Footer from "../../components/Footer";
// import MissionProfile from "../../components/MissionProfile";
import Header from "../../components/Header";
// import Home1ColumnFive from "./Home1ColumnFive";
// import Home1ColumnSeven from "./Home1ColumnSeven";
// import Home1RowEleven from "./Home1RowEleven";
// import Home1RowFour from "./Home1RowFour";
// import Home1RowNine from "./Home1RowNine";
// import Home1RowSeven from "./Home1RowSeven";
// import Home1RowThree from "./Home1RowThree";
// import Home1RowTwo from "./Home1RowTwo";
import Home1Stackdiscoverth from "./Home1Stackdiscoverth";
import React, { Suspense } from "react";

const data = [
	{
		focusImage: "images/img_focus_2_1.png",
		missionTitle: "OUR MISSION",
		missionDescription: "Provide opportunities for leadership, decision making and skill training.",
	},
	{
		focusImage: "images/img_focus_1_1.png",
		missionTitle: "OUR VISION",
		missionDescription: "Promote team spirit, moral, social, academic and intellectual interests of its members.",
	},
	{
		focusImage: "images/img_goal_1.png",
		missionTitle: "OUR OBJECTIVE",
		missionDescription: "To empower our members with essential knowledge, valuable resources and practical skills.",
	},
];

export default function Home1Page() {
	return (
		<>
			<div className="w-full bg-[#fffbf6]">
				<div className="bg-[#ffffff]">
					<div className="flex flex-col gap-[26px] bg-[#fffbf6]">
						<Header />
						<Home1Stackdiscoverth /> 
					</div>
				</div>
				<div className="flex justify-center bg-[#fffbf6] py-[100px] md:py-5">
					<div className="container-sm flex justify-center md:px-5">
						<div className="flex w-full gap-5 md:flex-col">
							{/* <Suspense fallback={<div>Loading feed...</div>}>
								{data.map((d, index) => (
									<MissionProfile {...d} key={"listfocus20ne" + index} />
								))}
							</Suspense> */}
						</div>
					</div>
				</div>
				{/* <Home1RowTwo />
				<Home1RowThree /> */}
				<div className="bg-[#fffbf6] py-[106px] md:py-5">
					{/* <Home1RowFour /> */}
				</div>
				{/* <Home1RowSeven />
				<Home1RowNine />
				<Home1RowEleven /> */}
				<div className="flex flex-col gap-14 bg-[#ffffff] py-[62px] md:py-5 sm:gap-7">
					{/* <Home1ColumnFive /> */}
					<div className="flex flex-col items-center">
						<div className="self-stretch bg-[#ffffff] py-[54px] md:py-5">
							{/* <Home1ColumnSeven /> */}
						</div>
						<div className="container-sm relative mt-[-36px] flex flex-col items-center px-14 md:px-5">
							<div className="flex w-[92%] flex-col items-center gap-[22px] bg-[#03045e] p-10 md:w-full sm:p-5">
								<Text
									size="text4x1"
									as="p"
									className="font-['Neue_Haas_Grotesk_Text_Pro'] text-[32px] font-medium text-[#ffffff] md:text-[30px] sm:text-[28px]"
								>
									Stay updated with NESA, UNILAG
								</Text>
								{/* <Input
									type="email"
									name="email"
									placeholder={`YOUR EMAIL`}
									className="w-[70%] !border-b px-3"
								/> */}
								<Button
									size="x1"
									className="min-w-[144px] rounded-[26px] px-[30px] font-['Neue_Haas_Grotesk_Text_Pro'] font-medium sm:px-5"
								>
									Subscribe
								</Button>
							</div>
						</div>
					</div>
				</div>
				{/* <Footer /> */}
			</div>
		</>
	);
}
