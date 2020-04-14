import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersModule } from './customer/customer.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dress_maker'),
    CustomersModule,
    AuthModule,
  ],
  controllers: [AuthController],
})
export class AppModule {}
