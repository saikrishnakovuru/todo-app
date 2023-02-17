// let printProfile = () => {
//   for (let i = 0; i < 5; i++) {
//     console.log("calling print profile method");
//   }
// }
let asdf = ['a', 'd', 'w', 'q'];
asdf.forEach(mem => console.log(mem))

const Person = {
  name: 'sai',
  address: {
    street: '4 Florence',
    apt: 'Apt 1',
    Country: 'Us'
  },
  profiles: ['Twitter', 'Instagram'],
  printPerson: () =>
    Person.profiles.forEach(account => console.log(account))
}

export default function LearningJavaScript() {
  return (
    <div>
      Learning JavaScript
      <div>{Person.name}</div>
      <div>{Person.address.apt}</div>
      {/*<div>{Person.profiles[0]}</div>*/}
      {/*<div>{Person.printPerson}</div>*/}
      {/*<div>{Person.printPerson()}</div>*/}
    </div>
  );
}

Person.printPerson();