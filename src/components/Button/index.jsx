/**
 * button component
 * renders a customizable button.
 *
 * props:
 * - text (string): the name of the button.
 * - classifier (string): The name of the classifier.
 */

const Index = ({ text }) => {
	return (
		<div className={`border-primary-100 bg-primary-100 text-white cursor-pointer border-2 w-[200px] h-[60px] rounded-[24px] flex justify-center items-center`}>
			<h1 className="font-normal text-[20px]">{text}</h1>
		</div>
	);
};

export default Index;
