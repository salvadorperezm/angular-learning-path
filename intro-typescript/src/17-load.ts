import _ from 'lodash';

const data = [
  {
    username: 'jerry',
    role: 'admin'
  },
  {
    username: 'rick',
    role: 'seller'
  },
  {
    username: 'morty',
    role: 'seller'
  },
  {
    username: 'beth',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);

const test = 1 + '1';
console.log(test);
