import {Request, Response} from 'express';
import {Dal} from '../../dal/dal';

const TAG = '[BaseRequest]';

export class BaseRequest {

    protected req: Request;
    protected res: Response;
    protected dal: Dal;
    protected tag: string; // tag of the extending class

    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
        this.dal = Dal.getInstance();
    }

    /**
     * @abstract - to be implemented in each class who extends
     */
    protected async run() {
        // implement call logic
    }

    public async execute() {
        // do some stuff before "run()"
        try {
            await this.run();
        } catch (e) {
            console.error(TAG, this.tag, `Error running request. Details:\n`, e);
            this.res.status(400).send({error: e.message});
        }
    }
}