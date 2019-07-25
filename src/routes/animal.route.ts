import {Router, Request, Response} from 'express';
import {GetAnimalsRequest} from "./requests/get-animals.request";
import {ResetAnimalsRequest} from "./requests/reset-animals.request";

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    new GetAnimalsRequest(req, res).execute();
});

router.post('/reset-all', (req: Request, res: Response)=>{
    new ResetAnimalsRequest(req, res).execute();
});


// Export the express.Router() instance to be used by server.ts
export const AnimalController: Router = router;