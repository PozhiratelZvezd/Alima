class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    isAdult() {
      if (this.age >= 18) {
        return `${this.name} является взрослым.`;
      } else {
        return `${this.name} не является взрослым.`;
      }
    }
  }

  const name = prompt("Введите имя:");
  const age = parseInt(prompt("Введите возраст:"), 10); 
  
  const person = new Person(name, age);

  console.log(person.isAdult());
  