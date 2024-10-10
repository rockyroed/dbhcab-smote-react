export const hcabsmoteQuery = async (data) => {
	const apiUrl =
		import.meta.env.MODE === "development"
			? import.meta.env.VITE_HATE_SPEECH_HCABSMOTE_DEV
			: import.meta.env.VITE_HATE_SPEECH_HCABSMOTE_PROD;

	const response = await fetch(apiUrl, {
		headers: {
			"Content-Type": "application/json"
		},
		method: "POST",
		body: JSON.stringify(data)
	});

	const result = await response.json();
	return result;
};

export const dbhcabsmoteQuery = async (data) => {
	const apiUrl =
		import.meta.env.MODE === "development"
			? import.meta.env.VITE_HATE_SPEECH_DBHCABSMOTE_DEV
			: import.meta.env.VITE_HATE_SPEECH_DBHCABSMOTE_PROD;

	const response = await fetch(apiUrl, {
		headers: {
			"Content-Type": "application/json"
		},
		method: "POST",
		body: JSON.stringify(data)
	});

	const result = await response.json();
	return result;
};
