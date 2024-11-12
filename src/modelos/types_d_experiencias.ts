import { ObjectId, model, Schema } from "mongoose";

export interface experienciasInterface{
    titulo: string,
    owner: ObjectId,
    participants: ObjectId[],
    description: string,
    tipo: string
}

export const experienciasSchema = new Schema<experienciasInterface>({
    titulo: String,
    owner: {type: Schema.Types.ObjectId, ref:'user'},
    participants: [{type: Schema.Types.ObjectId, ref:'user'}],
    description: String,
    tipo: String
})

export const experienciasofDB = model<experienciasInterface>('experiencias',experienciasSchema)