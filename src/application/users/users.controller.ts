import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  // constructor(private readonly usersService: UsersService) {}

  @Post('create')
  public async create(@Body() createUserDto: CreateUserDto) {
    // return this.usersService.create(createUserDto);
  }

  @Get('view')
  public async findOne(@Param('id') id: string) {
    // return this.usersService.findOne();
  }

  @Patch('update')
  public async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // return this.usersService.update(+id, updateUserDto);
  }

  @Patch('image')
  public async updateImage(){
    
    
  }

  @Post('reset/pass/send/code')
  public async sendCode(){

  }

  @Post('reset/pass/update')
  public async resetPass(){

  }
}
