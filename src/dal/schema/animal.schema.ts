import {Schema, model} from "mongoose";


const AnimalSchema: Schema = new Schema({
    name: String,
    age: Number,
    type: String,
    createdAt: Date,
    updatedAt: Date,
});

const addTimeStamps = function (next) {
    const now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    this.updatedAt = now;
    next();
};
const updateTimeStamp = function (next) {
    const now = new Date();
    const docToUpdate = this._update;
    if (!docToUpdate.updatedAt) {
        docToUpdate.updatedAt = now;
    }
    next();
};
const printBeforeSave = function (next) {
    console.log(`In PRE save report`, this);
    next();
};
const printBeforeUpdate = function (next) {
    const docToUpdate = this._update;
    console.log(`In PRE update report`, docToUpdate);
    next();
};

AnimalSchema.pre("save", addTimeStamps);
AnimalSchema.pre("save", printBeforeSave);
AnimalSchema.pre('update', updateTimeStamp);
AnimalSchema.pre('update', printBeforeUpdate);

const AnimalModel = model("Animal", AnimalSchema);

export = AnimalModel;
