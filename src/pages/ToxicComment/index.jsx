import Header from "../../components/Header";
import Icon from "../../components/Icon";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import Classification from "../../components/Classification";

const Index = () => {
	return (
		<div className="flex flex-col my-[64px] mx-[160px]">
			<div className="flex flex-row justify-between items-center mb-[64px]">
				<Icon className="text-gray text-[40px]" icon="home" />
				<div className="flex items-center gap-[24px]">
					<Header title1="TOXIC" title2="COMMENT" />
					<Icon className="text-accent text-[40px]" icon="sync_alt" />
				</div>
				<div></div>
			</div>

			<TextArea />

			<div className="flex justify-center mt-[56px]">
				<Button text="CLASSIFY" />
			</div>

			<div className="border my-[64px]"></div>

			<div className="flex font-semibold justify-center text-[40px] mb-[56px]">
				Classification Result
			</div>

			<div className="flex justify-between items-center ">
				<Classification
					sampling="DBHCAB-SMOTE"
					percentage1="95"
					percentage2="95"
					classification1="TOXIC"
					classification2="NON-TOXIC"
				/>
                <Classification
					sampling="HCAB-SMOTE"
					percentage1="90"
					percentage2="90"
					classification1="TOXIC"
					classification2="NON-TOXIC"
				/>
			</div>
		</div>
	);
};

export default Index;
