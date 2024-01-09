import { Router } from 'express';
export const router=Router()

router.get('/',(req,res)=>{

    let heroes=[{name:"Batman"}, {name:"Flash"}]

    res.setHeader('Content-Type','application/json')
    res.status(200).json({heroes})
})