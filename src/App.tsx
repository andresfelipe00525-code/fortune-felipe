import { useState } from 'react';
import getRandomNumber from './utils/getrandomNumber';
import quotes from './data/phrases.json';
import Phrase from './components/Phrase';
import BtnPhrase from './components/BtnPhrase';
import photos from './data/photos.json';

export interface Phrase {
	phrase: string;
	author?: string;
	img?: string;
}

function App() {
	const randomIndexQuotes = getRandomNumber(quotes.length);
	const randomIndexPhotos = getRandomNumber(photos.length);

	const [phraseSelected, setPhraseSelected] = useState<Phrase>(
		quotes[randomIndexQuotes],
	);

	const [bgSelected, setBgSelected] = useState<number>(
		photos[randomIndexPhotos],
	);

	const objStyles = {
		backgroundImage: `url(/img/Fondo${bgSelected}.png)`,
	};

	return (
		<main
			style={objStyles}
			className="relative min-h-screen flex flex-col items-center justify-center bg-slate-600 px-4 bg-center bg-no-repeat"
		>
			<h1 className="stroke absolute top-10 text-3xl uppercase font-bold text-center text-white drop-shadow-lg bg-cover">
				Fortune Felipe🍪
			</h1>

			<Phrase phraseSelected={phraseSelected} />
			<BtnPhrase
				setPhraseSelected={setPhraseSelected}
				setBgSelected={setBgSelected}
			/>
		</main>
	);
}

export default App;
