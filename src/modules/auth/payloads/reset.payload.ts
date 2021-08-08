import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';
import { SameAs } from '../../common/validator/same-as.validator';

export class ResetPayload {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @MinLength(6)
  currentPassword: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @MinLength(6)
  newPassword: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @SameAs('newPassword')
  confirmPassword: string;
}
