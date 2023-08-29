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

    //@Timeout(5000)
    //@Cron(CronExpression.EVERY_10_SECONDS )
    @Cron('5 * * * * *')
    async handleFaqCron() {
        winstonLog.log('info',`********** Running Corn when current second is 5 ********** `)

        const response = await this.DB.query(`select * from get_and_gen_schedule_task_notification()`)

        if(response && response[0].length) {
           winstonLog.log('info',` Response : %o `, response[0])
        }
    }


}
