import  axios from 'axios'

export async function getData()
{

    let d = await axios.get("https://jsonplaceholder.typicode.com/users")

    return d;
}