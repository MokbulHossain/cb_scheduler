import { Injectable, Inject } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import {winstonLog} from '../../config/winstonLog'
import axios from 'axios'
import 'dotenv/config'
import { USER_REPOSITORY, DATABASE_CONNECTION } from '../../config/constants';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class CornJobsService {

    constructor( 
       // private readonly faqService: FaqService,
       @Inject(DATABASE_CONNECTION) private DB: Sequelize
     ) { }


     async callStoreProcedure() : Promise<any>{
        
        return await this.DB.query(`SELECT * FROM get_and_gen_schedule_task_notification()`)
    }

    //@Timeout(5000)
    @Cron(CronExpression.EVERY_MINUTE)
    async handleFaqCron() {
        winstonLog.log('info',`********** Running Corn In EVERY_MINUTE ********** `)
        this.callStoreProcedure()
    }


}
