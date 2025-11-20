import type { Phrase as PhraseType } from '../App';

interface PhraseProps {
	phraseSelected: PhraseType;
}

const Phrase = ({ phraseSelected }: PhraseProps) => {
	return (
		<article className="max-w-xl bg-slate-900 shadow-md rounded-2xl p-6 text-center border-4 border-green-700">
			<p className="text-lg font-medium text-slate-300 italic">
				{phraseSelected.phrase}
			</p>

			{phraseSelected.author && (
				<footer className="mt-3 text-slate-400 text-sm">
					- {phraseSelected.author}
				</footer>
			)}
		</article>
	);
};

export default Phrase;
