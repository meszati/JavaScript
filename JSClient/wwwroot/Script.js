let schools = [];

let schoolIdToUpdate = -1;

getdata();

async function getdata() {
    await fetch('http://localhost:9712/school')
        .then(x => x.json())
        .then(y => {
            schools = y;
            //console.log(schools);
            display();
        });
}

function display() {
    document.getElementById('resultarea').innerHTML = "";
    schools.forEach(t => {
        document.getElementById('resultarea').innerHTML +=
            "<tr><td>" + t.schID + "</td><td>" + t.name + "</td><td>" + t.headmaster + "</td><td>" + t.location + "</td><td>" + t.phone + 
        "</td><td>" + `<button type="button" onclick="remove(${t.schID})">Delete</button>` + `<button type="button" onclick="showupdate(${t.schID})">Update</button>` + "</td></tr> ";
    });
}

function showupdate(id) {
    document.getElementById('updateformdiv').style.display = 'flex';
    document.getElementById('schoolnameupdate').value = schools.find(t => t['schID'] == id)['name'];
    document.getElementById('headmasterupdate').value = schools.find(t => t['schID'] == id)['headmaster'];
    document.getElementById('locationupdate').value = schools.find(t => t['schID'] == id)['location'];
    document.getElementById('phoneupdate').value = schools.find(t => t['schID'] == id)['phone'];
    schoolIdToUpdate = id;
}

function update() {
    document.getElementById('updateformdiv').style.display = 'none';
    let updatename = document.getElementById('schoolnameupdate').value;
    let updateheadmaster = document.getElementById('headmasterupdate').value;
    let updatelocation = document.getElementById('locationupdate').value;
    let updatephone = document.getElementById('phoneupdate').value;

    fetch('http://localhost:9712/school', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {               
                name: updatename,
                headmaster: updateheadmaster,
                location: updatelocation,
                phone: updatephone,
                schID: schoolIdToUpdate
            }),
    })
        .then(response => response)
        .then(data => {
            console.log('Success:', data);
            getdata();
        })
        .catch((error) => { console.error('Error:', error); });
}


function remove(id) {
    fetch('http://localhost:9712/school/' + id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json', },
        body: null })
        .then(response => response)
        .then(data => {
            console.log('Success:', data);
            getdata();
        })
        .catch((error) => { console.error('Error:', error); });
}

function create() {
    let thisname = document.getElementById('schoolname').value;
    let thisheadmaster = document.getElementById('headmaster').value;
    let thislocation = document.getElementById('location').value;
    let thisphone = document.getElementById('phone').value;

    fetch('http://localhost:9712/school', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                name: thisname,
                headmaster: thisheadmaster,
                location: thislocation,
                phone: thisphone
            }),
    })
        .then(response => response)
        .then(data =>
        {
            console.log('Success:', data);
            getdata();
        })
        .catch((error) => { console.error('Error:', error); });
}