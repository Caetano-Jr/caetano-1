import { Module } from '@nestjs/common';

import { BarbershopModule } from './barbershop/barbershop.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, UserModule, BarbershopModule, PrismaModule],
  controllers:[AuthController],
  providers:[AuthService]
})
export class AppModule {}
