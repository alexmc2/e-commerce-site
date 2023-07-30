import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Smith',
    email: 'john@john.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Sarah Brown',
    email: 'sarah@sarah.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;


