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

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props


class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

speak() {
    return `Hello, my name is ${this.name}, and I am from ${this.location}`;
}

}

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
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



// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
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
        return `${this.name} took damage.`;
      };

    PRAssignment() {
        return `${this.name} has submitted a PR for ${this.subject}`;
      };
    
    springChallenge() {
        return `student.name has begun sprint challenge on {subject}`;
      };

}
// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);


    }
    standUp() {
        return `${this.name} took damage.`;
      };

      debugsCode() {
        return `${this.name} debugs ${this.name}'s code on ${this.subject}
        `;
      };

}

// OBJECTS

const charlie = new Student({
      name: 'Charlie',
      location: 'Brown',
      age: 20,
      className: WEBPT7,
      favLanguage: 'CSS',
      specialty: 'Front-end',
      catchPhrase: `Good Grief!`
});

const snoopy = new Instructor({
    name: 'Snoopy',
    location: 'Brown',
    age: 45,
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: `The more you learn, the more you love!`
});

const linus = new Instructor({
    name: 'Linus',
    location: 'Van Pelt',
    gradClassName: 'WEB16',
    className: 'WEBPT6',
    age: 21,
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `I need my blanket!`
});

const lucy = new ProjectManager({
    name: 'Lucy',
    location: 'Van Pelt',
    gradClassName: 'CS14',
    className: WEB,
    age: 25,
    favLanguage: 'Python',
    specialty: 'CS',
    catchPhrase: `Five cents please!`
});






// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.

