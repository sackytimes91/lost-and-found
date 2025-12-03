// Fetch data from a mock API

fetch('project data.json')

.then(response => response.json())

.then(data => {

const tableBody = document.getElementById('data-table');

data.forEach(user => {

const row = document.createElement('tr');

row.innerHTML = `

<td>${user.Name}</td>

<td>${user.name}</td>

<td><a href="mailto:${user.email}">${user.email}</a></td>

<td>${user.company.name}</td>

`;

tableBody.appendChild(row);

});

})

.catch(error => console.error('Error fetching data:', error));