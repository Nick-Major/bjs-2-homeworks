function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
}

new Student("John", "male", 21);
new Student("David", "male", 22);
new Student("Rebecca", "female", 19);

let student1 = new Student("John", "male", 21);
let student2 = new Student("David", "male", 22);
let student3 = new Student("Rebecca", "female", 19);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
    if (this.marks !== undefined) {
        this.marks.push(...marks)
    }
}

Student.prototype.getAverage = function() {
	let sum = 0;
	let avg = 0;
    if (this.marks === undefined || this.marks.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
            avg = sum / this.marks.length;
        }
        return avg;

    }
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
}
