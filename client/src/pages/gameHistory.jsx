// Import the GameHistory component
import CardComponents from "@/components/game-history-component/gameHistory";
import styles from '../styles/History.module.css';


export default function GameHistory() {
    return (
        <div className={styles.container}>
            <h1>Previous Games</h1>

            {/* Container for top 3 games */}
            <div className = {styles.top_three}>
                <h3 className = {styles.header}>Top 3 Games</h3>
                <div className = {styles.top_three_cards}>
                    <CardComponents sentence = {"This was the fastest typed sentence!"}/>
                    <CardComponents wpm = {67}/>
                    <CardComponents incorrectCharacters = {7}/>
                </div>
            </div>

            


            {/* Container for all games */}
            <div className = {styles.all_games}>
                <h3 className = {styles.header}>All games</h3>
                <div className = {styles.all_cards}>
                    <CardComponents sentence = {"This was the fastest typed sentence!"}/>
                    <CardComponents wpm = {67}/>
                    <CardComponents correctCharacters = {7}/>
                    <CardComponents incorrectCharacters = {8}/>
                </div>
            </div>
            
        </div>
    );
}