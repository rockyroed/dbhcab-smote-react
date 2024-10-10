import { useState, useRef, useEffect } from "react";
import Header from "../../components/Header";
import Icon from "../../components/Icon";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import Classification from "../../components/Classification";
import { hcabsmoteQuery, dbhcabsmoteQuery } from "../../actions/toxicComment";

const Index = () => {
	const [showResults, setShowResults] = useState(false); // State to manage the visibility of the results
	const [buttonText, setButtonText] = useState("CLASSIFY"); // State to manage the button text
	const [isDisabled, setIsDisabled] = useState(false); // State to manage the disabled state of the TextArea
	const [input, setInput] = useState(); // State to manage the input of the user
	const resultsRef = useRef(null); // Reference to the results container
	
	const [hcabToxic, setHcabToxic] = useState();
	const [hcabNonToxic, setHcabNonToxic] = useState();
	const [dbhcabToxic, setDbhcabToxic] = useState();
	const [dbhcabNonToxic, setDbhcabNonToxic] = useState();

	const handleClassifyClick = () => {
		if (buttonText === "CLASSIFY") {
			setButtonText("CLASSIFYING...");
			setIsDisabled(true); // Disable TextArea
			hcabsmoteQuery({ "input": input }).then((response) => { // Classify
				const result = response;
				console.log(result);
				setHcabNonToxic(result.percentage[0])
				setHcabToxic(result.percentage[1])

				dbhcabsmoteQuery({ "input": input }).then((response) => { // Classify
					const result = response;
					console.log(result);
					
					setDbhcabNonToxic(result.percentage[0])
					setDbhcabToxic(result.percentage[1])

					setShowResults(true); // Show classification results
					setButtonText("CLASSIFY AGAIN"); // Change button text
				}).catch((error) => {
					// Handle any errors that occur during the query
					console.error("Error during DBHCABSMOTE classification:", error);
					setButtonText("CLASSIFY"); // Reset button text on error
				});
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
					<Header title1="TOXIC" title2="COMMENT" />
					<Icon className="text-accent text-[40px]" icon="sync_alt" link="/hate-speech" />
				</div>
				<div></div>
			</div>
			<TextArea isDisabled={isDisabled} input={input} handleInputChange={handleInputChange} />
			<div className="flex justify-center mt-[56px]">
				<Button text={buttonText} onClick={handleClassifyClick} />
			</div>
			{showResults && (
				<div ref={resultsRef}>
					<div className="border my-[64px]"></div>

					<div className="flex font-semibold justify-center text-[40px] mb-[56px]">
						Classification Result
					</div>

					<div className="flex justify-between items-center ">
						<Classification
							sampling="DBHCAB-SMOTE"
							percentage1={dbhcabToxic}
							percentage2={dbhcabNonToxic}
							classification1="TOXIC"
							classification2="NON-TOXIC"
						/>
						<Classification
							sampling="HCAB-SMOTE"
							percentage1={hcabToxic}
							percentage2={hcabNonToxic}
							classification1="TOXIC"
							classification2="NON-TOXIC"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Index;