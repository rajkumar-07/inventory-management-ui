export default async function post(APIURL, data) {
    try {
        const response = await fetch(APIURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
       return response;
    } catch (error) {
        console.debug("Exception Occured while calling API , POST request", error)
    }
}