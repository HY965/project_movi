const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2E3NTk5MmZmODc5OGMwMTU2MTQxNzBjOTEwNzc5NyIsInN1YiI6IjY1OTc3NWZlZmFkOGU5MTVlZmMyYzU4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NJl5JRUu_rSaFi7hLV9SwLXplv4zcL9a57KnJ8K5OKw'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
