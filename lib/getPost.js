export default async function getPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')

    return res.json();
}