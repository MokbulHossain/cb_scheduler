import { Module } from '@nestjs/common';
import { CornJobsService } from './corn-jobs.service';
import { ScheduleModule } from '@nestjs/schedule';
import { DatabaseModule } from '../../config/database/database.module'

@Module({
  imports: [ ScheduleModule.forRoot(),DatabaseModule ],
  providers: [CornJobsService]
})
export class CornJobsModule {}
