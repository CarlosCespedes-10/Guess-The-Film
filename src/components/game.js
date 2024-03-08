        import React, { useState } from 'react';
        import styled from 'styled-components';

        const movies = [
            { name: "Forrest Gump", emoji: "🏃🍫🍤" },
            { name: "The Matrix", emoji: "🕶️💊👽" },
            { name: "Titanic", emoji: "🚢❄️💔" },
            { name: "Jurassic Park", emoji: "🦖🌴🚙" },
            { name: "The Lion King", emoji: "🦁👑🌅" },
            { name: "Star Wars", emoji: "⚔️🚀🌌" },
            { name: "The Avengers", emoji: "🦸‍♂️🦸‍♀️💥" },
            { name: "Harry Potter", emoji: "⚡🧙‍♂️🔮" },
            { name: "The Terminator", emoji: "🤖🔫🕶️" },
            { name: "Indiana Jones", emoji: "🤠🔍💎" },
            { name: "Back to the Future", emoji: "⏰🚗💥" },
            { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
            { name: "The Godfather", emoji: "🍕🤵🔫" },
            { name: "The Dark Knight", emoji: "🦇♞👨‍🦯" },
            { name: "Pulp Fiction", emoji: "🍔🔫🕶️" },
            { name: "Schindler's List", emoji: "📜🚂🔴" },
            { name: "The Lord of the Rings: The Return of the King", emoji: "🧝‍♂️🧙‍♂️🗡️" },
            { name: "The Silence of the Lambs", emoji: "🔇🐑🍖" },
            { name: "Fight Club", emoji: "👊💼🚽" },
            { name: "Inception", emoji: "🌀👩‍🚀🎩" },
            { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
        ];

        const GameContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 24px;
        `;

        const Input = styled.input`
        padding: 15px;
        margin-bottom: 20px;
        font-size: 15px;
        border-radius:20px;
        `;

        const ButtonStart = styled.button`
        margin-top: 15px;
        padding: 10px 20px;
        background-color: lightgreen;
        color: black;
        padding-top: 15%;
        border-radius: 4px;
        cursor: pointer;
        `;   

        const Emojis = styled.span`
        font-size: 30px;
        margin-bottom: 20px;
        background.color: black;
        `;

        function Game() {
        const [FilmIndex, setFilmIndex] = useState(0);
        const [guess, setGuess] = useState('');
        const [lives, setLives] = useState(3);
        const [points, setPoints] = useState(0);
        const currentMovie = movies[FilmIndex];

        const handleGuess = () => {
            if (guess.toLowerCase() === currentMovie.name.toLowerCase()) {
                alert('Congratulations, you won, you just guessed the movie.');
                setGuess('');
                setFilmIndex(FilmIndex + 1);

                const newPoints = points + 1; 
                setPoints(newPoints);
            }
            else {
                setLives(lives - 1);
                setGuess('');
            if (lives === 1)
                { 
                    alert('Game Over');
                    setLives(3);
                    setFilmIndex(0);
                } 
            else {
                    alert('You just lost a life :(.');
                }
            }
        };


        return (
            <GameContainer>
            <p>POINTS: {points}</p>
            <p>LIVES: {lives}</p>  
            <Emojis role="img" aria-label="emoji">{currentMovie.emoji}</Emojis> 
            <Input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="¿What is the film?"
            />
            <div>
            <ButtonStart onClick={handleGuess}>Send</ButtonStart>
            </div>
            
            </GameContainer>
        );
        }

        export default Game;