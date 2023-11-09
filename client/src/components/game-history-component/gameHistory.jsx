import styles from './gameHistory.module.css';

// Create a functional component that will display game history
// Remember to return one top-level div, and nest the rest of your elements inside of it
// It should take in props for the sentence, correctChars, incorrectChars, wpm, and time
// Export your GameHistory component!


const CardComponents = ({sentence, correctCharacters, incorrectCharacters, wpm, time}) => {
    return (
        <div className = {styles.card}>
            <p classname = {styles.cardContent}>
                <b>Sentence: </b> {sentence}
            </p>
            <p classname = {styles.cardContent}>
                <b>Correct Characters: </b> {correctCharacters}
            </p>
            <p classname = {styles.cardContent}>
                <b>Incorrect Characters: </b> {incorrectCharacters}
            </p>
            <p classname = {styles.cardContent}>
                <b>WPM: </b> {wpm}
            </p>
            <p classname = {styles.cardContent}>
                <b>Time: </b> {time}
            </p>
        </div>
    )
}

export default CardComponents
