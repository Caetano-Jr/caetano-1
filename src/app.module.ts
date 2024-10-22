import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BarbershopModule } from './barbershop/barbershop.module';

@Module({
  imports: [AuthModule, UserModule, BarbershopModule],
})
export class AppModule {}
