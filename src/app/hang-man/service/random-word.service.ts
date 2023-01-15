import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class RandomWordService {
	private readonly API_URL = 'https://random-word-api.herokuapp.com/word';

	constructor(private httpClient: HttpClient) {}

	getRandomWords(wordsNumber: number = 10) {
		return this.httpClient.get<string[]>(`${this.API_URL}?number=${wordsNumber}`);
	}
}
