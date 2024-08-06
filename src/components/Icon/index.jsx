/**
 * icon component
 * renders a customizable icon
 *
 * props:
 * - icon (string): icon that will be used using Google Material Icons
 */

import React from "react";
import { Link } from "react-router-dom";

const Index = ({ icon, className, link }) => {
	return (
		<Link to = {link}>
			<span className={`material-symbols-outlined ${className}`}>{icon}</span>
		</Link>
	)
}
export default Index;