import { connectToDatabase } from '@/lib/mongoClient'
import { NextRequest, NextResponse } from 'next/server'

export type Driver = {
  firstName: string
  lastName: string
  nickname?: string
  email?: string
}

export async function GET(req: NextRequest) {
  const db = await connectToDatabase()
  const drivers = await db.collection('drivers').find({}).toArray()

  return NextResponse.json(drivers)
}

export async function POST(req: NextRequest) {
  const driver = (await req.json()) as Driver
  const db = await connectToDatabase()

  db.collection('drivers').insertOne(driver)
}
