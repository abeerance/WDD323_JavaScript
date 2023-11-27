
const students = [
  {
    name: {
      first: 'Gian-Carlo',
      last: 'Delphis'
    },
    age: 29,
    eye_color: 'green',
    catch_phrase: 'Heavy Breathing!!!!!!!',
    bestanden: true,
    message: function () {
      alert('Hello my name is ' + this.name.first + " and I am " + this.age + " years old :D")
    }
  },
  {
    name: {
      first: 'Anna',
      last: 'Helfferich'
    },
    age: 23,
    eye_color: 'green',
    catch_phrase: 'Nett Sein',
    bestanden: true,
    message: function () {
      alert('Hello my name is ' + this.name.first + " and I am " + this.age + " years old :D")
    }
  }
]


students[0].message()