import { faker } from "@faker-js/faker";
import cuid from "cuid";

const generateUsers = () => {
  const user = () => {
    return {
      id: cuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
      level: Math.floor(Math.random() * (999 - 1)) + 1,
    };
  };

  const users = Array.from({ length: 50 }, user).sort((a, b) => {
    return b.level - a.level;
  });

  return users;
};

export default generateUsers;

const user = generateUsers()[0];

export type User = typeof user;
