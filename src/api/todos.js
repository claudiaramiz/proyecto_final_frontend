const API_URL = "http://localhost:3001/todos";

export async function getTodos(){
    try {
        const response = await fetch(API_URL);
        return response.json();
        
    } catch (error) {
        console.log(error);
    }
   
}