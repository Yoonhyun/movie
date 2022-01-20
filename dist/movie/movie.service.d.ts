import { Repository } from 'typeorm';
import { Movie } from './movie.entity';
export declare class MovieService {
    private readonly movieRepo;
    constructor(movieRepo: Repository<Movie>);
    createMovieOne(movieData: any): Promise<Movie[]>;
    getOne(movieId: string): Promise<Movie>;
    updateMovieById(movieId: string, movieData: any): Promise<Movie>;
    removeMovieById(movieId: string): Promise<Movie>;
    getMoviesByYear(year: string): Promise<Movie[]>;
    getMovieAll(): Promise<Movie[]>;
}
