/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window -> the value of 'this' equals the window/console Object; global scope 
* 2. Implicit -> using '.' to access things in the object, but outside of the function within the object 
* 3. New -> creates and returns a specific instance of an object
* 4. Explicit -> whenever '.call(obj)' or '.apply(obj)' is used, this is explicitly defined 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function window() {
//     // this refers to window 
//     console.log(this); 
// }

// Principle 2

// code example for Implicit Binding

const myObject = {
    name: "Ya'Kuana Davis",
    college: "Bowdoin",
    language: "Chinese and English", 
    introduction: function intro() {

        // refers to myObject 
        console.log(this); 

        // Hello! My English name is Ya'Kuana Davis. I can speak Chinese and English. 
        // I have been studying Chinese at Bowdoin college for a little over a year. 
        console.log(`您好！我的英文名字是${this.name}。我可以说${this.language}。我在${this.college}大学学汉语学了一年多了。`);
    }
}

myObject.introduction(); 

// Principle 3

// code example for New Binding

function Student(name, college, language) {
    // this refers to the specific instance of the object created 
    this.name = name; 
    this.language = language; 
    this.college = college; 
    this.introduction = () => {

        // Hello! My English name is "this.name". I can speak Chinese. 
        // I have been studying Chinese at Bowdoin college for a little over a year. 
        console.log(`Hello！My name is ${this.name}. I can speak ${this.language}. I attend ${this.college}.`)
    }
}

const me = new Student("Ya'Kuana Davis", "Bowdoin College", "English and Chinese"); 
const myFriend = new Student("Mian Brandon", "Texas Tech University", "English"); 

me.introduction(); 
myFriend.introduction(); 

// Principle 4

// code example for Explicit Binding

// call and apply make this explicitly defined 
me.introduction.call(myFriend); 
myFriend.introduction.apply(me); 
