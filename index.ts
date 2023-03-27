type HobbieType = {
  name: 'Feliz'   |   'Piriquitobas' 
  description: string;
}

type PersonConstructorType = {
  personName: string;
  personAge: number;
  personHobbies: Array<HobbieType>;
}

type PersonType = {
  name: string; 
  age: number;
  underage: boolean;
  hobbies: Array<HobbieType>;
}

function constructPerson(params: PersonConstructorType): PersonType {
  return {
    name: params.personName,
    age: params.personAge,
    underage: params.personAge < 18,
    hobbies: params.personHobbies
  }
}

const matheus: PersonConstructorType = {
  personName: 'Matheus Ribeiro',
  personAge: 25,
  personHobbies: [{
    name: 'Piriquitobas',
    description: 'Este hobbie consiste em chamar seus gatos de Piriquitobas.'
  }, {
    name: 'Feliz',
    description: 'Não ser.'
  }]
}

const person = constructPerson(matheus)

console.log(person)