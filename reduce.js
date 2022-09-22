const people = [
    { name: 'jorge', lastName: 'blanco', salary: '1000000', city: 'Santiago', area: 'IT', age: '28', active: true },
    { name: 'ana', lastName: 'izarra', salary: '2500000', city: 'Santiago', area: 'IT', age: '31', active: true },
    { name: 'agustin', lastName: 'carvajal', salary: '1750000', city: 'Santiago', area: 'RH', age: '35', active: true },
    { name: 'daniela', lastName: 'osorio', salary: '800000', city: 'Santiago', area: 'RH', age: '20', active: true },
    { name: 'jocelyn', lastName: 'bustamante', salary: '3000000', city: 'Santiago', area: 'RH', age: '43', active: true },
    { name: 'miguel', lastName: 'almagro', salary: '1200000', city: 'Santiago', area: 'IT', age: '40', active: true },
    { name: 'pedro', lastName: 'claro', salary: '1000000', city: 'Santiago', area: 'RH', age: '27', active: false },
    { name: 'michael', lastName: 'lara', salary: '800000', city: 'Santiago', area: 'Staff', age: '24', active: true },
    { name: 'susana', lastName: 'letelier', salary: '700000', city: 'Remote', area: 'IT', age: '23', active: false }
  ];

  const salarySum = (previusValue , currentValue) => (Number(previusValue) + Number(currentValue.salary))
  console.log(people.reduce(salarySum, 0))