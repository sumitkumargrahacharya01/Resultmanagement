const BASE_URL = "http://localhost:8081";

// LOGIN
function login() {
    const username = username.value;
    const password = password.value;
    const role = role.value;

    let url = role === "admin"
        ? "/api/login/admin"
        : "/api/login/student";

    fetch(BASE_URL + url, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(
            role === "admin"
            ? {username, password}
            : {rollNo: username, password}
        )
    })
    .then(res => res.text())
    .then(r => {
        if (r === "SUCCESS")
            window.location.href = role === "admin"
                ? "admin.html"
                : "student.html";
        else alert("Invalid Login");
    });
}

// NAVIGATION
function openAddStudent(){location.href="addStudent.html";}
function openEnterMarks(){location.href="enterMarks.html";}
function openViewResults(){location.href="viewResults.html";}

// ADD STUDENT
function addStudent() {
    fetch(BASE_URL + "/api/students/add", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:name.value,
            rollNo:rollNo.value,
            branch:branch.value,
            semester:semester.value,
            password:"stud123"
        })
    }).then(r=>r.text()).then(alert);
}

// ADD MARKS
function addMarks() {
    fetch(BASE_URL + "/api/results/add", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            student:{id:sid.value},
            subject:{id:subid.value},
            marks:marks.value,
            grade:"A"
        })
    }).then(r=>r.text()).then(alert);
}

// VIEW RESULT
function viewResult() {
    fetch(BASE_URL + "/api/results/" + roll.value)
    .then(r=>r.json())
    .then(d=>output.innerText = JSON.stringify(d,null,2));
}