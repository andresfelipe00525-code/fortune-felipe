import type { Phrase as PhraseType } from '../App';
import getRandomNumber from '../utils/getrandomNumber';
import quotes from '../data/phrases.json';
import photos from '../data/photos.json';
interface BtnPhraseProps {
	setPhraseSelected: React.Dispatch<React.SetStateAction<PhraseType>>;
	setBgSelected: React.Dispatch<React.SetStateAction<number>>;
}

const BtnPhrase = ({ setPhraseSelected, setBgSelected }: BtnPhraseProps) => {
	const changePhrase = (): void => {
		const randomIndexQuote = getRandomNumber(quotes.length);
		const phraseRandomQuote = quotes[randomIndexQuote];
		const randomIndexBg = getRandomNumber(photos.length);
		const bgRandom = photos[randomIndexBg];
		setPhraseSelected(phraseRandomQuote);
		setBgSelected(bgRandom);
	};

	return (
		<button
			onClick={changePhrase}
			className="absolute bottom-10 cursor-pointer px-6 py-2
						 bg-blue-800 text-white font-medium rounded-xl mt-6
                      	 hover:bg-blue-400 transition"
		>
			Try fortune
		</button>
	);
};

export default BtnPhrase;
