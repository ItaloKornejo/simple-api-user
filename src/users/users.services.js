//? File's imports
const userControllers = require("./users.controllers");

const getAllUsers = (req, res) => {
  const data = userControllers.findAllUsers();
  res.status(200).json(data);
};

const getUserById = (req, res) => {
  const id = req.params.id;
  const data = userControllers.findUserById(id);

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: "Invalid ID" });
  }
};

const createUser = (req, res) => {
  const { first_name, last_name, email,password,birthday } = req.body;
  if (email && password && userControllers.validateDate(birthday)) {
    const newUser = userControllers.createNewUser({ first_name, last_name, email,password,birthday });
    res.status(201).json({message: "Create user",newUser});
  } else {
    res.status(400).json({
            message: "Invalid Data User",
        });
  }
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const data = userControllers.findUserById(id);
  const { first_name, last_name} = req.body;
  if (data) {
    const modUser = userControllers.modifyUser(id,{first_name, last_name})
    res.status(200).json({message: "Update user",modUser});
  } else {
    res.status(404).json({ message: "Invalid ID" });
  }
}

const removeUser = (req, res) => {
  const id = req.params.id;
  const data = userControllers.findUserById(id);
  if (data) {
    const deleteUser = userControllers.deleteUser(id)
    res.status(200).json({ message: "Delete user",deleteUser});
  } else {
    res.status(404).json({ message: "Invalid ID" });
  }
}

module.exports = {
    getAllUsers,
    getUserById,
    removeUser,
    createUser,
    updateUser
}

