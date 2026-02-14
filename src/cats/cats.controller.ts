import { Body, Controller, Delete, Get, Param, Post, Put, Query, Redirect } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from 'src/dto/create-cat-dto';

@Controller('cats')
export class CatsController {
    constructor(private catsService : CatsService) {}

@Get()
    @Get()
    async findAll() : Promise<any[]> {
           return this.catsService.findAll();
}

@Post()
    create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);  
    }
}
