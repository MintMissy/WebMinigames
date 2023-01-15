import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'encryptWord',
})
export class EncryptWordPipe implements PipeTransform {
	transform(wordToEncrypt: string, lettersToEncrypt: string[], encryptSymbol: string = '_'): string {
		return wordToEncrypt
			.split('')
			.map((letter) => (lettersToEncrypt.includes(letter) ? encryptSymbol : letter))
			.join('');
	}
}
