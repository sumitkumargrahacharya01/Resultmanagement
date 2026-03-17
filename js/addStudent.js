const BASE_URL = "http://localhost:8081";

function addStudent() {

    const name = document.getElementById("name").value;
    const rollNo = document.getElementById("rollNo").value;
    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const password = document.getElementById("password").value;

    if (name === "" || rollNo === "" || branch === "" || semester === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    const data = {
        name: name,
        rollNo: rollNo,
        branch: branch,
        semester: semester,
        password: password
    };

    fetch(BASE_URL + "/api/students/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(result => {
        alert(result);
    })
    .catch(err => {
        alert("Error adding student");
        console.error(err);
    });
}