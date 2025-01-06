
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
						<Home1Stackdiscoverth /> 
					</div>
				</div>
				
			</div>
		</>
	);
}
