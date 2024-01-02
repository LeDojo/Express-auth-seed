const store = async (req, res) => {
  try {
    const user = await {
      email: "test@hotmail.fr",
      password: "azerty",
    };
    res.send(user);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { store };
