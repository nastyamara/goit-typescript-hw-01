type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>): User {
  const registratedUser: User = {
    name: "John",
    surname: "Doe",
    email: "",
    password: "",
  };
  return { ...registratedUser, ...initialValues };
}

createOrUpdateUser({ 
  email: "user@mail.com", 
  password: "password123"
});