// arrays objects and functions
//[] 
//<>

const people = [
  { name: 'jorge', lastName: 'blanco', salary: '1000000', city: 'Santiago', area: 'IT', age: '28' },
  { name: 'ana', lastName: 'izarra', salary: '2500000', city: 'Santiago', area: 'IT', age: '31' },
  { name: 'agustin', lastName: 'carvajal', salary: '1750000', city: 'Santiago', area: 'RH', age: '35' },
  { name: 'daniela', lastName: 'osorio', salary: '800000', city: 'Santiago', area: 'RH', age: '20' },
  { name: 'jocelyn', lastName: 'bustamante', salary: '3000000', city: 'Santiago', area: 'RH', age: '43' },
  { name: 'miguel', lastName: 'almagro', salary: '1200000', city: 'Santiago', area: 'IT', age: '40' },
  { name: 'pedro', lastName: 'claro', salary: '1000000', city: 'Santiago', area: 'RH', age: '27' },
  { name: 'michael', lastName: 'lara', salary: '800000', city: 'Santiago', area: 'Staff', age: '24' },
  { name: 'susana', lastName: 'letelier', salary: '700000', city: 'Remote', area: 'IT', age: '23' }
];

//Sacar el sueldo promediod de las personas dentro del arreglo people

const averageSalary = (employees) => {

  //recorrer el arreglo
  //sumar el salario miestras se este recorriendo y guardar en variable
  //calcular el promedio, tenemos que dividir la suma entre la cantidad de personas
  let total = 0

  for (const employee of employees) {
    total += (Number(employee.salary));
  }
  return total/employees.length;
}

//averageSalary(people)
let result = averageSalary(people)
console.log(result)

const earnMoreThan15 = (employees = [])  => {
  //recorrer el arreglo
  //preguntar quien gana mas o igual a millon y medio
  //Guardar sus nombres
  //Devolver la lista de empleados nombre y apellido

  let arrResult = [] 
  for (const employee of employees) {
    if (Number(employee.salary) >= 1500000){
      arrResult.push(employee.name + ' ' + employee.lastName)
    }
  }
  return arrResult;
}

let list = earnMoreThan15(people)
console.log(list.length)

