const course = {
    courseName: "Hack with Sayed",
    coursePrice: 3599,
    courseInstructor: "Bitan Beta",

}

// course.courseInstructor


// Object de-structure
const {courseInstructor} = course  // another method to fetch value
console.log(courseInstructor);

// we can give a abbreviation name of any keys name
// just use a colon(:) and give the name.
const {coursePrice: Price} = course
console.log(Price);



// // to decleare API
// {
//     "name": "SAYED",
//     "age": 6,
//     "class": "5th",
// }

// NOTE :-> keys are in string format.

// API are present as an array.
[
    {},
    {},
    {}
]