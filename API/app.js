//api simple example for api understanding
fetch('https://api.github.com/users/vyankateshbairagi')
    .then(response => response.json())
    .then(data => { 
        console.log(data);
        const name = data.name;
        const publicRepos = data.public_repos;
        console.log(`Name: ${name}, Public Repositories: ${publicRepos}`);
    })
    .catch(error => console.error('Error fetching data:', error));  


//you can run this code in your browser console or in a Node.js environment with fetch support.