import { Controller, Post, Body, Get } from '@nestjs/common';
import { StatementsService } from './statements.service';
import { CreateStatementDto } from './dto/create-statement.dto';

@Controller('statements')
export class StatementsController {
    constructor(private readonly statementsService : StatementsService){}

    @Post()
    async createStatement(@Body() createStatementDto: CreateStatementDto){
        // ce qui arrive par le body prendra le nom createStatementDto ds la methode
        // on envoie vers le service le createStatementDto
        return await this.statementsService.create(createStatementDto)
    }

    @Get()
    async findAll(){
        return await this.statementsService.findAll();
    }
}
