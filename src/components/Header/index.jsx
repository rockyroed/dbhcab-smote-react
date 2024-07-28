/**
 * header component
 * renders a customizable header
 *
 * props:
 * - title1 (string): The text that will be purple
 * - title2 (string): The text that will be otherwise
 * - home (boolean): For checking if the header will be for the home page or not
 * - size (string): The size of the titles
 */

const Index = ({title1, title2, size, home}) => {
    return (
        <div className="flex flex-row items-center justify-center w-full">
            {home ? (
                <div className="flex flex-col items-center justify-center gap-y-[30px]">
                <span className="font-extrabold text-5xl">
                    <span className="text-7xl text-primary-100">DB</span>
                    HCAB-SMOTE
                </span>
                <span>
                    Please choose a classifier
                </span>
            </div>
            ) : (
            <div className="flex flex-row ">
                <h1 className={`font-semibold text-[${size}px] text-primary-100 uppercase`}>{title1}</h1>
                <h1 className={`font-semibold text-[${size}px] uppercase`}>{title2}</h1>
            </div>
            )}
        </div>
    )
}

export default Index;