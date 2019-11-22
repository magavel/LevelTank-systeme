import * as mongoose from 'mongoose';


export const StatementSchema = new mongoose.Schema({
    // attention Majuscule pour les types...
    value: Number,
    IdIot: String,
    CreatedAt: String

});