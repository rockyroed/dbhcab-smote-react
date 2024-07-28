import Classification from "./components/Classification";

const App = () => {
	return (
		<Classification
			sampling="DBHCAB-SMOTE"
			percentage1="90.60"
			percentage2="9.40"
			classification1="toxic"
			classification2="non-toxic"
		/>
	);
};

export default App;
