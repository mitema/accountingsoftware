import clientPromise from '../lib/mongodb'

export default async function handler(req:any, res:any){
    const client = await clientPromise;
}