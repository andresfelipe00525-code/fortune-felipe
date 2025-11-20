import type { Phrase as PhraseType } from '../App';
import getRandomNumber from '../utils/getrandomNumber';
import quotes from '../data/phrases.json';

interface BtnPhraseProps {
	setPhraseSelected: React.Dispatch<React.SetStateAction<PhraseType>>;
}

const BtnPhrase = ({ setPhraseSelected }: BtnPhraseProps) => {
	const changePhrase = (): void => {
		const randomIndex = getRandomNumber(quotes.length);
		const phraseRandom = quotes[randomIndex];
		setPhraseSelected(phraseRandom);
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
