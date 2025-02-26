/**
 * header component
 * renders a customizable header
 *
 * props:
 * - title1 (string): The text that will be purple
 * - title2 (string): The text that will be otherwise
 * - home (boolean): For checking if the header will be for the home page or not
 */

const Index = ({title1, title2, home}) => {
    return (
        <div className="flex flex-row items-center justify-center w-full">
            {home ? (
                <div className="flex flex-col items-center justify-center gap-y-[30px]">
                <span className="font-bold text-5xl">
                    <span className="text-7xl text-primary">DB</span>
                    HCAB-SMOTE
                </span>
                <span>
                    Please choose a classifier
                </span>
            </div>
            ) : (
            <div className="flex flex-row ">
                <h1 className={`font-bold text-[48px] text-primary uppercase mr-3`}>{title1}</h1>
                <h1 className={`font-bold text-[48px] uppercase`}>{title2}</h1>
            </div>
            )}
        </div>
    )
}

export default Index;