const students = [];

// Add student
const Add = () => {
    const first_name = document.getElementById("first_name").value.trim();
    const last_name = document.getElementById("last_name").value.trim();
    const country = document.getElementById("country").value;
    const score = Number(document.getElementById("score").value);

    if (!first_name || !last_name || !country || !score) {
        Swal.fire({
            icon: "error",
            title: "Please enter all student information!"
        });
        return;
    }

    students.push({ first_name, last_name, country, score });

    Swal.fire({
        icon: "success",
        title: "Student added successfully!"
    });

    // Clear form
    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("country").selectedIndex = 0;
    document.getElementById("score").value = "";
};

// View students
const View = () => {
    let html = `
    <thead class="table-info">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country</th>
            <th>Score</th>
        </tr>
    </thead>
    <tbody>
    `;

    students.forEach(stu => {
        html += `
        <tr>
            <td>${stu.first_name}</td>
            <td>${stu.last_name}</td>
            <td>${stu.country}</td>
            <td>${stu.score}</td>
        </tr>
        `;
    });

    html += "</tbody>";
    document.getElementById("show_stu").innerHTML = html;
};

// Search student
const Search = () => {
    const search = prompt("Enter first name to search:");
    if (!search) return;

    const found = students.filter(stu =>
        stu.first_name.toLowerCase().includes(search.toLowerCase())
    );

    if (found.length === 0) {
        Swal.fire({
            icon: "error",
            title: "Student not found!"
        });
        return;
    }

    Swal.fire({
        icon: "success",
        title: "Search successful!"
    });

    let html = `
    <thead class="table-info">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country</th>
            <th>Score</th>
        </tr>
    </thead>
    <tbody>
    `;

    found.forEach(stu => {
        html += `
        <tr>
            <td>${stu.first_name}</td>
            <td>${stu.last_name}</td>
            <td>${stu.country}</td>
            <td>${stu.score}</td>
        </tr>
        `;
    });

    html += "</tbody>";
    document.getElementById("show_stu").innerHTML = html;
};
