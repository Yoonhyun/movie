import { Movie } from './movie.entity';
import { MovieService } from './movie.service';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    CreateMovieItem(movieData: any): Promise<Movie[]>;
    GetMovieAll(): Promise<Movie[]>;
    GetMovieById(movieId: string): Promise<Movie>;
    UpdateMovie(movieId: string, updateData: any): Promise<Movie>;
    DeleteItemById(movieId: string): Promise<Movie>;
}
