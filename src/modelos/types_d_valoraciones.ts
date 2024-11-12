import { ObjectId, model, Schema } from "mongoose";

export interface valoracionesInterface{
    owner: ObjectId,
    experiencia: ObjectId,
    vino: ObjectId[],
    likes: number,
    dislikes: number,
    comments: string[]
}

export const valoracionesSchema = new Schema<valoracionesInterface>({
    owner: {type: Schema.Types.ObjectId, ref:'user'},
    experiencia:  {type: Schema.Types.ObjectId, ref:'experiencias'},
    vino:  [{type: Schema.Types.ObjectId, ref:'wine'}],
    likes: Number,
    dislikes: Number,
    comments: [String]
})

export const valoracionesofDB = model<valoracionesInterface>('valoracion',valoracionesSchema)