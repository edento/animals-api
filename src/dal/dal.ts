import * as mongoose from "mongoose";
import {AnimalDao} from "./daos/animal.dao";
const TAG = '[Dal]';

export class Dal {
    private static instance: Dal;
    public animalDao: AnimalDao;

    private constructor() {
    }

    private initDaos(db: mongoose.Mongoose){
        const model = db.models;
        this.animalDao = new AnimalDao(db);

    }

    public static getInstance(): Dal{
        if (!this.instance) {
            this.instance = new Dal();
        }
        return this.instance;
    }

    async connect() {
        try {
            const mongoURI = process.env.MONGO_URI;
            const db: mongoose.Mongoose = await mongoose.connect(`${mongoURI}/animals-api`, {useNewUrlParser: true});

            this.initDaos(db);
            const models = db.models;
            console.log(TAG, `DB connection established`);

        } catch (e) {
            console.error(TAG, `Error connecting to mongo DB`, e);
            throw new Error('Error connecting to mongo DB')
        }

    }
}