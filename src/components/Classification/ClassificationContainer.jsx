/**
 * Classification Result Container
 * renders a customizable result container
 *
 * props:
 * - percentage1, percentage2 (string): indicates the percentage of the bar e.g 70 and 30
 * - classification1, classification2 (string): indicates the label e.g Toxic and Non-Toxic
 * - conWidth (string): indicates the width of the container
 * - conHeight (string): indicates the height of the container
 */

const ClassificationContainer = ({
	percentage1,
	percentage2,
	classification1,
	classification2,
}) => {
	return (
		<div
			className={`border-background-white bg-white text-text border-2 rounded-[24px] w-[420px] h-[450px] flex flex-col gap-y-[8px] items-center p-5 shadow-xl`}
		>
			<h1 className="font-normal text-red text-[30px] uppercase">{classification1}</h1>
			<h1 className="font-semibold text-red text-[50px]">{percentage1}%</h1>
			<h1 className="font-semibold text-text text-[17px] pt-10 uppercase">
				{classification1} | {percentage1}%
			</h1>
			<div className="w-[280px] bg-gray-200 rounded-full h-5 mt-2">
				<div className="bg-red h-5 rounded-full" style={{ width: `${percentage1}%` }}></div>
			</div>
			<h1 className="font-semibold text-text text-[17px] pt-10 uppercase">
				{classification2} | {percentage2}%
			</h1>
			<div className="w-[280px] bg-gray-200 rounded-full h-5">
				<div className="bg-green h-5 rounded-full" style={{ width: `${percentage2}%` }}></div>
			</div>
		</div>
	);
};

export default ClassificationContainer;
