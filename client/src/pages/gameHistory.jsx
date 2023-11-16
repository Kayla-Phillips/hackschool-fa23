// Import the GameHistory component
import CardComponents from "@/components/game-history-component/gameHistory";
import styles from '../styles/History.module.css';
import React, {useState, useEffect} from "react";
import axios from "axios";


export default function GameHistory() {
    const [gameStats, setGameStats] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get("https://localhost:5050/api/game");
            setGameStats0(response.data);
        }
        catch (error) {
            console.error("Failed to fetch game stats");
        }
    }
    return (
        <div className={styles.container}>
            <h1>Previous Games</h1>

            {/* Container for top 3 games */}
            {/* <div className = {styles.top_three}>
                <h3 className = {styles.header}>Top 3 Games</h3>
                <div className = {styles.top_three_cards}>
                    <CardComponents sentence = {"This was the fastest typed sentence!"}/>
                    <CardComponents wpm = {67}/>
                    <CardComponents incorrectCharacters = {7}/>
                </div>
            </div> */}

            


            {/* Container for all games */}
            <div className = {styles.all_games}>
                <h3 className = {styles.header}>All games</h3>
                <div className = {styles.all_cards}>
                    {gameStats.map((game, index) => {
                        <CardComponents key = {index} {...game}/>
                    })}
                </div>
            </div>
            
        </div>
    );
}