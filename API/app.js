//api simple example for api understanding
fetch('https://api.github.com/users/vyankateshbairagi') //fetching data from github api for user vyankateshbairagi //you can replace 'vyankateshbairagi' with any other GitHub username to get their data //fetch returns a promise that resolves to the response of the request
    .then(response => response.json())
    .then(data => { 
        console.log(data);
        const name = data.name;
        const publicRepos = data.public_repos;
        console.log(`Name: ${name}, Public Repositories: ${publicRepos}`);
    })
    .catch(error => console.error('Error fetching data:', error));  


//you can run this code in your browser console or in a Node.js environment with fetch support.

  // In this code:
  // 1. We use the `fetch` function to make a GET request to the GitHub API endpoint for a specific user.
  // 2. The response is converted to JSON format using `response.json()`.
  // 3. We then extract the user's name and the number of public repositories from the data and log it to the console.
  // 4. If there is an error during the fetch operation, it is caught and logged to the console.    