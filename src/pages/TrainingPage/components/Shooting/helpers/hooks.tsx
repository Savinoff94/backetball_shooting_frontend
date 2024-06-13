import { useContext } from 'react';
import { Context } from '../../../../../index';

import * as speechCommands from 'tensorflow-models-speech-commands';


async function useProcessSoundFromMic(recognizer : speechCommands.SpeechCommandRecognizer | null) {

    const { trainingBoardStore } = useContext(Context);

    return (result : speechCommands.SpeechCommandRecognizerResult) : void => {

        if(!recognizer) {

            throw new Error('recognizer is not initialized')
        }

        const scores = Array.from(result.scores as Float32Array).map((s, i) => ({score: s, word: recognizer.wordLabels()[i]}));
        // Find the most probable word.
        scores.sort((s1, s2) => s2.score - s1.score);
    
        const myWord = scores[0].word;
    
        if(myWord === 'yes') {
    
            trainingBoardStore.shotMade()
        }
    
        if((myWord === 'no') || (myWord === 'go')) {
    
            trainingBoardStore.shotMissed()
        }
    }

}

export {
    useProcessSoundFromMic
}