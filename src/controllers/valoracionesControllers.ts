import { valoracionesInterface } from '../modelos/types_d_valoraciones'
import * as valoracionesServices from '../services/valoracionesServices'
import { Request, Response } from 'express'

export async function findAllValoraciones(_req:Request,res:Response):Promise<Response> {
    try{
        const valoraciones: valoracionesInterface[]|null = await valoracionesServices.getEntries.getAll()
        return res.json(valoraciones);
    } catch(e){
        return res.status(500).json({ e: 'Failed to find all experiencies' });
    }
}

export async function findValoracion(req:Request,res:Response):Promise<Response> {
    try{
        const valoraciones: valoracionesInterface|null = await valoracionesServices.getEntries.findById(req.params.id)
        return res.json(valoraciones);
    } catch(e){
        return res.status(500).json({ e: 'Failed to find valoracion' });
    }
}

export async function findValoracionPopulated(req:Request,res:Response):Promise<Response> {
    try{
        const valoraciones: valoracionesInterface|null = await valoracionesServices.getEntries.findAllAll(req.params.id)
    return res.json(valoraciones);
    } catch(e){
        return res.status(500).json({ e: 'Failed to find valoracion' });
    }
}

export async function createValoracion(req:Request,res:Response):Promise<Response> {
    try{
        const valoraciones: valoracionesInterface|null = await valoracionesServices.getEntries.create(req.body as object)
        return res.status(200).json(valoraciones)
    } catch(e){
        return res.status(500).json({ e: 'Failed to create valoraciones' });
    }
}

export async function addWinetoValoracion(req:Request,res:Response):Promise<Response> {
    try{
        const valoraciones: valoracionesInterface|null = await valoracionesServices.getEntries.addWine(req.params.idVal,req.params.idWine)
        return res.json(valoraciones);
    } catch(e){
        return res.status(500).json({ e: 'Failed to add participant' });
    }
}

export async function updateValoracion(req:Request,res:Response):Promise<Response> {
    try{
        const valoraciones: valoracionesInterface|null = await valoracionesServices.getEntries.update(req.params.id,req.body as object)
        return res.status(200).json(valoraciones);
    } catch(e){
        return res.status(500).json({ e: 'Failed to update valoraciones' });
    }
}

export async function deleteValoracion(req:Request,res:Response):Promise<Response> {
    try{
        const valoraciones: valoracionesInterface|null = await valoracionesServices.getEntries.delete(req.params.id)
        return res.json(valoraciones);
    } catch(e){
        return res.status(500).json({ e: 'Failed to delete experiencies' });
    }
}

export async function delWinetoValoración(req:Request,res:Response):Promise<Response> {
    try{
        const valoraciones: valoracionesInterface|null = await valoracionesServices.getEntries.delWine(req.params.idVal,req.params.idWine)
        return res.json(valoraciones);
    } catch(e){
        return res.status(500).json({ e: 'Failed to del participant' });
    }
}