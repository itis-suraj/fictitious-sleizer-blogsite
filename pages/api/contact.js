import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() === "" ||
      !message ||
      !message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    const date = new Date();

    const newMessage = {
      email,
      name,
      message,
      date,
    };
    let client;

    const mongodbUrl = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.dzhmuw3.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(mongodbUrl);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}
export default handler;

// "mongodb+srv://itis_suraj:heMSHqF7dOCr5BRk@messages.dzhmuw3.mongodb.net/?retryWrites=true&w=majority"
