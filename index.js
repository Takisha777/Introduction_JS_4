for (let i = 0; i < 3; i += 1) {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать1111, ${newStudent}!`)
    }
}
let n = 0;
while (n<3){
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать2222, ${newStudent}!`)
    }
    n++;
}

let m = 0;
do {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать 3333, ${newStudent}!`)
    }
    m++;
} while (m<3);