// Fetch data from a mock API

fetch('projectdata.json')

.then(response => response.json())

.then(data => {

const tableBody = document.getElementById('data-table');

data.forEach(user => {

const row = document.createElement('tr');

row.innerHTML = `
<td>${user.Name}</td>
<td>${user.Budget}</td>
<td>${user.Status}</td>
<td>${user.ProvinceID}</td> 
<td>${user["StartDate"]}</td>
<td>${user["EndDate"]}</td>
`;

tableBody.appendChild(row);
});

})

.catch(error => console.error('Error fetching data:', error));