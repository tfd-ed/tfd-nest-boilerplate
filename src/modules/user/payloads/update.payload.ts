import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, MinLength } from 'class-validator';
import { SameAs } from '../../common/validator/same-as.validator';

export class UpdatePayload {
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  username: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  name: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  email: string;

  @ApiProperty({
    required: false,
  })
  @MinLength(5)
  @IsOptional()
  password: string;

  @ApiProperty({ required: false })
  @SameAs('password')
  passwordConfirmation: string;
}
