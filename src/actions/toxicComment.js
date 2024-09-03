export const query = async (data) => {
    const response = await fetch(
        import.meta.env.VITE_TOXIC_COMMENT_API,
        {
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}
