//oop - class - object

// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound() {
//     console.log(`The animal is making sound`);
//   }
// }

// const dog = new Animal("German Shepherd", "Dog", "Bark");

// console.log(dog);

// const cat = new Animal("Persian", "Cat", "Meow");
// console.log(cat.makeSound());

class Parent {
  getSleep(numOfHours: number) {
    {
      numOfHours;
    }
  }
}

// class Student {
//   name: string;
//   age: number;
//   address: string;
//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   getSleep(numOfHours: number) {
//     console.log(`${this.name} is sleeping ${numOfHours}`);
//   }
// }

// const student1 = new Student("Anik", 24, "Dhaka");
// console.log(student1);
// student1.getSleep(15);

// class Teacher {
//   name: string;
//   age: number;
//   address: string;
//   designation: string; //extra freeking proprerty
//   constructor(name: string, age: number, address: string, designation: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.designation = designation;
//   }

//   getSleep(numOfHours: number) {
//     console.log(`${this.name} is sleeping ${numOfHours}`);
//   }

//   takeClass(numOfClass: number) {
//     console.log(`${this.name} eto ghonta class nen ${numOfClass}`);
//   }
// }

// const teacher1 = new Teacher("Anik", 24, "Dhaka", "husband");
// console.log(teacher1);
// teacher1.takeClass(15);

//type guard

//in typeof

const add = (num1: number | string, num2: number | string) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    num1.toString() + num2.toString;
  }
};

add(2, 2);
add(2, "2");

//in guard

// type NormalUser = {
//   name: string;
// };

// type AdminUser = {
//   name: string;
//   role: "Admin";
// };

// const getUserInfo = (user: NormalUser | AdminUser) => {
//   console.log(user);
// };

// getUserInfo({ name: "Normal" });
