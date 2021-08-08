import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class VerifyPayload {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  securityQuestion: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  answer: string;
}
