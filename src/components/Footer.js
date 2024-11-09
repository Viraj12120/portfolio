import React from "react";

const getCurrentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<p className="text-sm text-center sm:text-base lg:text-lg">
			@Viraj_179 &copy; {getCurrentYear}
		</p>
	);
};

export default Footer;
