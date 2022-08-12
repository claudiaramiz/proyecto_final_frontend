const API_URL = "https://blog-app-backend-idgs9a-211368.herokuapp.com/categories";
//const API_URL = "http://localhost:3001/categories";

export async function getCategories() {
    try {
        const response = await fetch(API_URL);
        return response.json();
    }
    catch (error) {
        console.log(error);
    }
}

export async function deleteCategory(id) {
    try {
        const response = await fetch(`${API_URL}/delete/${id}`, {
            method: "PATCH"
        })
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function postCategory(cat) {

    const Data = {
        category: cat.category,
        catDescription: cat.catDescription
    }
    console.log(Data);
    try {
        const response = await fetch(API_URL, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Data)
        })
    } catch (error) {
        console.log(error);
    }
}