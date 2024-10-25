/**
 * Classification Result Classifer
 * Renders a customizable classifer
 *
 * props:
 * - sampling (string): the name of the sampling technique
 * - percentage1, percentage2 (string): indicates the percentage of the bar e.g 70 and 30
 * - classification1, classification2 (string): indicates the label e.g Toxic and Non-Toxic
 */
import ClassificationContainer from "./ClassificationContainer";

const Index = ({ db, sampling, percentage1, percentage2, classification1, classification2 }) => {
	return (
		<div className="flex flex-col items-center justify-center gap-y-[12px]">
			<span className="font-bold text-4xl">
                    <span className="text-7xl text-primary">{db}</span>
                    {sampling}
            </span>
			<ClassificationContainer
				percentage1={percentage1}
				percentage2={percentage2}
				classification1={classification1}
				classification2={classification2}
			/>
		</div>
	);
};

export default Index;
