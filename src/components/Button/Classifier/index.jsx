/**
 * classifier component
 * renders a customizable classifier button.
 *
 * props:
 * - icon (string): The icon that will be used using Google Material Icons.
 * - classifier (string): The name of the classifier.
 */

import React from "react";
import { Link } from "react-router-dom";

const Index = ({ icon, classifier, link }) => {
	return (
		<Link to = {link}>
			<div className="border-primary bg-background text-text hover:bg-primary hover:text-white cursor-pointer border-2 w-[520px] h-[320px] rounded-[24px] flex flex-col gap-y-[16px] justify-center items-center">
				<span className="material-symbols-outlined text-[40px]">{icon}</span>
				<h1 className="font-semibold text-[40px]">{classifier}</h1>
			</div>
		</Link>
	);
};

export default Index;
