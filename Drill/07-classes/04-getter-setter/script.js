/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
        }
    set name(test){
        let ret = test.split(" ");
        this.firstname = ret[0] || " ";
        this.lastname = ret[1] || " ";
        console.log(ret[0] + ret[1])
    }
    get name(){
    return this.fullName();
}

    fullName(){
        return this.firstname + this.lastname
    }
}

    let people = new Person("Marie","Dupont");
    console.log(people.name);
    people.name = "Jean dupont";
    
    
    // your code here
})();
