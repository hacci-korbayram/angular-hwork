import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../helpers/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor() { }

    @Input() movieTitle: string;
    @Input() displayMovie: boolean;
    @Output() movieToParent: EventEmitter<Movie> = new EventEmitter<Movie>();

    movie: Movie = {
          id: 1,
          name: 'Rocky bilbao',
          releaseDate: 1990,
          producer: 'Sylvester Stallone',
          description: 'A retired Rocky Balboa wins against reigning champion Mason Dixon in a computer simulation of a fight. Enraged by this, Mason challenges Rocky to a 10-round exhibition bout.',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41c3ZD7YHsL._SX384_BO1,204,203,200_.jpg',
          imageAlt: 'hahaah'
    }
    sendMovieToParent(): void {
      this.movieToParent.emit(this.movie);
    }
  
    ngOnInit(): void {
    }
  }
  