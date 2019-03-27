'use strict';

// create object

function createMyObject () {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: () => {
      return 'Hello';
    }
  };
}

// update an object

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

const myObj = {
  name: 'Elan Green',
  city: 'Austin'
};

// make a person object and use self-reference to report the full name

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function(){
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

// delete properties in an obj

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

// make student report with standard for loop

function makeStudentReport(data){
  let result = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    result.push(`${item.name}: ${item.grade}`);
  }
  return result;
}

// make student report with slightly more succint forEach

function makeReportForEach(data) {
  let result = [];
  data.forEach(item => {
    result.push(`${item.name}: ${item.grade}`);
  });
  return result;
}

// enroll in summer school function

function enrollInSummerSchool(students) {
  students.forEach(student => {
    student.status = 'In Summer school';
  });
  return students;
}

// findById function

function findById(items, idNum) {
  items.forEach(item => {
    if (item.id === idNum) {
      console.log(item);
    }
  });
}

// validate object keys

const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  // your code goes here

}