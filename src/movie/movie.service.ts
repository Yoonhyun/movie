import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MovieService {

    constructor(
        @InjectRepository(Movie)
        private readonly movieRepo:Repository<Movie>
    )
    {}


    async createMovieOne(movieData){
        try {
            const created = this.movieRepo.create(movieData);
            return await this.movieRepo.save(created);
        } catch (error) {
            throw error;    
        }
        
    }

    async getOne(movieId:string): Promise<Movie>{
        const item = await this.movieRepo.findOne({id: +movieId});
        if(!item)
            throw new NotFoundException(`Movie with ID ${movieId} not found`);

        return item;
    }

    async updateMovieById(movieId: string, movieData): Promise<Movie>{
        const item = await this.movieRepo.findOne({id: +movieId});
        if(!item)
            throw new NotFoundException(`Movie with ID ${movieId} not found`);
        
        item.title = movieData.title;
        item.year = movieData.year;

        return await this.movieRepo.save(item);
    }

    async removeMovieById(movieId: string){
        const item = await this.movieRepo.findOne({id: +movieId});
        if(!item)
            throw new NotFoundException(`Movie with ID ${movieId} not found`);

        return this.movieRepo.remove(item);
    }

    getMoviesByYear(year:string){
        const movies = this.movieRepo.find({
            where : { 
                year : +year
            }
        });
        return movies;
    }

    // async - await => DB 쓰기
    // Only Promise  => DB 읽기

    getMovieAll() : Promise<Movie[]> {
        return this.movieRepo.find();
    }
}
