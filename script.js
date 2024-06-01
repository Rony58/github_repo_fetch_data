$(document).ready(function() {
    // Function to fetch GitHub repositories
    function fetchGitHubRepos(username) {
        $.ajax({
            url: `https://api.github.com/users/${username}/repos`,
            method: 'GET',
            success: function(data) {
                console.log(data);
                displayRepos(data);
            },
            error: function(error) {
                console.log('Error:', error);
            }
        });
    }

    // Function to display repositories in the DOM
    function displayRepos(repos) {
        let reposList = '<ul>';
        repos.forEach(repo => {
            reposList += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
        });
        reposList += '</ul>';
        $('#github-repos').html(reposList);
    }

    // Fetch and display GitHub repositories for a given username when the button is clicked
    $('#fetch-repos').click(function() {
        const username = $('#github-username').val();
        if (username) {
            fetchGitHubRepos(username);
        } else {
            alert('Please enter a GitHub username.');
        }
    });

    // Function to send data using AJAX
    function sendData(data) {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',  // Mock endpoint for testing
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response) {
                console.log('Data sent successfully:', response);
                alert('Data sent successfully!');
                location.reload();  // Refresh the page after alert
            },
            error: function(error) {
                console.log('Error:', error);
                alert('Error sending data.');
            }
        });
    }

    // Send data when the button is clicked
    $('#send-data').click(function() {
        const message = $('#data-message').val();
        if (message) {
            const exampleData = {
                username: 'Rony58',  // Hardcoded username
                message: message
            };
            sendData(exampleData);
        } else {
            alert('Please enter a message.');
        }
    });
});