/**
 * Classification Result Classifer
 * Renders a customizable classifer
 * 
 * props:
 * - sampling (string): the name of the sampling technique
 */
import ClassificationContainer from "./ClassificationContainer";

const Index = ({sampling}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-[12px]">
            <span className="font-bold text-[20px]">{sampling}</span>
            <ClassificationContainer percentage1='90.60' percentage2='9.40' classification1='toxic'
            classification2='non-toxic' conWidth='450' conHeight='400'/>
        </div>
    )
}

export default Index;