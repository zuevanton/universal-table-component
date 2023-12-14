interface User {
  id: string
  firstName: string
  lastName: string
  score: number
  birthDate: Date
}

export const columns = [
  {
    name: 'name',
    render: (item: User) => item.firstName + ' ' + item.lastName
  },
  {
    name: 'age',
    render: (item: User) => 2023 - item.birthDate.getFullYear()
  },
  {
    name: 'score',
    render: (item: User) => <strong>{item.score}</strong>,
  }
]

export const Users: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Johnson',
    score: 84,
    birthDate: new Date('08-12-1992'),
  },
  {
    id: '2',
    firstName: 'Emily',
    lastName: 'Taylor',
    score: 39,
    birthDate: new Date('05-21-1987'),
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Moore',
    score: 56,
    birthDate: new Date('12-09-2000'),
  },
  {
    id: '4',
    firstName: 'Sophia',
    lastName: 'Williams',
    score: 73,
    birthDate: new Date('10-02-1985'),
  },
  {
    id: '5',
    firstName: 'David',
    lastName: 'Brown',
    score: 92,
    birthDate: new Date('01-11-1999'),
  },
  {
    id: '6',
    firstName: 'Emma',
    lastName: 'Davis',
    score: 12,
    birthDate: new Date('04-04-1978'),
  },
  {
    id: '7',
    firstName: 'Alice',
    lastName: 'Smith',
    score: 68,
    birthDate: new Date('10-08-1996'),
  },
  {
    id: '8',
    firstName: 'Bob',
    lastName: 'Wilson',
    score: 45,
    birthDate: new Date('05-10-2002'),
  },
  {
    id: '9',
    firstName: 'Olivia',
    lastName: 'Jones',
    score: 77,
    birthDate: new Date('03-07-1990'),
  },
  {
    id: '10',
    firstName: 'Daniel',
    lastName: 'Miller',
    score: 29,
    birthDate: new Date('12-03-1975'),
  },
  {
    id: '11',
    firstName: 'Jhon',
    lastName: 'Taylor',
    score: 88,
    birthDate: new Date('05-09-1983'),
  },
  {
    id: '12',
    firstName: 'Olivia',
    lastName: 'Wilson',
    score: 50,
    birthDate: new Date('8-06-2003'),
  },
  {
    id: '13',
    firstName: 'Michael',
    lastName: 'Jones',
    score: 63,
    birthDate: new Date('3-01-1998'),
  },
  {
    id: '14',
    firstName: 'Sophia',
    lastName: 'Smith',
    score: 41,
    birthDate: new Date('02-10-1980'),
  },
  {
    id: '15',
    firstName: 'David',
    lastName: 'Moore',
    score: 95,
    birthDate: new Date('12-12-1994'),
  }
]