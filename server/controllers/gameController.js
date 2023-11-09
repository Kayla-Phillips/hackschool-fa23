const GameStats = require("../models/GameSchema");

const getGame = async (req, res) => {
    const game = await GameStats.find();
    const gameStats = await GameStats.find();
    const top3GameStats = await GameStats.find().sort({wpm: -1}).limit(3);
    const gameStat = await GameStats.findByID(id).exec();
    res.status(200).json(game);
}

const postGame = async (req, res) => {
    const newGameStat = await GameStats.create(req.body);
    res.status(200).json({message: "success"});   
}


module.exports = { getGame, postGame };