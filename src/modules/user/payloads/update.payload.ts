import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class UpdatePayload {
  @ApiProperty({
    required: false,
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    required: false,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    required: false,
  })
  @IsEmail()
  email: string;
}
