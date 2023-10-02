import { users } from "../Data";

const getUser = id => {
  const user = users.find(user => user.id === id);
  return user;
};

export default getUser;
