type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const currentUser: User = {
    name: initialValues.name || "DefaultName",
    surname: initialValues.surname || "DefaultSurname",
    email: initialValues.email || "DefaultEmail",
    password: initialValues.password || "DefaultPassword",
  };

  return currentUser;
}

const updatedUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
console.log(updatedUser);
