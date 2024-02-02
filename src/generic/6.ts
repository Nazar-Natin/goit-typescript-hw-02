type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const defaultUserValues: User = {
  name: "DefaultName",
  surname: "DefaultSurname",
  email: "DefaultEmail",
  password: "DefaultPassword",
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const currentUser: User = {
    name: initialValues.name || defaultUserValues.name,
    surname: initialValues.surname || defaultUserValues.surname,
    email: initialValues.email || defaultUserValues.email,
    password: initialValues.password || defaultUserValues.password,
  };

  return currentUser;
}

const updatedUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
console.log(updatedUser);
