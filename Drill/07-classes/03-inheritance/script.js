/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        constructor(name){
            this.name = name
        }

        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Cat extends Animal {
        constructor(name){
            super(name)
        }
    }

    class Dog extends Animal {
        constructor(name){
            super(name)
        }
    }
    Animal.greeting = "Hello";
    const chat = new Cat("kitty")
    const chien = new Dog("Holly") 

    console.log(chat.sayHello())
    console.log(chien.sayHello())
    // your code here
})();
