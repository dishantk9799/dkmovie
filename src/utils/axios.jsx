import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGQyYzM4MzMxYWRkMGJkNzUxNTNiNjBhMzFiMDFjNyIsIm5iZiI6MTcyNTAyMDczNy45NzIxNDIsInN1YiI6IjY1YjUwMzI5YjZjZmYxMDE3Y2Y2ODA2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4HWTerBXSU-rdzCyxi4PfHo7EbelyvOGzY9d8iSxX58'
    },
})

export default instance;