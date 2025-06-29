import { Request, Response, Router } from 'express';
import { db } from '../db/db';

const router = Router();

router.post('/api/gameover', async (req: Request, res: Response) => {
    const {playerID, points, ghostsEaten, levelsWon, pillsSwallowed } = req.body;
    if (playerID !== null && playerID !== undefined &&
        points !== null && points !== undefined &&
        ghostsEaten !== null && ghostsEaten !== undefined &&
        levelsWon !== null && levelsWon !== undefined &&
        pillsSwallowed !== null && pillsSwallowed !== undefined) {
        try {
            await db.query(
                'INSERT INTO scores (player_id, points, ghosts_eaten, levels_won, pills_swallowed) VALUES ($1, $2, $3, $4, $5)',
                [playerID, points, ghostsEaten, levelsWon, pillsSwallowed]
            );

            res.status(200).json({ message: 'Daten empfangen und gespeichert.' });
            console.log('Zeile 17', playerID, points, ghostsEaten, levelsWon, pillsSwallowed);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Fehler beim Speichern in die Datenbank.' });
        }
    } else {
        res.status(400).json({ message: 'Fehlende Daten.' });
    }
});

export default router;
