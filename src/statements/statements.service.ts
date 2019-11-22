import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStatementDto } from './dto/create-statement.dto';
import { Statement } from '../interfaces/statement.interface';

@Injectable()
export class StatementsService {
    constructor(@InjectModel('Statement') private readonly statementModel: Model<Statement>) { }

    async create(createStatementDto: CreateStatementDto): Promise<Statement> {
        const createdStatement = new this.statementModel(createStatementDto)
        return await createdStatement.save();
    }
}
