import { MongoClient } from "mongodb";

export async function getClient() {
  const client = await MongoClient.connect(
    "mongodb+srv://itis_suraj:heMSHqF7dOCr5BRk@adminCredentials.dzhmuw3.mongodb.net/adminCredentials?retryWrites=true&w=majority"
  );
  return client;
}
