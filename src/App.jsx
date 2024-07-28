import Classification from "./components/Classification";

const App = () => {
	return (
		<Classification
			sampling="DBHCAB-SMOTE"
			percentage1="59.60"
			percentage2="40.40"
			classification1="toxic"
			classification2="non-toxic"
		/>
	);
};

export default App;