const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3000;

let students = [
    { id: 1, name: 'Mwangi Kennedy', course: 'Front Development', age: 22 },
    { id: 2, name: 'Ann Wangechi', course: 'Nursing', age: 23},
    { id: 3, name: 'Harriet Mueni', course: 'Business Information Technology', age: 21 }
];

app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {

    const newStudent = req.body;

    students.push(newStudent);

    res.json({
        message: 'Student added successfully',
        student: newStudent

    });
    if (!newStudent.name || !newStudent.course) {
    return res.status(400).json({
        message: 'Name and course are required please'
    });
}

});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});