import Header from "./components/Header"
import Classifier from "./components/Button/Classifier"

const App = () => {
	return (
		<div className="flex flex-col items-center mt-[64px]">
			<Header home={true}/>
			<div className="flex gap-5 mt-[64px]">
				<Classifier icon="chat_error" classifier="TOXIC COMMENT" link="/toxic-comment"/>
				<Classifier icon="voice_over_off" classifier="HATE SPEECH" link="/hate-speech"/>
			</div>
		</div>
		
	);
};

export default App;