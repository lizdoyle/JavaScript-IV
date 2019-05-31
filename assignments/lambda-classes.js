// CODE here for your Lambda Classes

// pasted INSTRUCTIONS from README for guidance on structure

// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// base class - name age & location / speak method ( This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props).

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.subject = attributes.subject;

    }

speak() {
    return `Hello, my name is ${this.name}, and I am from ${this.location}`;
}

}

// #### Instructor - same attr as person
    // UNIQUE: specialty (what they are good at, favLanguate, catch phrase)

// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo() {
        return `Today we are learning about ${this.subject}`;
      };

      grade() {
        return `${student.name} receives a perfect score on {subject}'`;
      };

}


// #### Student - PERSON

// UNIQUE - previousBackground, className, favSubjects as an array

// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`


class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;

    }
    listsSubjects() {
        this.attributes.favSubjects.forEach(list => {
            return `list`;
        });
      };

    PRAssignment() {
        return `${this.name} has submitted a PR for ${this.subject}`;
      };
    
    springChallenge() {
        return `${this.name} has begun sprint challenge on ${this.subject}`;
      };

}
// #### Project Manager - exten Instructors

// UNIQUE - gradClassName, favInstructor

// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
        this.channel = attributes.channel;
    }
    standUp() {
        return `${this.name} announces to ${this.channel}, @channel standy times!​​​​​`;
      };

    debugsCode() {
        return `${this.name} debugs ${this.name}'s code on ${this.subject}
        `;
      };

}

// OBJECTS

// STUDENTS: 
const charlie = new Student({
      name: 'Charlie Brown',
      location: 'New York',
      age: 20,
      className: 'WEBPT7',
      previousBackground: 'Retail',
      favLanguage: 'CSS',
    //   added subject for students based on PRAssignment Method
      subject: 'React',
      favSubjects: ['HTML', 'CSS', 'JSX'],
      specialty: 'Front-end',
      catchPhrase: `Good Grief!`
});

const pigpen = new Student({
    name: 'Pigpen',
    location: 'Alabama',
    age: 23,
    className: 'DSPT7',
    previousBackground: 'Construction',
    favLanguage: 'Python',
    subject: 'Data Science',
    favSubjects: ['Python', 'Java', 'C'],
    specialty: 'Analysis',
    catchPhrase: `Dirt and dust is life`
});

const franklin = new Student({
    name: 'Franklin',
    location: 'Atlanta',
    age: 22,
    className: 'UXPT7',
    previousBackground: 'Chef',
    favLanguage: 'HTML',
  //   added subject for students based on PRAssignment Method
    subject: 'UX Design',
    favSubjects: ['HTML', 'CSS',],
    specialty: 'User Interface',
    catchPhrase: `Life is like a flexbox of boxes!`
});


// PM (PROJECT MANAGERS)

const snoopy = new ProjectManager({
    name: 'Snoopy',
    location: 'Coolsville',
    age: 35,
    channel: 'WEB',
    gradClassName: 'CS14',
    className: 'WEB20, WEBPT8',
    previousBackground: 'Coolest Dog',
    favInstructor: 'Linus VanPelt',
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: `The more you learn, the more you love!`
});

const lucy = new ProjectManager({
    name: 'Lucy VanPelt',
    location: 'Chicago',
    gradClassName: 'DS2',
    className: 'DSPT4',
    channel: 'DS',
    age: 25,
    favInstructor: 'Ms. Othmar',
    favLanguage: 'Python',
    favSubjects: ['Java', 'Algorithms', 'Statistics'],
    specialty: 'Computer Science',
    catchPhrase: `Five cents please!`
});
// INSTRUCTORS

const linus = new Instructor({
    name: 'Linus VanPelt',
    location: 'Chicago',
    gradClassName: 'CS14',
    className: 'WEB20, WEBPT8',
    age: 21,
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `I need my blanket!`
});

const othmar = new Instructor({
    name: 'Ms. Othmar',
    location: 'Pebblebrook',
    className: 'WEB20, WEBPT7',
    age: 47,
    favLanguage: 'Full Stack Developer',
    specialty: 'Everything',
    catchPhrase: `Womp Womp Womp Womp.`
});



// student consoles
console.log(charlie.springChallenge());
console.log(charlie.classname);
// console.log(pigpen.listsSubjects());
console.log(pigpen.previousBackground);
console.log(franklin.PRAssignment());
console.log(franklin.favSubjects);
// PM consoles
console.log(snoopy.gradClassName);
console.log(snoopy.standUp());
console.log(lucy.favInstructor);
console.log(lucy.debugsCode);
// instructor consoles
console.log(linus.specialty);
console.log(linus.catchPhrase);
// console.log(othmar.grade());
console.log(linus.demo());
console.log(othmar.favLanguage);






// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.

