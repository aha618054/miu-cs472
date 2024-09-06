//------------------1-----------------------
var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduating ".concat(this.dept, " ").concat(year, " students"));
    };
    return University;
}());
var miu = new University("MIU", "MSD");
console.log('------------------1-----------------------');
miu.graduation(2021);
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log('------------------2-----------------------');
console.log(myself);
function describePerson(person) {
    var studentStatus = person.isStudent ? "a student" : "not a student";
    return "".concat(person.name, " is ").concat(person.age, " years old and is ").concat(studentStatus, ".");
}
var person = { name: "Alice", age: 25, isStudent: true };
console.log('------------------3-----------------------');
console.log(describePerson(person));
