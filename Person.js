class Person {
    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    bodyMassIndex(){
        var heightDividedByHundred = this.height / 100.0;
        return this.weight / ( heightDividedByHundred * heightDividedByHundred );
    }

    becomeOlder() {
        this.age = this.age + 1;
    }

    printPerson() {
        alert(this.name + ", age " + this.age + " years");
    }

}

function main() {
    var giant = new Person("Garruda", 123, 543, 100);
    var regular = new Person("MJ", 34, 200, 64);
    alert(giant.bodyMassIndex());
    alert(regular.bodyMassIndex());

    var personArr = [giant, regular];
   personArr[1].printPerson();




}

main();