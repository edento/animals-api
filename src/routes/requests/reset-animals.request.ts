import {BaseRequest} from "./base-request";
import {Request, Response} from 'express';
import {IAnimal} from "../../interfaces/animal.interface";
import * as fs from 'fs';
import * as path from 'path';

export class ResetAnimalsRequest extends BaseRequest {

    constructor(req: Request, res: Response) {
        super(req, res);
        this.tag = '[ResetAnimalsRequest]';
    }

    protected async run() {

        const file = fs.readFileSync(path.resolve(__dirname, '../../assets/animals.json'), {encoding: 'utf-8'});
        const animals: IAnimal[] = JSON.parse(file);

        // First clear all collection
        const removed = await this.dal.animalDao.deleteAll();
        console.log(this.tag, `Cleared Animals collection (removed ${removed} entries)`);

        // Save all new docs:
        const saved = await this.dal.animalDao.saveMany(animals);
        console.log(this.tag, `Initiated Animals collection (saved ${saved.length} entries)`);
        this.res.status(200).json({success: true});
    }


}