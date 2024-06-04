export async function fetchApi(url, options) {
    try {
        const resp = await fetch(url, options);
        const data = await resp.json();
        return data;
    } catch {
        alert("Hubo un Error", error);
    }    
}