const users = [
  {
    _id: "266c0408e4ad170a02a2d6f63763f4",
    name: "Istiak Shihab",
    email: "shihab@gmail.com",
    todo: "javascipt essential - 1",
  },
  {
    _id: "e7e5a3482df77e783ab90b935f7b66",
    name: "Sowmen Das",
    email: "sowmen@gmail.com",
    todo: "javascipt essential - 2",
  },
  {
    _id: "644d1f485e5cfcad2b334b90bd023b",
    name: "Satabdi Das",
    email: "satabdi@gmail.com",
    todo: "javascipt essential - 3",
  },
  {
    _id: "a149a8a892d6772ae1dc26519f68aa",
    name: "Bithi Saha",
    email: "bithi@gmail.com",
    todo: "javascipt essential - 4",
  },
  {
    _id: "47cc0ab8937fdbbfd41499cd855747",
    name: "Milla Rahman",
    email: "milla@gmail.com",
    todo: "javascipt essential - 5",
  },
  {
    _id: "d3029c0077985152572bc321a1b177",
    name: "Purna Mitro",
    email: "shihab@gmail.com",
    todo: "javascipt essential - 6",
  },
  {
    _id: "027a14b189c8b4cf83db7090366abf",
    name: "Ronju Talukdar",
    email: "ronju@gmail.com",
    todo: "javascipt essential - 5 & 6",
  },
  {
    _id: "f4b67ac86b4a16b36bae6793f73654",
    name: "Linkon Ahmed",
    email: "linkon@gmail.com",
    todo: "javascipt essential - 1 & 2",
  },
  {
    _id: "61ed551b0af9300b8d129a490b7c61",
    name: "Shahriar Alom",
    email: "shahriar@gmail.com",
    todo: "javascipt essential - 3 & 4",
  },
  {
    _id: "e3c13d18260c8a09079c57520283b2",
    name: "Karim Hasan",
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
  userinfo.name = user.name;
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
