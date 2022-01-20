"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const movie_entity_1 = require("./movie.entity");
let MovieService = class MovieService {
    constructor(movieRepo) {
        this.movieRepo = movieRepo;
    }
    async createMovieOne(movieData) {
        try {
            const created = this.movieRepo.create(movieData);
            return await this.movieRepo.save(created);
        }
        catch (error) {
            throw error;
        }
    }
    async getOne(movieId) {
        const item = await this.movieRepo.findOne({ id: +movieId });
        if (!item)
            throw new common_1.NotFoundException(`Movie with ID ${movieId} not found`);
        return item;
    }
    async updateMovieById(movieId, movieData) {
        const item = await this.movieRepo.findOne({ id: +movieId });
        if (!item)
            throw new common_1.NotFoundException(`Movie with ID ${movieId} not found`);
        item.title = movieData.title;
        item.year = movieData.year;
        return await this.movieRepo.save(item);
    }
    async removeMovieById(movieId) {
        const item = await this.movieRepo.findOne({ id: +movieId });
        if (!item)
            throw new common_1.NotFoundException(`Movie with ID ${movieId} not found`);
        return this.movieRepo.remove(item);
    }
    getMoviesByYear(year) {
        const movies = this.movieRepo.find({
            where: {
                year: +year
            }
        });
        return movies;
    }
    getMovieAll() {
        return this.movieRepo.find();
    }
};
MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movie_entity_1.Movie)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map