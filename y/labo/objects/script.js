
let noms = ["Bob","Franck","John"];
let ages =[20,30,40]
let personnages =[];

    for(let index in noms){
let person ={
   
}
person.dateDeCreation = new Date()
person.nom = noms[index]
person.age = ages[index]
personnages.push(person)
    }
    
    console.log(personnages)
   