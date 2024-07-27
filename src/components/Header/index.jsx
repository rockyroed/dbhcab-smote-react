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

const Index = ({title1, title2, home, size}) => {
    return (
        <div className="flex flex-row items-center justify-center w-full">
            {home ? (
                <div></div>
            ) : (
            <div className="flex flex-row">
                <h1 className={`font-semibold text-[${size}px] text-primary-100`}>{title1}</h1>
                <h1 className={`font-semibold text-[${size}px] uppercase`}>{title2}</h1>
            </div>
            )}
        </div>
    )
}

export default Index;