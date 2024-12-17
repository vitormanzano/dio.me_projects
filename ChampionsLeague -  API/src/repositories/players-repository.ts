import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [

    {
        id: 1,
        name: "Lionel Messi",
        club: "Inter Miami",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 85,
            Shooting: 92,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65
        }
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Al-Nassr",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 87,
            Shooting: 93,
            Passing: 82,
            Dribbling: 85,
            Defending: 35,
            Physical: 77
        }
    },
    {
        id: 3,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 97,
            Shooting: 89,
            Passing: 80,
            Dribbling: 92,
            Defending: 38,
            Physical: 76
        }
    },
    {
        id: 4,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 74,
            Shooting: 86,
            Passing: 93,
            Dribbling: 87,
            Defending: 64,
            Physical: 77
        }
    },
    {
        id: 5,
        name: "Robert Lewandowski",
        club: "FC Barcelona",
        nationality: "Poland",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 78,
            Shooting: 92,
            Passing: 79,
            Dribbling: 86,
            Defending: 43,
            Physical: 82
        }
    },
    {
        id: 6,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Netherlands",
        position: "Defender",
        statistics: {
            Overall: 89,
            Pace: 75,
            Shooting: 60,
            Passing: 71,
            Dribbling: 72,
            Defending: 91,
            Physical: 86
        }
    },
    {
        id: 7,
        name: "Neymar Jr.",
        club: "Al-Hilal",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 85,
            Shooting: 83,
            Passing: 86,
            Dribbling: 94,
            Defending: 36,
            Physical: 61
        }
    },
    {
        id: 8,
        name: "Erling Haaland",
        club: "Manchester City",
        nationality: "Norway",
        position: "Forward",
        statistics: {
            Overall: 88,
            Pace: 89,
            Shooting: 91,
            Passing: 65,
            Dribbling: 80,
            Defending: 45,
            Physical: 88
        }
    },
    {
        id: 9,
        name: "Luka Modrić",
        club: "Real Madrid",
        nationality: "Croatia",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 72,
            Shooting: 76,
            Passing: 89,
            Dribbling: 90,
            Defending: 72,
            Physical: 66
        }
    },
    {
        id: 10,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egypt",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 91,
            Shooting: 86,
            Passing: 81,
            Dribbling: 90,
            Defending: 45,
            Physical: 75
        }
    },
    {
        id: 11,
        name: "Harry Kane",
        club: "Bayern Munich",
        nationality: "England",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 68,
            Shooting: 92,
            Passing: 83,
            Dribbling: 82,
            Defending: 47,
            Physical: 82
        }
    },
    {
        id: 12,
        name: "Casemiro",
        club: "Manchester United",
        nationality: "Brazil",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 63,
            Shooting: 73,
            Passing: 75,
            Dribbling: 72,
            Defending: 88,
            Physical: 90
        }
    },
    {
        id: 13,
        name: "Thibaut Courtois",
        club: "Real Madrid",
        nationality: "Belgium",
        position: "Goalkeeper",
        statistics: {
            Overall: 90,
            Pace: 0,
            Shooting: 0,
            Passing: 0,
            Dribbling: 0,
            Defending: 0,
            Physical: 0
        }
    },
    {
        id: 14,
        name: "Karim Benzema",
        club: "Al-Ittihad",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 77,
            Shooting: 88,
            Passing: 83,
            Dribbling: 87,
            Defending: 42,
            Physical: 78
        }
    },
    {
        id: 15,
        name: "Bruno Fernandes",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 72,
            Shooting: 82,
            Passing: 89,
            Dribbling: 84,
            Defending: 68,
            Physical: 75
        }
    },
    {
        id: 16,
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 66,
            Shooting: 72,
            Passing: 86,
            Dribbling: 82,
            Defending: 81,
            Physical: 74
        }
    },
    {
        id: 17,
        name: "João Cancelo",
        club: "Barcelona",
        nationality: "Portugal",
        position: "Defender",
        statistics: {
            Overall: 86,
            Pace: 83,
            Shooting: 70,
            Passing: 82,
            Dribbling: 84,
            Defending: 78,
            Physical: 71
        }
    },
    {
        id: 18,
        name: "Vinícius Jr.",
        club: "Real Madrid",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 95,
            Shooting: 78,
            Passing: 79,
            Dribbling: 92,
            Defending: 29,
            Physical: 69
        }
    },
    {
        id: 19,
        name: "Rodri",
        club: "Manchester City",
        nationality: "Spain",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 61,
            Shooting: 73,
            Passing: 81,
            Dribbling: 77,
            Defending: 85,
            Physical: 84
        }
    },
    {
        id: 20,
        name: "Alisson Becker",
        club: "Liverpool",
        nationality: "Brazil",
        position: "Goalkeeper",
        statistics: {
            Overall: 89,
            Pace: 0,
            Shooting: 0,
            Passing: 0,
            Dribbling: 0,
            Defending: 0,
            Physical: 0
        }
    }


];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id)
}

export const insertPLayer = async (player: PlayerModel) => {
    database.push(player);
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex(player => player.id === id);

    if (index !== -1) {
        database.splice(index, 1);
        return true;
    }
    return false;
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    const playerIndex = database.findIndex(player => player.id === id)

    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics
    }
    return database[playerIndex];
}