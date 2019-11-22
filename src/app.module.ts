import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule} from '@nestjs/mongoose';
import { StatementsModule } from './statements/statements.module';
import config from './config';

@Module({
  imports: [MongooseModule.forRoot(config.mongoUri, { useNewUrlParser: true , useUnifiedTopology: true } ), StatementsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
