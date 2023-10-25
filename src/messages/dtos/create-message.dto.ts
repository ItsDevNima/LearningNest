import { IsString, IsNumber } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;
  @IsNumber()
  age: string;
  @IsString()
  career: string;
}
