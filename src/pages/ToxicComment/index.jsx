import Header from "../../components/Header"
import Icon from "../../components/Icon"

const Index = () => {
	return (
	<div className="flex flex-col items-center mt-[64px]">
        <div className="flex flex-row justify-center items-center gap-[24px]">
            <Icon className="text-accent-100" icon="home" />
            <Header title1="TOXIC" title2="COMMENT"/>
            <Icon icon="sync_alt" size="40" color="green" />   
        </div>
    </div>
		
	);
};

export default Index;