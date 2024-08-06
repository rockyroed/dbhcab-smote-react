import { useState, useRef, useEffect } from "react";
import Header from "../../components/Header";
import Icon from "../../components/Icon";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import Classification from "../../components/Classification";

const App = () => {
	const [showResults, setShowResults] = useState(false); // State to manage the visibility of the results
	const [buttonText, setButtonText] = useState("CLASSIFY"); // State to manage the button text
	const [isDisabled, setIsDisabled] = useState(false); // State to manage the disabled state of the TextArea
	const resultsRef = useRef(null); // Reference to the results container

	const handleClassifyClick = () => {
		if (buttonText === "CLASSIFY") {
			setShowResults(true); // Show classification results
			setButtonText("CLASSIFY AGAIN"); // Change button text
			setIsDisabled(true); // Disable TextArea
		} else {
			window.location.reload(); // Refresh the page
		}
	};

	// Scroll to the results when showResults becomes true
	useEffect(() => {
		if (showResults) {
			resultsRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [showResults]);

	return (
		<div className="flex flex-col my-[64px] mx-[160px]">
			<div className="flex flex-row justify-between items-center mb-[64px]">
			<Icon className="text-gray text-[40px]" icon="home" link="/"/>
				<div className="flex items-center gap-[24px]">
					<Header title1="HATE" title2="SPEECH" />
					<Icon className="text-accent text-[40px]" icon="sync_alt" link="/toxic-comment" />
				</div>
				<div></div>
			</div>

			<TextArea isDisabled={isDisabled} /> {/* Pass the disabled state to TextArea */}

			<div className="flex justify-center mt-[56px]">
				<Button text={buttonText} onClick={handleClassifyClick} /> {/* Use buttonText state */}
			</div>

			{showResults && ( // Conditionally render the classification results
				<div ref={resultsRef}>
					<div className="border my-[64px]"></div>

					<div className="flex font-semibold justify-center text-[40px] mb-[56px]">
						Classification Result
					</div>

					<div className="flex justify-between">
						<Classification
							sampling="DBHCAB-SMOTE"
							percentage1="95"
							percentage2="95"
							classification1="HATE"
							classification2="NON-HATE"
						/>
						<Classification
							sampling="HCAB-SMOTE"
							percentage1="90"
							percentage2="90"
							classification1="HATE"
							classification2="NON-HATE"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
