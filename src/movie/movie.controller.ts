import { Body, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { query } from 'express';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {

    constructor(
        private readonly movieService:MovieService
    ){}

    @Post()
    CreateMovieItem(
        @Body() movieData
    ){
        return this.movieService.createMovieOne(movieData);
    }

    @Get()
    GetMovieAll(){
        return this.movieService.getMovieAll();
    }

    @Get(':id')
    GetMovieById(
        @Param('id') movieId: string
    ) :Promise<Movie>{
        return this.movieService.getOne(movieId);
    }

    @Patch(':id')
    UpdateMovie(
        @Param('id') movieId: string,
        @Body() updateData
    ){
        return this.movieService.updateMovieById(movieId, updateData);
    }

    @Delete(':id')
    DeleteItemById(
        @Param('id') movieId: string
    ){
        return this.movieService.removeMovieById(movieId);
    }
}
