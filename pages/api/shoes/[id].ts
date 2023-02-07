import {NextApiRequest, NextApiResponse} from "next"
import DB from '@database'

const idShoes = async(request:NextApiRequest, response:NextApiResponse)=>{
    const db  = new DB()
    const id = request.query.id
    
    const idEntry = await db.getById(id as string)

    // response.statusCode = 200
    // response.setHeader('Content-type', 'application/json')
    // response.end(JSON.stringify({data : idEntry}))

    response.status(200).json(idEntry)
}
export default idShoes