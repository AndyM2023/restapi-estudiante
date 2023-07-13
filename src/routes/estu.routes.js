import {Router} from 'express'

import * as TaskCtrl from '../controllers/Estudiantecontroller.js'

const router = Router()
// para presentar todas las tareas
router.get('/', TaskCtrl.findAllEstud)
//para crear las tareas
router.post('/', TaskCtrl.createEstud)
//para presentar las tarea que tengan done true
//router. get('/done', TaskCtrl.findAllDone)
//para buscar una tarea con el id 
router. get('/:cedula', TaskCtrl.findOneEstud)
//para eliminar una tarea 
router. delete('/:cedula', TaskCtrl.deleteEstud)
//para actualizar datos utlizando el id
router. put('/:cedula', TaskCtrl.updateEstud)




export default router


