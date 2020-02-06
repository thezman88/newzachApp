const baseUrl =
    process.env.NODE_ENV === "production" 
    ? 'https://zachapp88.herokuapp.com' 
    : 'http://localhost:3000'

    export default baseUrl;