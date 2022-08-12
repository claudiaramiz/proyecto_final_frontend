const API_URL = "https://blog-app-backend-idgs9a-211368.herokuapp.com/todos";

export async function getTodos() {
    try {
        const response = await fetch(API_URL);
        return response.json();
    }
    catch (error){
        console.log(error);
     }
}



