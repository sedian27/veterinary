import animal from "../models/animal.js";

const register = async (req, res) => {
  const { name, race, weight, height, health, age } = req.body;
  if (!name || !race || !weight || !height || !age)
    return res.status(400).send({ message: "Incomplete data" });

  const schema = new animal({ name, race, weight, height, health, age });

  const result = await schema.save();

  if (!result)
    return res.status(500).send({ message: "Failed to register animal" });

  res.status(200).send({ result });
};

export default { register };
