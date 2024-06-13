import { useState, useRef, useContext, useEffect } from "react";
import { MicrophoneIcon } from "../../../../../commonComponents/SimpleIcons/SimpleIcons";
import * as speechCommands from 'tensorflow-models-speech-commands';
import { Context } from '../../../../../index';
// import { useProcessSoundFromMice } from "../helpers/hooks";
const tf = require('@tensorflow/tfjs');




export default function VoiceInterface() {

    const {trainingBoardStore} = useContext(Context);

    const [isListening, setIsListening] = useState(false)

    const recognizerRef = useRef<speechCommands.SpeechCommandRecognizer | null>(null);

    useEffect(() => {

        if (!recognizerRef.current) {
            
            recognizerRef.current = speechCommands.create('BROWSER_FFT');
        }
    
      return () => {

        if(recognizerRef.current?.isListening()){

            recognizerRef.current.stopListening()
            setIsListening(false)
        }
      }
    }, [recognizerRef])
    

    

    const onClick = async () => {

        const recognizer = recognizerRef.current;
        
        if(!recognizer) {
            return
        }

        if(isListening) {
            recognizer.stopListening()
            setIsListening(false)
            return
        }

        setIsListening(true)
        await recognizer.ensureModelLoaded();
        recognizer.listen(async (result) => {

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
        }, {
            includeSpectrogram: true,
            probabilityThreshold: 0.75,
            overlapFactor: 0
        });
        
    }
    

    return (
        <button className={`${isListening ? 'bg-gradient-to-r from-cyan-500 to-blue-500 opacity-70' : 'bg-main'} transition duration-500 flex rounded-full items-center justify-center h-[100px] w-[100px]`} onClick={() => {onClick()}}>
            <MicrophoneIcon/>
            {isListening && <span className="animate-ping  absolute inline-flex h-[100px] w-[100px] rounded-full bg-sky-400 opacity-75"></span>}
        </button>
    )
}