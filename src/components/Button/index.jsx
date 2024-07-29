/**
 * button component
 * renders a customizable button.
 *
 * props:
 * - text (string): the name of the button.
 */

const Index = ({ text }) => {
	return (
		<div className={`border-primary bg-primary text-white cursor-pointer border-2 w-[200px] h-[60px] rounded-[24px] flex justify-center items-center`}>
			<h1 className="font-normal text-[20px]">{text}</h1>
		</div>
	);
};

export default Index;
