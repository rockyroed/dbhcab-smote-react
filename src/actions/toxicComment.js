export const query = async (data) => {
    const apiKey = import.meta.env.VITE_HUGGING_FACE_ACCESS_TOKEN;
	const response = await fetch(
		"https://api-inference.huggingface.co/models/JungleLee/bert-toxic-comment-classification",
		{
			headers: {
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}