// SOAL NOMOR 1 
// JAWABAN
console.log('<--- SOAL NOMOR 1 --->')
const newFunction = (nama) => { return '${nama}'; }
console.log('William Imoh')


/* const newFunction = function (Name) => { return 
    return {
      
      fullName: function(){
        console.log(Name)
        return 
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName()  */

// SOAL NOMOR 2 
// JAWABAN
console.log('<--- SOAL NOMOR 2 --->')
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!",
}

const{firstName,lastName,destination,occupation,spell} = newObject
console.log(firstName, lastName, destination, occupation)

// SOAL NOMOR 3 
// JAWABAN
console.log('<--- SOAL NOMOR 3 --->')
// spread operator
const west = ['Will', 'Chris', 'Sam', 'Holly']
const east = ['Gill', 'Brian', 'Noel', 'Maggie']

const combined = [...west, ...east]
console.log(combined) 
