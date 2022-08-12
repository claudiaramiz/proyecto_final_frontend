const API_URL = "https://blog-app-backend-idgs9a-211368.herokuapp.com/todos";

export async function getTodos() {
    try {
        const response = await fetch(API_URL);
        return response.json();

    } catch (error) {
        console.log(error);
    }

}

export async function postBlog(blogNew) {

    const Data = {
        title: blogNew.title,
        description: blogNew.description,
        category: blogNew.category,
        userName: blogNew.userName,
        imagen: blogNew.imagen
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