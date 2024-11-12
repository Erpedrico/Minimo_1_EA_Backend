import express from 'express'
import { addWinetoValoracion, createValoracion, deleteValoracion, delWinetoValoración, findAllValoraciones, findValoracion, findValoracionPopulated, updateValoracion } from '../controllers/valoracionesControllers'

//import toNewUser from '../extras/utils'

const router = express.Router()

router.route('/')
    .get(findAllValoraciones)
    .post(createValoracion)

router.route('/:id')
    .get(findValoracion)
    .put(updateValoracion)
    .delete(deleteValoracion)
    
router.route('/user/:id')
    .get(findValoracionPopulated) 

router.route('/Participant/:idVal/:idWine')
    .post(addWinetoValoracion)
    .delete(delWinetoValoración)    

export default router