import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  create(createUserDto: any) {
    const userCreated = this.userRepo.create(createUserDto);
    const saveUser = this.userRepo.save(userCreated);
    return saveUser;
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepo.findOneBy({
      id,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOneBy({ id });
    this.userRepo.merge(user, updateUserDto);
    return this.userRepo.save(user);
  }

  async remove(id: number) {
    await this.userRepo.delete(id);
    return true;
  }
}
