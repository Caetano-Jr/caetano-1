import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BarbershopModule } from './barbershop/barbershop.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule, BarbershopModule],
})
export class AppModule {}
