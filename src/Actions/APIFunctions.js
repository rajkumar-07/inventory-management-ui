export async function post(APIURL, data) {
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

export  async function get(APIURL){
    try {
        const response = await fetch(APIURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response;
    }catch(error){
        console.debug("Exception occured while calling API, GET request",error);
    }
}