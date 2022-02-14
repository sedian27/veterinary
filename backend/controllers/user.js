import user from "../models/user.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).send({ message: "Incomplete Data" });

  let schema = new user({ name, email, password });

  const result = await schema.save();

  if (!result)
    return res.status(500).send({ message: "Failed to register User" });

  return res.status(200).send({ result });
};

export default { register };
