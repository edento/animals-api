import {BaseRequest} from "./base-request";
import {Request, Response} from 'express';

export class GetAnimalsRequest extends BaseRequest {

    constructor(req: Request, res: Response) {
        super(req, res);
        this.tag = '[GetAnimalsRequest]';
    }

    protected async run() {

        try {
            const animals = await this.dal.animalDao.findAll();
            const animalsDto = animals.map(animal => ({
                id: animal._id,
                name: animal.name,
                age: animal.age,
                type: animal.type

            }));
            console.log(this.tag, `[${animals.length}] Animals fetched successfully`);
            this.res.status(200).json({animals: animalsDto});
        }
        catch (e) {
            console.error(this.tag, `Error fetching animals`, e);
            this.res.status(400).send({error: `Error fetching animals`});
        }

    }


}