document.getElementById('retrieveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nationalID = document.getElementById('nationalID').value;
    fetch(`data/${nationalID}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = `Username: ${data.username}, UserCode: ${data.usercode}`;
        })
        .catch(error => {
            document.getElementById('result').innerHTML = 'No data found for this National ID.';
        });
});
