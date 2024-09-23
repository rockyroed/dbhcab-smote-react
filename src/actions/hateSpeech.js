export const query = async (data) => {
    const response = await fetch(
        import.meta.env.VITE_HATE_SPEECH_API,
        {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}
