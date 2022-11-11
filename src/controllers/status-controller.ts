import  {Request, Response} from 'express';
function status (req: Request, res: Response){
    res.send('ok')
}

export {
    status
}