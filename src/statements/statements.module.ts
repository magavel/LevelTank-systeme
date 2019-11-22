import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatementSchema } from './models/statement.schema';
import { StatementsService } from './statements.service';
import { StatementsController } from './statements.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{name : 'Statement', schema : StatementSchema}])
        //creation en bdd d'une collection Statement avec le schema en model
    ],
    providers: [StatementsService],
    controllers: [StatementsController]
})
export class StatementsModule {}
