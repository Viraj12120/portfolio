import React, { useState } from "react";
import BentoLayout from "./BentoLayout";
import ProfileSidebar from "./ProfileSidebar";
import Footer from "./Footer";

const MainContainer = () => {
	// Lift dark mode state to MainContainer
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Toggle dark mode function
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<div
			className={`flex flex-col min-h-screen justify-between items-center overflow-hidden ${
				isDarkMode ? "bg-gray-900 text-white" : "text-black"
			} px-4 lg:px-20`}>
			{/* Main Content */}
			<div className="flex flex-col lg:flex-row w-full max-w-8xl mx-auto gap-4 mb-auto flex-grow">
				{/* Profile Sidebar */}
				<div className="flex-1 rounded-lg p-6">
					<ProfileSidebar isDarkMode={isDarkMode} />
				</div>

				{/* BentoLayout Component: Pass dark mode state and toggle function */}
				<div className="flex-1 rounded-lg p-6">
					<BentoLayout
						isDarkMode={isDarkMode}
						toggleDarkMode={toggleDarkMode}
					/>
				</div>
			</div>
		</div>
	);
};

export default MainContainer;
