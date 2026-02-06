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


//more complex example with async/await syntax
async function fetchGitHubUser(username) {
    try {   
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }   
        const data = await response.json();
        console.log(data);
        const name = data.name;
        const publicRepos = data.public_repos;
        console.log(`Name: ${name}, Public Repositories: ${publicRepos}`);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}   
fetchGitHubUser('vyankateshbairagi'); //you can replace 'vyankateshbairagi' with any other GitHub username to get their data

// In this code:    
// 1. We define an asynchronous function `fetchGitHubUser` that takes a GitHub username as an argument.
// 2. We use `await` to wait for the fetch request to complete and check if the response is successful.
// 3. If the response is not successful, we throw an error with the status code.
// 4. We then convert the response to JSON format and extract the user's name and the number of public repositories, logging them to the console.
// 5. If there is any error during the fetch operation, it is caught and logged to the console. 
