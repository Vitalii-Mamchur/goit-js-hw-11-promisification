const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
      )
      res(updatedUsers);
    }, 0);
  });
};

const logger = updatedUsers => console.table(updatedUsers);

// Вызовы функции для проверки
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);