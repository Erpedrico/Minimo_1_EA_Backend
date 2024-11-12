import { valoracionesofDB } from "../modelos/types_d_valoraciones";

export const getEntries = {
    getAll: async () => {
        return await valoracionesofDB
          .find()
          .populate('owner')
          .populate('experiencia')
          .populate('vino')
          .sort({ likes: -1 }); // Ordena por likes en orden descendente
      },
    findById: async(id:string)=>{
        return await valoracionesofDB.findById(id);
    },
    findAllAll: async(id:string)=>{
        return await valoracionesofDB.findById(id).populate('owner').populate('experiencia').populate('vino');
    },
    addWine: async(idVal:string,idWine:string)=>{
        return await valoracionesofDB.findByIdAndUpdate(idVal,{$addToSet:{vino:idWine}});
    },
    delWine: async(idVal:string,idWine:string)=>{
        return await valoracionesofDB.findByIdAndUpdate(idVal,{$pull:{vino:idWine}});
    },
    create: async(entry:object)=>{
        return await valoracionesofDB.create(entry);
    },
    update: async(id:string,body:object)=>{
        console.log(body);
        return await valoracionesofDB.findByIdAndUpdate(id,body,{$new:true});
    },
    delete: async(id:string)=>{
        return await valoracionesofDB.findByIdAndDelete(id);
    }
}