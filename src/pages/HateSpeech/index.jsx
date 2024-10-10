import { useState, useRef, useEffect } from "react";
import Header from "../../components/Header";
import Icon from "../../components/Icon";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import Classification from "../../components/Classification";
import { query } from "../../actions/hateSpeech";

const App = () => {
	const [showResults, setShowResults] = useState(false); // State to manage the visibility of the results
	const [buttonText, setButtonText] = useState("CLASSIFY"); // State to manage the button text
	const [isDisabled, setIsDisabled] = useState(false); // State to manage the disabled state of the TextArea
	const [input, setInput] = useState(); // State to manage the input of the user
	const resultsRef = useRef(null); // Reference to the results container
	const [hate, setHate] = useState(); // State to manage hate percentage
	const [nonHate, setNonHate] = useState(); // State to manage not hate percentage

	const handleClassifyClick = () => {
		if (buttonText === "CLASSIFY") {
			setButtonText("CLASSIFYING...");
			setIsDisabled(true); // Disable TextArea
			query({ "input": input }).then((response) => { // Classify
				const result = response;
				console.log(result);
				setNonHate(result.percentage[0])
				setHate(result.percentage[1])
				
				setShowResults(true); // Show classification results
				setButtonText("CLASSIFY AGAIN"); // Change button text
			}).catch((error) => {
				// Handle any errors that occur during the query
				console.error("Error during classification:", error);
				setButtonText("CLASSIFY"); // Reset button text on error
			});
		} else {
			window.location.reload(); // Refresh the page
		}
	};	
	
	const handleInputChange = (event) => {
		setInput(event.target.value);
	}

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

			<TextArea isDisabled={isDisabled} input={input} handleInputChange={handleInputChange} />

			<div className="flex justify-center mt-[56px]">
				<Button text={buttonText} onClick={handleClassifyClick} />
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
							percentage1={hate}
							percentage2={nonHate}
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
