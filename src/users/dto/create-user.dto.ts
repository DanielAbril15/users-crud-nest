import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  birthdate: string;

  @IsNotEmpty()
  gender: string;
}
