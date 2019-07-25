import {Mongoose, Document, Types} from "mongoose";
import * as AnimalModel from "../schema/animal.schema";
import {IAnimal} from "../../interfaces/animal.interface";
const TAG = '[AnimalDao]';

export class AnimalDao {
    db: Mongoose;

    constructor(db: Mongoose) {
        this.db = db;
    }

    async findAll(): Promise<IAnimal[]> {
        const query = {};
        const projection = {};
        const res = await AnimalModel.find(query, projection);
        return res.map(doc => doc.toJSON());
    }

    async save(report: IAnimal): Promise<Document> {
        return AnimalModel.create(report);
    }

    async deleteAll(): Promise<number> {
        const all = {};
        const response = await AnimalModel.deleteMany(all);
        return response.n;
    }

    async saveMany(animals: IAnimal[]): Promise<Document[]> {
        const saved = await AnimalModel.insertMany(animals);
        return saved.map(entry => entry.toJSON());
    }


}