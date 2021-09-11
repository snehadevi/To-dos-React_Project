const users = [
  {
    _id: "266c0408e4ad170a02a2d6f63763f4",
    username: "Istiak Shihab",
    email: "shihab@gmail.com",
    todo: "javascipt essential - 1",
  },
  {
    _id: "266c0408e4ad170a02a2d6f63763f4",
    username: "Sowmen Das",
    email: "sowmen@gmail.com",
    todo: "javascipt essential - 2",
  },
  {
    _id: "266c0408e4ad170a02a2d6f63763f4",
    username: "Satabdi Das",
    email: "satabdi@gmail.com",
    todo: "javascipt essential - 3",
  },
  {
    _id: "266c0408e4ad170a02a2d6f63763f4",
    username: "Bithi Saha",
    email: "bithi@gmail.com",
    todo: "javascipt essential - 4",
  },
  {
    _id: "266c0408e4ad170a02a2d6f63763f4",
    username: "Milla Rahman",
    email: "milla@gmail.com",
    todo: "javascipt essential - 5",
  },
  {
    _id: "266c0408e4ad170a02a2d6f63763f4",
    username: "Purna Mitro",
    email: "shihab@gmail.com",
    todo: "javascipt essential - 6",
  },
  {
    _id: "266c0408e4ad170a02a2d6f63763f4",
    username: "Ronju Talukdar",
    email: "ronju@gmail.com",
    todo: "javascipt essential - 5 & 6",
  },
  {
    _id: "266c0408e4ad170a02a2d6f63763f4",
    username: "Linok Ahmed",
    email: "linkon@gmail.com",
    todo: "javascipt essential - 1 & 2",
  },
  {
    _id: "266c0408e4ad170a02a2d6f63763f4",
    username: "Shahriar Alom",
    email: "shahriar@gmail.com",
    todo: "javascipt essential - 3 & 4",
  },
  {
    _id: "266c0408e4ad170a02a2d6f63763f4",
    username: "Karim Hasan",
    email: "karim@gmail.com",
    todo: "javascipt essential - 2 & 3",
  },
];

export function getUsers() {
  return users;
}

export function getUser(id) {
  return users.find((u) => u._id === id);
}

export function saveUser(user) {
  let userinfo = users.find((u) => u._id === user.id) || {};
  userinfo.username = user.username;
  userinfo.email = user.email;
  userinfo.todo = user.todo;

  if (!userinfo._id) {
    userinfo._id = Date.now().toString();
    users.push(userinfo);
  }
}

export function deleteMovie(id) {
  let userinfo = users.find((u) => u._id === id);
  users.splice(users.indexOf(userinfo), 1);
  return userinfo;
}
