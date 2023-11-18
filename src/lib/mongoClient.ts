import { MongoClient, Db } from 'mongodb'

const dbName = 'formulaBisaria'
const uri = process.env.MONGODB_URI
const options = {}

let db: Db | undefined

export async function connectToDatabase() {
  if (!uri) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local',
    )
  }

  if (db) {
    return db
  }

  const connection = await new MongoClient(uri, options).connect()
  db = connection.db(dbName)
  return db
}
