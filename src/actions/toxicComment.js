export const hcabsmoteQuery = async (data) => {
	const apiUrl =
		import.meta.env.MODE === "development"
			? import.meta.env.VITE_TOXIC_COMMENT_HCABSMOTE_DEV
			: import.meta.env.VITE_TOXIC_COMMENT_HCABSMOTE_PROD;

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
			? import.meta.env.VITE_TOXIC_COMMENT_DBHCABSMOTE_DEV
			: import.meta.env.VITE_TOXIC_COMMENT_DBHCABSMOTE_PROD;

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
