import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UUIDType {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
