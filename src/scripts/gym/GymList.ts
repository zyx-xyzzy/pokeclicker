
const GymList: { [townName: string]: Gym } = {};

// Kanto Gyms
GymList['Pewter City'] = new Gym(
    'Brock',
    'Pewter City',
    [
        new GymPokemon('Geodude', 770, 10),
        new GymPokemon('Onix', 1554, 12),
    ],
    BadgeEnums.Boulder,
    250,
    'I took you for granted. As proof of your victory, here\'s the Boulder Badge!',
    [new RouteKillRequirement(10, GameConstants.Region.kanto, 2)]
);
GymList['Cerulean City'] = new Gym(
    'Misty',
    'Cerulean City',
    [
        new GymPokemon('Staryu', 4000, 18),
        new GymPokemon('Starmie', 6800, 21),
    ],
    BadgeEnums.Cascade,
    500,
    'I can\'t believe I lost! All right! You can have the Cascade Badge to show you beat me!',
    [new RouteKillRequirement(10, GameConstants.Region.kanto, 4)]
);
GymList['Vermilion City'] = new Gym(
    'Lt. Surge',
    'Vermilion City',
    [new GymPokemon('Raichu', 37000, 28)],
    BadgeEnums.Thunder,
    1000,
    'Whoa! You\'re the real deal, kid! Fine then, take the Thunder Badge!',
    [
        new RouteKillRequirement(10, GameConstants.Region.kanto, 6),
        new GymBadgeRequirement(BadgeEnums.Cascade),
    ]
);
GymList['Celadon City'] = new Gym(
    'Erika',
    'Celadon City',
    [
        new GymPokemon('Tangela', 38810, 30),
        new GymPokemon('Weepinbell', 30340, 32),
        new GymPokemon('Gloom', 36400, 32),
    ],
    BadgeEnums.Rainbow,
    1500,
    'Oh! I concede defeat. You are remarkably strong. I must confer you the Rainbow Badge.',
    [new RouteKillRequirement(10, GameConstants.Region.kanto, 7)]
);
GymList['Saffron City'] = new Gym(
    'Sabrina',
    'Saffron City',
    [
        new GymPokemon('Abra', 23040, 50),
        new GymPokemon('Kadabra', 25600, 50),
        new GymPokemon('Alakazam', 28400, 50),
    ],
    BadgeEnums.Marsh,
    2500,
    'I\'m shocked! But a loss is a loss. I admit I didn\'t work hard enough to win! You earned the Marsh Badge!',
    [new GymBadgeRequirement(BadgeEnums.Rainbow)]
);
GymList['Fuchsia City'] = new Gym(
    'Koga',
    'Fuchsia City',
    [
        new GymPokemon('Venonat', 30780, 44),
        new GymPokemon('Venonat', 32460, 46),
        new GymPokemon('Venonat', 36540, 48),
        new GymPokemon('Venomoth', 37430, 50),
    ],
    BadgeEnums.Soul,
    3500,
    'Humph! You have proven your worth! Here! Take the Soul Badge!',
    [
        new OneFromManyRequirement([
            new RouteKillRequirement(10, GameConstants.Region.kanto, 18),
            new RouteKillRequirement(10, GameConstants.Region.kanto, 15),
        ]),
    ],
    () => {
        App.game.keyItems.gainKeyItem(KeyItemType.Safari_ticket, true);
        App.game.quests.getQuestLine('Mining Expedition').beginQuest();
    }
);
GymList['Cinnabar Island'] = new Gym(
    'Blaine',
    'Cinnabar Island',
    [
        new GymPokemon('Ninetales', 37430, 48),
        new GymPokemon('Rapidash', 45230, 50),
        new GymPokemon('Arcanine', 50290, 54),
    ],
    BadgeEnums.Volcano,
    5000,
    'I\'ve burnt out! You have earned the Volcano Badge!',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Pokemon Mansion'))]
);
GymList['Viridian City'] = new Gym(
    'Giovanni',
    'Viridian City',
    [
        new GymPokemon('Dugtrio', 45230, 50),
        new GymPokemon('Persian', 47530, 53),
        new GymPokemon('Nidoqueen', 48740, 53),
        new GymPokemon('Nidoking', 48350, 55),
        new GymPokemon('Rhydon', 55000, 55),
    ],
    BadgeEnums.Earth,
    6000,
    'Ha! That was a truly intense fight! You have won! As proof, here is the Earth Badge!',
    [
        new GymBadgeRequirement(BadgeEnums.Volcano),
        new GymBadgeRequirement(BadgeEnums.Marsh),
        new GymBadgeRequirement(BadgeEnums.Thunder),
    ],
    () => {
        App.game.keyItems.gainKeyItem(KeyItemType.Gem_case, true);
    }
);

// Kanto Elite 4
GymList['Elite Lorelei'] = new Gym(
    'Lorelei',
    'Elite Lorelei',
    [
        new GymPokemon('Dewgong', 45330, 54),
        new GymPokemon('Cloyster', 48300, 53),
        new GymPokemon('Slowbro', 52000, 54),
        new GymPokemon('Jynx', 57000, 56),
        new GymPokemon('Lapras', 60250, 56),
    ],
    BadgeEnums.Elite_Lorelei,
    7500,
    'You\'re better than I thought! Go on ahead! You only got a taste of Pokémon League power!',
    [new GymBadgeRequirement(BadgeEnums.Earth)]
);
GymList['Elite Bruno'] = new Gym(
    'Bruno',
    'Elite Bruno',
    [
        new GymPokemon('Onix', 45330, 53),
        new GymPokemon('Hitmonchan', 48300, 55),
        new GymPokemon('Hitmonlee', 52000, 55),
        new GymPokemon('Onix', 57000, 56),
        new GymPokemon('Machamp', 60250, 58),
    ],
    BadgeEnums.Elite_Bruno,
    7500,
    'My job is done! Go face your next challenge!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Lorelei)]
);
GymList['Elite Agatha'] = new Gym(
    'Agatha',
    'Elite Agatha',
    [
        new GymPokemon('Gengar', 45330, 56),
        new GymPokemon('Golbat', 48300, 56),
        new GymPokemon('Haunter', 52000, 55),
        new GymPokemon('Arbok', 57000, 58),
        new GymPokemon('Gengar', 60250, 60),
    ],
    BadgeEnums.Elite_Agatha,
    7500,
    'You win! I see what the old duff sees in you now. I\'ve nothing else to say. Run along now, child!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Bruno)]
);
GymList['Elite Lance'] = new Gym(
    'Lance',
    'Elite Lance',
    [
        new GymPokemon('Gyarados', 48300, 58),
        new GymPokemon('Dragonair', 52000, 56),
        new GymPokemon('Dragonair', 57000, 56),
        new GymPokemon('Aerodactyl', 60250, 60),
        new GymPokemon('Dragonite', 66000, 62),
    ],
    BadgeEnums.Elite_Lance,
    7500,
    'I still can’t believe my dragons lost to you! You’re now the Pokémon League champion! …Or, you would have been, but you have one more challenge ahead. You have to face another trainer!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Agatha)]
);
// Kanto Champion
GymList['Champion Blue'] = new Champion(
    'Blue',
    'Champion Blue',
    [
        new GymPokemon('Pidgeot', 52340, 59),
        new GymPokemon('Alakazam', 56320, 57),
        new GymPokemon('Rhydon', 58340, 59),
    ],
    BadgeEnums.Elite_KantoChampion,
    10000,
    'Why? Why did I lose? I never made any mistakes raising my Pokémon… Darn it! You\'re the new Pokémon League Champion! Although I don\'t like to admit it…',
    [new GymBadgeRequirement(BadgeEnums.Elite_Lance)],
    // Bulbasaur
    [
        new GymPokemon('Exeggutor', 57520, 59),
        new GymPokemon('Gyarados', 63040, 61),
        new GymPokemon('Charizard', 70000, 63),
    ],
    // Charmander
    [
        new GymPokemon('Arcanine', 65340, 59),
        new GymPokemon('Exeggutor', 57520, 61),
        new GymPokemon('Blastoise', 70000, 63),
    ],
    // Squirtle/Pikachu
    [
        new GymPokemon('Gyarados', 63040, 59),
        new GymPokemon('Arcanine', 65340, 61),
        new GymPokemon('Venusaur', 70000, 63),
    ]
);

//Johto Gyms
GymList['Violet City'] = new Gym(
    'Falkner',
    'Violet City',
    [
        new GymPokemon('Pidgey', 108000, 7),
        new GymPokemon('Pidgeotto', 112000, 9),
    ],
    BadgeEnums.Zephyr,
    250,
    '...Darn! My Dad\'s cherished bird Pokémon... All right. Take this. It\'s the official Pokémon League Zephyr Badge.',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Sprout Tower'))]
);
GymList['Azalea Town'] = new Gym(
    'Bugsy',
    'Azalea Town',
    [
        new GymPokemon('Metapod', 103000, 14),
        new GymPokemon('Kakuna', 101500, 14),
        new GymPokemon('Scyther', 119000, 16),
    ],
    BadgeEnums.Hive,
    500,
    'Whoa, amazing! You\'re an expert on Pokémon! My research isn\'t complete yet. Ok, you win. Take this Badge.',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Slowpoke Well'))]
);
GymList['Goldenrod City'] = new Gym(
    'Whitney',
    'Goldenrod City',
    [
        new GymPokemon('Clefairy', 130000, 18),
        new GymPokemon('Miltank', 170000, 20),
    ],
    BadgeEnums.Plain,
    1000,
    '...Sniff... What? What do you want? A badge? Oh, right. I forgot. Here\'s the Plain Badge.',
    [new RouteKillRequirement(10, GameConstants.Region.johto, 34)]
);
GymList['Ecruteak City'] = new Gym(
    'Morty',
    'Ecruteak City',
    [
        new GymPokemon('Gastly', 127000, 21),
        new GymPokemon('Haunter', 128000, 21),
        new GymPokemon('Gengar', 132000, 25),
        new GymPokemon('Haunter', 130000, 23),
    ],
    BadgeEnums.Fog,
    1500,
    'I\'m not good enough yet... All right. This Badge is yours.',
    [new GymBadgeRequirement(BadgeEnums.Plain)],
    () => {
        App.game.quests.getQuestLine('Team Rocket Again').beginQuest();
    }
);
GymList['Cianwood City'] = new Gym(
    'Chuck',
    'Cianwood City',
    [
        new GymPokemon('Primeape', 177000, 27),
        new GymPokemon('Poliwrath', 183000, 30),
    ],
    BadgeEnums.Storm,
    2500,
    'Wha? Huh? I lost? How about that! You\'re worthy of the Storm Badge!',
    [new GymBadgeRequirement(BadgeEnums.Fog)]
);
GymList['Olivine City'] = new Gym(
    'Jasmine',
    'Olivine City',
    [
        new GymPokemon('Magnemite', 177000, 30),
        new GymPokemon('Magnemite', 178000, 30),
        new GymPokemon('Steelix', 182000, 35),
    ],
    BadgeEnums.Mineral,
    3500,
    '...You are a better trainer than me, in both skill and kindness. In accordance with League rules, I confer upon you this Badge.',
    [new GymBadgeRequirement(BadgeEnums.Storm)]
);
GymList['Mahogany Town'] = new Gym(
    'Pryce',
    'Mahogany Town',
    [
        new GymPokemon('Seel', 190000, 27),
        new GymPokemon('Dewgong', 192500, 29),
        new GymPokemon('Piloswine', 196000, 31),
    ],
    BadgeEnums.Glacier,
    4000,
    'Ah, I am impressed by your prowess. With your strong will, I know you will overcome all life\'s obstacles. You are worthy of this Badge!',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Team Rockets Hideout'))]
);
GymList['Blackthorn City'] = new Gym(
    'Clair',
    'Blackthorn City',
    [
        new GymPokemon('Dragonair', 205000, 37),
        new GymPokemon('Dragonair', 205000, 37),
        new GymPokemon('Dragonair', 218000, 37),
        new GymPokemon('Kingdra', 220000, 40),
    ],
    BadgeEnums.Rising,
    5000,
    'Here, this is the Rising Badge... Hurry up! Take it!',
    [new GymBadgeRequirement(BadgeEnums.Glacier)]
);

//Johto Elite 4
GymList['Elite Will'] = new Gym(
    'Will',
    'Elite Will',
    [
        new GymPokemon('Xatu', 245330, 40),
        new GymPokemon('Exeggutor', 248300, 41),
        new GymPokemon('Slowbro', 252000, 41),
        new GymPokemon('Jynx', 257000, 41),
        new GymPokemon('Xatu', 260250, 42),
    ],
    BadgeEnums.Elite_Will,
    7500,
    'Even though I was defeated, I won\'t change my course. I will continue battling until I stand above all Trainers! Now move on and experience the true ferocity of the Elite Four.',
    [new GymBadgeRequirement(BadgeEnums.Rising)]
);
GymList['Elite Koga'] = new Gym(
    'Koga2',
    'Elite Koga',
    [
        new GymPokemon('Ariados', 245330, 40),
        new GymPokemon('Venomoth', 248300, 41),
        new GymPokemon('Forretress', 252000, 43),
        new GymPokemon('Muk', 257000, 42),
        new GymPokemon('Crobat', 260250, 44),
    ],
    BadgeEnums.Elite_Koga,
    7500,
    'I subjected you to everything I could muster. But my efforts failed. I must hone my skills. Go on to the next room, and put your abilities to the test!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Will)]
);
GymList['Elite Bruno2'] = new Gym(
    'Bruno2',
    'Elite Bruno2',
    [
        new GymPokemon('Hitmontop', 245330, 42),
        new GymPokemon('Hitmonlee', 248300, 42),
        new GymPokemon('Hitmonchan', 252000, 42),
        new GymPokemon('Onix', 257000, 43),
        new GymPokemon('Machamp', 260250, 46),
    ],
    BadgeEnums.Elite_Bruno2,
    7500,
    'Having lost, I have no right to say anything… Go face your next challenge!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Koga)]
);
GymList['Elite Karen'] = new Gym(
    'Karen',
    'Elite Karen',
    [
        new GymPokemon('Umbreon', 248300, 42),
        new GymPokemon('Vileplume', 252000, 42),
        new GymPokemon('Murkrow', 257000, 44),
        new GymPokemon('Gengar', 260250, 45),
        new GymPokemon('Houndoom', 266000, 47),
    ],
    BadgeEnums.Elite_Karen,
    7500,
    'Strong Pokémon. Weak Pokémon. That is only the selfish perception of people. Truly skilled Trainers should try to win with the Pokémon they love best. I like your style. You understand what\'s important. Go on — — the Champion is waiting.',
    [new GymBadgeRequirement(BadgeEnums.Elite_Bruno2)]
);
// Johto Champion
GymList['Champion Lance'] = new Champion(
    'Lance2',
    'Champion Lance',
    [
        new GymPokemon('Gyarados', 258300, 44),
        new GymPokemon('Dragonite', 262000, 47),
        new GymPokemon('Charizard', 264000, 46),
        new GymPokemon('Aerodactyl', 260250, 46),
        new GymPokemon('Dragonite', 270000, 47),
        new GymPokemon('Dragonite', 270000, 50),
    ],
    BadgeEnums.Elite_JohtoChampion,
    7500,
    '…It\'s over. But it\'s an odd feeling. I\'m not angry that I lost. In fact, I feel happy. Happy that I witnessed the rise of a great new Champion!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Karen)]
);

// Hoenn Gyms
GymList['Rustboro City'] = new Gym(
    'Roxanne',
    'Rustboro City',
    [
        new GymPokemon('Geodude', 382900, 12),
        new GymPokemon('Geodude', 382900, 12),
        new GymPokemon('Nosepass', 410200, 15),
    ],
    BadgeEnums.Stone,
    1000,
    'So… I lost… It seems that I still have much more to learn… I understand. The Pokémon League\'s rules state that Trainers are to be given this if they defeat a Gym Leader. Please accept the official Pokémon League Stone Badge.',
    [new GymBadgeRequirement(BadgeEnums.Elite_JohtoChampion)]
);
GymList['Dewford Town'] = new Gym(
    'Brawly',
    'Dewford Town',
    [
        new GymPokemon('Machop', 424000, 16),
        new GymPokemon('Meditite', 424000, 16),
        new GymPokemon('Makuhita', 444000, 19),
    ],
    BadgeEnums.Knuckle,
    2000,
    'Whoah, wow! You made a much bigger splash than I expected! You swamped me! Okay, you\'ve got me. Take this Gym Badge!'
);
GymList['Mauville City'] = new Gym(
    'Wattson',
    'Mauville City',
    [
        new GymPokemon('Voltorb', 452000, 20),
        new GymPokemon('Electrike', 448000, 20),
        new GymPokemon('Magneton', 483000, 22),
        new GymPokemon('Manectric', 448000, 24),
    ],
    BadgeEnums.Dynamo,
    3000,
    'Wahahahah! Fine, I lost! You ended up giving me a thrill! Take this Badge!',
    [new GymBadgeRequirement(BadgeEnums.Knuckle)],
    () => {
        App.game.quests.getQuestLine('Land vs Water').beginQuest();
    }
);
GymList['Lavaridge Town'] = new Gym(
    'Flannery',
    'Lavaridge Town',
    [
        new GymPokemon('Numel', 472000, 24),
        new GymPokemon('Slugma', 472000, 24),
        new GymPokemon('Camerupt', 492000, 26),
        new GymPokemon('Torkoal', 524000, 29),
    ],
    BadgeEnums.Heat,
    4000,
    'Oh... I guess I was trying too hard... I... I\'ve only recently become a Gym Leader. I tried too hard to be someone I\'m not. I have to do things my natural way. If I don\'t, my Pokémon will be confused. Thanks for teaching me that. For that, you deserve this.'
);
GymList['Petalburg City'] = new Gym(
    'Norman',
    'Petalburg City',
    [
        new GymPokemon('Spinda', 490000, 27),
        new GymPokemon('Vigoroth', 530000, 27),
        new GymPokemon('Linoone', 560000, 29),
        new GymPokemon('Slaking', 596000, 31),
    ],
    BadgeEnums.Balance,
    5000,
    '… I… I can\'t… I can\'t believe it. I lost to you? But, rules are rules! Here, take this.',
    [new GymBadgeRequirement(BadgeEnums.Heat)]
);
GymList['Fortree City'] = new Gym(
    'Winona',
    'Fortree City',
    [
        new GymPokemon('Swablu', 605000, 29),
        new GymPokemon('Tropius', 650000, 29),
        new GymPokemon('Pelipper', 630000, 30),
        new GymPokemon('Skarmory', 667000, 31),
        new GymPokemon('Altaria', 669000, 33),
    ],
    BadgeEnums.Feather,
    6000,
    'Never before have I seen a Trainer command Pokémon with more grace than I... In recognition of your prowess, I present to you this Gym Badge.'
);
GymList['Mossdeep City'] = new Gym(
    'Tate & Liza',
    'Mossdeep City',
    [
        new GymPokemon('Claydol', 702000, 41),
        new GymPokemon('Xatu', 703000, 41),
        new GymPokemon('Lunatone', 702000, 42),
        new GymPokemon('Solrock', 703000, 42),
    ],
    BadgeEnums.Mind,
    8000,
    'What? Our combination... was shattered! It can\'t be helped. You\'ve won... So, in recognition, take this Gym Badge.'
);
GymList['Sootopolis City'] = new Gym(
    'Juan',
    'Sootopolis City',
    [
        new GymPokemon('Luvdisc', 798000, 41),
        new GymPokemon('Whiscash', 813000, 41),
        new GymPokemon('Sealeo', 823400, 43),
        new GymPokemon('Crawdaunt', 842000, 43),
        new GymPokemon('Kingdra', 865000, 46),
    ],
    BadgeEnums.Rain,
    10000,
    'Ahahaha, excellent! Very well, you are the winner. From you, I sense the brilliant shine of skill that will overcome all. However, compared with me or even Wallace, you are lacking in elegance. Perhaps I should make you a loan of my outfit? ... Hahaha, I merely jest! Rather than my clothes, I shall reward you with this, the Rain Badge.',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Sky Pillar'))]
);

// Hoenn Elite 4
GymList['Elite Sidney'] = new Gym(
    'Sidney',
    'Elite Sidney',
    [
        new GymPokemon('Mightyena', 972000, 46),
        new GymPokemon('Shiftry', 980000, 48),
        new GymPokemon('Cacturne', 1002000, 46),
        new GymPokemon('Crawdaunt', 1015000, 48),
        new GymPokemon('Absol', 1020000, 49),
    ],
    BadgeEnums.Elite_Sidney,
    15000,
    'Well, listen to what this loser has to say. You\'ve got what it takes to go far. Now, go on to the next room and enjoy your next battle!',
    [new GymBadgeRequirement(BadgeEnums.Rain)]
);
GymList['Elite Phoebe'] = new Gym(
    'Phoebe',
    'Elite Phoebe',
    [
        new GymPokemon('Dusclops', 1036700, 48),
        new GymPokemon('Banette', 1038000, 49),
        new GymPokemon('Sableye', 1052000, 50),
        new GymPokemon('Banette', 1038000, 49),
        new GymPokemon('Dusclops', 1063000, 51),
    ],
    BadgeEnums.Elite_Phoebe,
    15000,
    'There\'s a definite bond between you and your Pokémon, too. I didn\'t recognize it, so it\'s only natural that I lost. Yup, I\'d like to see how far your bond will carry you. Go ahead, move to the next room.',
    [new GymBadgeRequirement(BadgeEnums.Elite_Sidney)]
);
GymList['Elite Glacia'] = new Gym(
    'Glacia',
    'Elite Glacia',
    [
        new GymPokemon('Sealeo', 1082000, 50),
        new GymPokemon('Glalie', 1072000, 50),
        new GymPokemon('Sealeo', 1086000, 52),
        new GymPokemon('Glalie', 1076000, 52),
        new GymPokemon('Walrein', 1100000, 53),
    ],
    BadgeEnums.Elite_Glacia,
    15000,
    'Advance to the next room. And there, confirm the truly fearsome side of the Pokémon League.',
    [new GymBadgeRequirement(BadgeEnums.Elite_Phoebe)]
);
GymList['Elite Drake'] = new Gym(
    'Drake',
    'Elite Drake',
    [
        new GymPokemon('Shelgon', 1064000, 52),
        new GymPokemon('Altaria', 1072000, 54),
        new GymPokemon('Flygon', 1076000, 53),
        new GymPokemon('Flygon', 1076000, 53),
        new GymPokemon('Salamence', 1157000, 55),
    ],
    BadgeEnums.Elite_Drake,
    15000,
    'You deserve every credit for coming this far as a Trainer of Pokémon. You do seem to know what is needed. Yes, what a Trainer needs is a virtuous heart. Pokémon touch the good hearts of Trainers and learn good from wrong. They touch the good hearts of Trainers and grow strong. Go! Go onwards! The Champion is waiting!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Glacia)]
);

// Hoenn Champion
GymList['Champion Wallace'] = new Champion(
    'Wallace',
    'Champion Wallace',
    [
        new GymPokemon('Wailord', 1202000, 57),
        new GymPokemon('Tentacruel', 1164000, 55),
        new GymPokemon('Ludicolo', 1184000, 56),
        new GymPokemon('Whiscash', 1172000, 56),
        new GymPokemon('Gyarados', 1163000, 56),
        new GymPokemon('Milotic', 1182000, 58),
    ],
    BadgeEnums.Elite_HoennChampion,
    16000,
    'I, the Champion, fall in defeat… That was wonderful work. You were elegant, infuriatingly so. And yet it was utterly glorious! Kudos to you! You are a truly noble Pokémon Trainer!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Drake)],
    undefined,
    undefined,
    undefined,
    () => {
        App.game.quests.getQuestLine('Mystery of Deoxys').beginQuest();
    }
);

//Sinnoh Gyms
GymList['Oreburgh City'] = new Gym(
    'Roark',
    'Oreburgh City',
    [
        new GymPokemon('Geodude', 1338000, 12),
        new GymPokemon('Onix', 1342000, 12),
        new GymPokemon('Cranidos', 1342000, 14),
    ],
    BadgeEnums.Coal,
    250,
    'This is embarrassing... I went and lost to a Trainer who didn\'t have a single Gym Badge... But that\'s tough. You were strong, and I was weak. That\'s all there is. According to Pokémon League rules, I have to give you our Gym Badge since you\'ve beaten me, the Leader. Heres your official Pokémon League Coal Badge.',
    [new GymBadgeRequirement(BadgeEnums.Elite_HoennChampion)],
    () => {
        App.game.quests.getQuestLine('A new world').beginQuest();
    }
);
GymList['Eterna City'] = new Gym(
    'Gardenia',
    'Eterna City',
    [
        new GymPokemon('Turtwig', 1433000, 20),
        new GymPokemon('Cherrim (overcast)', 1437500, 20),
        new GymPokemon('Roserade', 1439000, 22),
    ],
    BadgeEnums.Forest,
    400,
    'I might\'ve said it before, but you\'re really tough! Wasn\'t it hard for you to raise your Pokémon to be so good? I guess that\'s a measure of how much you love your Pokémon. In recognition of that, I proudly grant you this!"',
    [new GymBadgeRequirement(BadgeEnums.Coal)]
);
GymList['Hearthome City'] = new Gym(
    'Fantina',
    'Hearthome City',
    [
        new GymPokemon('Duskull', 1450000, 24),
        new GymPokemon('Haunter', 1480000, 24),
        new GymPokemon('Mismagius', 1480000, 26),
    ],
    BadgeEnums.Relic,
    740,
    'I am dumbfounded! So very, very strong! You, your Pokémon, so strong! Your power is admirable! I shall honor it with this Gym Badge!"',
    [new GymBadgeRequirement(BadgeEnums.Forest)]
);
GymList['Veilstone City'] = new Gym(
    'Maylene',
    'Veilstone City',
    [
        new GymPokemon('Meditite', 1537000, 28),
        new GymPokemon('Machoke', 1538000, 29),
        new GymPokemon('Lucario', 1540000, 32),
    ],
    BadgeEnums.Cobble,
    1200,
    '...OK. You win. That was a tough loss. I learned a lot from it. Please, accept this Gym Badge.',
    [new GymBadgeRequirement(BadgeEnums.Relic)]
);
GymList['Pastoria City'] = new Gym(
    'Crasher Wake',
    'Pastoria City',
    [
        new GymPokemon('Gyarados', 1687000, 33),
        new GymPokemon('Quagsire', 1693000, 34),
        new GymPokemon('Floatzel', 1693000, 37),
    ],
    BadgeEnums.Fen,
    2500,
    'It seems the undertow pulled me under... But I had a great time battling with you! You\'ve earned this!',
    [new GymBadgeRequirement(BadgeEnums.Cobble)]
);
GymList['Canalave City'] = new Gym(
    'Byron',
    'Canalave City',
    [
        new GymPokemon('Magneton', 1767000, 37),
        new GymPokemon('Steelix', 1772000, 38),
        new GymPokemon('Bastiodon', 1768000, 41),
    ],
    BadgeEnums.Mine,
    4800,
    'You were strong enough to take down my prized team of Pokémon. In recognition of that power, I give you this: the Mine Badge!',
    [new GymBadgeRequirement(BadgeEnums.Fen)]
);
GymList['Snowpoint City'] = new Gym(
    'Candice',
    'Snowpoint City',
    [
        new GymPokemon('Sneasel', 1872500, 40),
        new GymPokemon('Piloswine', 1876000, 40),
        new GymPokemon('Abomasnow', 1870000, 42),
        new GymPokemon('Froslass', 1870000, 44),
    ],
    BadgeEnums.Icicle,
    8000,
    'Wow! You\'re great! You\'ve earned my respect! I think your focus and will bowled us over totally. Oh, that\'s right! I\'m supposed to give you this!',
    [new GymBadgeRequirement(BadgeEnums.Mine)]
);
GymList['Sunyshore City'] = new Gym(
    'Volkner',
    'Sunyshore City',
    [
        new GymPokemon('Jolteon', 1965000, 46),
        new GymPokemon('Raichu', 1965000, 46),
        new GymPokemon('Luxray', 1978000, 48),
        new GymPokemon('Electivire', 1980000, 50),
    ],
    BadgeEnums.Beacon,
    12000,
    '...Hehehe. Hahahah! ...That was the most fun I\'ve had in a battle since...I don\'t know when! It\'s also made me excited to know you and your team will keep battling to greater heights! This is your eighth Gym Badge. You\'ve earned this!',
    [new GymBadgeRequirement(BadgeEnums.Icicle)]
);

//Sinnoh Elite 4
GymList['Elite Aaron'] = new Gym(
    'Aaron',
    'Elite Aaron',
    [
        new GymPokemon('Yanmega', 2545330, 49),
        new GymPokemon('Scizor', 2548300, 49),
        new GymPokemon('Vespiquen', 2552000, 50),
        new GymPokemon('Heracross', 2557000, 51),
        new GymPokemon('Drapion', 2560250, 53),
    ],
    BadgeEnums.Elite_Aaron,
    18000,
    'I lost with the most beautiful and toughest of the bug Pokémon... We lost because I wasn\'t good enough... That\'s it! Back to training camp! Let\'s hear it for me! No... That was wrong... Anyway... Go on to the next room! Three Trainers are waiting for you. They are all tougher than me.',
    [new GymBadgeRequirement(BadgeEnums.Beacon)]
);
GymList['Elite Bertha'] = new Gym(
    'Bertha',
    'Elite Bertha',
    [
        new GymPokemon('Whiscash', 2645330, 50),
        new GymPokemon('Gliscor', 2648300, 53),
        new GymPokemon('Hippowdon', 2652000, 52),
        new GymPokemon('Golem', 2657000, 52),
        new GymPokemon('Rhyperior', 2660250, 55),
    ],
    BadgeEnums.Elite_Bertha,
    18000,
    'You\'re quite something, youngster. I like how you and your Pokémon earned the win by working as one. That\'s what makes you so strong. Ahahaha! I think that you can go as far as you want.',
    [new GymBadgeRequirement(BadgeEnums.Elite_Aaron)]
);
GymList['Elite Flint'] = new Gym(
    'Flint',
    'Elite Flint',
    [
        new GymPokemon('Houndoom', 2845330, 52),
        new GymPokemon('Flareon', 2848300, 55),
        new GymPokemon('Rapidash', 2852000, 53),
        new GymPokemon('Infernape', 2857000, 55),
        new GymPokemon('Magmortar', 2860250, 57),
    ],
    BadgeEnums.Elite_Flint,
    18000,
    '.........Keep going...I know your spirit burns hot. Your whole team does.',
    [new GymBadgeRequirement(BadgeEnums.Elite_Bertha)]
);
GymList['Elite Lucian'] = new Gym(
    'Lucian',
    'Elite Lucian',
    [
        new GymPokemon('Mr. Mime', 3048300, 53),
        new GymPokemon('Espeon', 3052000, 55),
        new GymPokemon('Bronzong', 3057000, 54),
        new GymPokemon('Alakazam', 3060250, 56),
        new GymPokemon('Gallade', 3066000, 59),
    ],
    BadgeEnums.Elite_Lucian,
    18000,
    'Congratulations. You have beaten the Elite Four. However, that doesn\'t mean you\'re done with the Pokémon league. There remains the Champion. I should warn you—the Champion is far stronger than the Elite Four. Now, go on. Step through the doorway to your final battle.',
    [new GymBadgeRequirement(BadgeEnums.Elite_Flint)]
);

// Sinnoh Champion
GymList['Champion Cynthia'] = new Champion(
    'Cynthia',
    'Champion Cynthia',
    [
        new GymPokemon('Spiritomb', 3458300, 58),
        new GymPokemon('Roserade', 3462000, 58),
        new GymPokemon('Togekiss', 3464000, 60),
        new GymPokemon('Lucario', 3460250, 60),
        new GymPokemon('Milotic', 3470000, 58),
        new GymPokemon('Garchomp', 3570000, 62),
    ],
    BadgeEnums.Elite_SinnohChampion,
    32000,
    'That was excellent. Truly, an outstanding battle. You gave the support your Pokémon needed to maximize their power. And you guided them with certainty to secure victory. You have both passion and calculating coolness. Together, you and your Pokémon can overcome any challenge that may come your way. Those are the impressions I got from our battle. I\'m glad I got to take part in the crowning of Sinnoh\'s new Champion!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Lucian)]
);

//Unova Gyms
//TODO: Balancing of gym Pokemon HP & rewards.
GymList['Aspertia City'] = new Gym(
    'Cheren',
    'Aspertia City',
    [
        new GymPokemon('Patrat', 3458300, 58),
        new GymPokemon('Pidove', 3462000, 58),
        new GymPokemon('Lillipup', 3464000, 58),
    ],
    BadgeEnums.Basic,
    500,
    'That battle has made me feel really glad you were my first challenger as a Gym Leader… I give you this in honor of the strength you and your Pokémon showed!',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Floccesy Ranch'))]
);
GymList['Virbank City'] = new Gym(
    'Roxie',
    'Virbank City',
    [
        new GymPokemon('Koffing', 3658300, 58),
        new GymPokemon('Grimer', 3662000, 58),
        new GymPokemon('Whirlipede', 3664000, 58),
    ],
    BadgeEnums.Toxic,
    800,
    'Sigh! What are you doing losing, Roxie?! Well…I guess that means you\'re strong! This stinks, but I gave it everything I had, and I feel revitalized and refreshed now! Here! Proof that you beat me!',
    [new GymBadgeRequirement(BadgeEnums.Basic)]
);
GymList['Castelia City'] = new Gym(
    'Burgh',
    'Castelia City',
    [
        new GymPokemon('Dwebble', 3858300, 58),
        new GymPokemon('Shelmet', 3862000, 58),
        new GymPokemon('Karrablast', 3964000, 58),
        new GymPokemon('Leavanny', 4064000, 58),
    ],
    BadgeEnums.Insect,
    1500,
    'Oh hoo… You are very strong indeed! I guess it\'s no surprise I lost. Here! Take this Insect Badge! I think it\'ll suit you!',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Castelia Sewers'))]
);
GymList['Nimbasa City'] = new Gym(
    'Elesa',
    'Nimbasa City',
    [
        new GymPokemon('Emolga', 4258300, 58),
        new GymPokemon('Flaaffy', 4262000, 58),
        new GymPokemon('Joltik', 4464000, 58),
        new GymPokemon('Zebstrika', 4464000, 58),
    ],
    BadgeEnums.Bolt,
    2600,
    'Well… Now you… you\'re an even more wonderful Trainer than I expected. Your sweet fighting style swept me off my feet! Take this!',
    [new GymBadgeRequirement(BadgeEnums.Insect)]
);
GymList['Driftveil City'] = new Gym(
    'Clay',
    'Driftveil City',
    [
        new GymPokemon('Krokorok', 4658300, 58),
        new GymPokemon('Sandslash', 4662000, 58),
        new GymPokemon('Onix', 4864000, 58),
        new GymPokemon('Excadrill', 5064000, 58),
    ],
    BadgeEnums.Quake,
    4800,
    'Phew… You\'re really somethin\'! Li\'l whippersnapper Trainers who pack a real punch keep showin\' up one after another. Mrmph. Here! Take this!',
    [new GymBadgeRequirement(BadgeEnums.Bolt)]
);
GymList['Mistralton City'] = new Gym(
    'Skyla',
    'Mistralton City',
    [
        new GymPokemon('Swoobat', 5458300, 58),
        new GymPokemon('Skarmory', 6062000, 58),
        new GymPokemon('Sigilyph', 5664000, 58),
        new GymPokemon('Swanna', 5864000, 58),
    ],
    BadgeEnums.Jet,
    7600,
    'You\'re an amazing Pokémon Trainer. My Pokémon and I are happy because for the first time in quite a while--about two years, I\'d say--we could fight with our full strength. This is an official League Gym Badge. But this is just a stepping-stone.',
    [new GymBadgeRequirement(BadgeEnums.Quake)],
    () => {
        App.game.quests.getQuestLine('Quest for the DNA Splicers').beginQuest();
    }
);
GymList['Opelucid City'] = new Gym(
    'Drayden',
    'Opelucid City',
    [
        new GymPokemon('Druddigon', 6558300, 58),
        new GymPokemon('Flygon', 6662000, 58),
        new GymPokemon('Altaria', 6464000, 58),
        new GymPokemon('Haxorus', 6964000, 58),
    ],
    BadgeEnums.Legend,
    14000,
    'Wonderful. I\'m grateful that we had a chance to meet and battle. It reminded me that Pokémon battles are about working with others to meet our challenges together.',
    [new GymBadgeRequirement(BadgeEnums.Jet)]
);
GymList['Humilau City'] = new Gym(
    'Marlon',
    'Humilau City',
    [
        new GymPokemon('Wailord', 7458300, 58),
        new GymPokemon('Mantine', 7262000, 58),
        new GymPokemon('Carracosta', 7064000, 58),
        new GymPokemon('Jellicent', 7464000, 58),
    ],
    BadgeEnums.Wave,
    27000,
    'You don\'t just look strong, you\'re strong fo\' reals! Eh, I was swept away, too! Oh yeah, yo. I was so surprised that I forgot! I gotta give this to you!',
    [new GymBadgeRequirement(BadgeEnums.Legend)]
);

//Unova Elite 4
//TODO: Balancing of elite Pokemon HP & rewards.
GymList['Elite Shauntal'] = new Gym(
    'Shauntal',
    'Elite Shauntal',
    [
        new GymPokemon('Cofagrigus', 8945330, 49),
        new GymPokemon('Gengar', 8948300, 49),
        new GymPokemon('Froslass', 8952000, 50),
        new GymPokemon('Drifblim', 8957000, 51),
        new GymPokemon('Golurk', 8960250, 53),
        new GymPokemon('Chandelure', 8960250, 53),
    ],
    BadgeEnums.Elite_Shauntal,
    32000,
    'My Pokémon and the challenger\'s Pokémon. Everyone battled even though they were hurt... Thank you.',
    [new GymBadgeRequirement(BadgeEnums.Wave)]
);
GymList['Elite Marshal'] = new Gym(
    'Marshal',
    'Elite Marshal',
    [
        new GymPokemon('Throh', 9945330, 49),
        new GymPokemon('Sawk', 9948300, 49),
        new GymPokemon('Lucario', 9952000, 50),
        new GymPokemon('Mienshao', 9957000, 51),
        new GymPokemon('Machamp', 9957000, 51),
        new GymPokemon('Conkeldurr', 9960250, 53),
    ],
    BadgeEnums.Elite_Marshal,
    32000,
    'Whew! Well done! As your battles continue, aim for even greater heights!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Shauntal)]
);
GymList['Elite Grimsley'] = new Gym(
    'Grimsley',
    'Elite Grimsley',
    [
        new GymPokemon('Honchkrow', 10945330, 49),
        new GymPokemon('Scrafty', 10948300, 49),
        new GymPokemon('Krookodile', 10952000, 50),
        new GymPokemon('Houndoom', 10957000, 51),
        new GymPokemon('Tyranitar', 10957000, 51),
        new GymPokemon('Bisharp', 10960250, 53),
    ],
    BadgeEnums.Elite_Grimsley,
    32000,
    'Whether or not you get to fight at full strength, whether or not luck smiles on you--none of that matters. Only results matter. And a loss is a loss. See, victory shines like a bright light. And right now, you and your Pokémon are shining brilliantly.',
    [new GymBadgeRequirement(BadgeEnums.Elite_Marshal)]
);
GymList['Elite Caitlin'] = new Gym(
    'Caitlin',
    'Elite Caitlin',
    [
        new GymPokemon('Musharna', 11945330, 49),
        new GymPokemon('Alakazam', 11948300, 49),
        new GymPokemon('Gothitelle', 11957000, 51),
        new GymPokemon('Gallade', 11957000, 51),
        new GymPokemon('Reuniclus', 11952000, 50),
        new GymPokemon('Metagross', 11960250, 53),
    ],
    BadgeEnums.Elite_Caitlin,
    32000,
    'You and your Pokémon are both excellent and elegant. To have been able to battle against such a splendid team... My Pokémon and I learned a lot! I offer you my thanks.',
    [new GymBadgeRequirement(BadgeEnums.Elite_Grimsley)]
);

// Unova Champion
GymList['Champion Iris'] = new Champion(
    'Iris',
    'Champion Iris',
    [
        new GymPokemon('Hydreigon', 12458300, 58),
        new GymPokemon('Salamence', 12462000, 58),
        new GymPokemon('Aggron', 12464000, 58),
        new GymPokemon('Archeops', 12460250, 60),
        new GymPokemon('Lapras', 12470000, 58),
        new GymPokemon('Haxorus', 14570000, 62),
    ],
    BadgeEnums.Elite_UnovaChampion,
    64000,
    'I\'m upset I couldn\'t win! But you know what? More than that, I\'m happy! I mean, come on. By having a serious battle, you and your Pokémon, and me and my Pokémon, we all got to know one another better than before! Yep, we sure did! OK, let\'s go!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Caitlin)]
);

//Kalos Gyms
//TODO: Balancing of gym Pokemon HP & rewards.
GymList['Santalune City'] = new Gym(
    'Viola',
    'Santalune City',
    [
        new GymPokemon('Surskit', 13737400, 10),
        new GymPokemon('Vivillon (Meadow)', 17395730, 12),
    ],
    BadgeEnums.Bug,
    800,
    'Young Trainer, you... No, it wasn\'t you alone. You and your Pokémon have shown me a whole new depth of field! Fantastic! Just fantastic!',
    [new RouteKillRequirement(10, GameConstants.Region.kalos, 3)]
);
GymList['Cyllage City'] = new Gym(
    'Grant',
    'Cyllage City',
    [
        new GymPokemon('Amaura', 16937530, 25),
        new GymPokemon('Tyrunt', 19837400, 25),
    ],
    BadgeEnums.Cliff,
    1700,
    'There are some things that seem out of reach no matter how hard you try. However, it\'s important that you never give up--no matter the opponent or the odds. I could tell from our battle that you and your Pokémon understand that. To commemorate such an impressive show of teamwork, please accept the Cliff Badge!',
    [new GymBadgeRequirement(BadgeEnums.Bug)]
);
GymList['Shalour City'] = new Gym(
    'Korrina',
    'Shalour City',
    [
        new GymPokemon('Mienfoo', 21558300, 29),
        new GymPokemon('Machoke', 22062000, 28),
        new GymPokemon('Hawlucha', 22362000, 32),
    ],
    BadgeEnums.Rumble,
    3800,
    'Oh! I have been defeated! Alack, alay! Lady Korrina gave a terrible display! This is it. I must give up my title and admit that your strength far exceeds-- Just teasing! But here\'s your Badge. Boy, you\'ll be rolling in \'em soon!',
    [new GymBadgeRequirement(BadgeEnums.Cliff)]
);
GymList['Coumarine City'] = new Gym(
    'Ramos',
    'Coumarine City',
    [
        new GymPokemon('Jumpluff', 25508300, 30),
        new GymPokemon('Weepinbell', 27562000, 31),
        new GymPokemon('Gogoat', 29502000, 34),
    ],
    BadgeEnums.Plant,
    5500,
    'Yeh believe in yer Pokémon... And they believe in yeh, too... Mighty oaks from acorns grow. Go on, then. Yeh\'ve earned it. Here\'s yer own Plant Badge, sprout.',
    [new GymBadgeRequirement(BadgeEnums.Rumble)]
);
GymList['Lumiose City'] = new Gym(
    'Clemont',
    'Lumiose City',
    [
        new GymPokemon('Emolga', 30058300, 35),
        new GymPokemon('Magneton', 31062000, 35),
        new GymPokemon('Heliolisk', 32062000, 37),
    ],
    BadgeEnums.Voltage,
    9000,
    'Oh, Bonnie... When will you learn there\'s no shame in losing? I\'m glad whenever I get to learn something new thanks to strong challengers like you here.',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Kalos Power Plant'))]
);
GymList['Laverre City'] = new Gym(
    'Valerie',
    'Laverre City',
    [
        new GymPokemon('Mawile', 33058300, 38),
        new GymPokemon('Mr. Mime', 36462000, 38),
        new GymPokemon('Sylveon', 38062000, 42),
    ],
    BadgeEnums.Fairy,
    16000,
    'Yes... That was a fine battle. I shall reward you for this great victory. This is the Fairy Badge. It is yours now. Its beauty is captivating, is it not? ... ... ... ... ... ... Ah... Do forgive me. I was so captivated, I forgot for a moment that it is yours.',
    [new GymBadgeRequirement(BadgeEnums.Voltage)]
);
GymList['Anistar City'] = new Gym(
    'Olympia',
    'Anistar City',
    [
        new GymPokemon('Sigilyph', 40058300, 44),
        new GymPokemon('Slowking', 42062000, 45),
        new GymPokemon('Meowstic', 44462000, 48),
    ],
    BadgeEnums.Psychic,
    30000,
    'Now, the Psychic Badge. A testament to your skill. Proof of your power.',
    [new GymBadgeRequirement(BadgeEnums.Fairy)]
);
GymList['Snowbelle City'] = new Gym(
    'Wulfric',
    'Snowbelle City',
    [
        new GymPokemon('Abomasnow', 46558300, 56),
        new GymPokemon('Cryogonal', 47654830, 55),
        new GymPokemon('Avalugg', 50062000, 59),
    ],
    BadgeEnums.Iceberg,
    52000,
    'Impressive! Your Pokémon fought with great courage. I can tell that you\'ve trained your Pokémon well.',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Pokémon Village'))],
    () => {
        App.game.quests.getQuestLine('The Great Vivillon Hunt!').beginQuest();
    }
);
//Kalos Elite 4
//TODO: Balancing of elite Pokemon HP & rewards.
GymList['Elite Malva'] = new Gym(
    'Malva',
    'Elite Malva',
    [
        new GymPokemon('Pyroar', 54696969, 63),
        new GymPokemon('Torkoal', 55048300, 63),
        new GymPokemon('Chandelure', 55052000, 63),
        new GymPokemon('Talonflame', 55557000, 65),
    ],
    BadgeEnums.Elite_Malva,
    64000,
    'What news... So a new challenger has defeated Malva of the Elite Four!',
    [new GymBadgeRequirement(BadgeEnums.Iceberg)]
);
GymList['Elite Siebold'] = new Gym(
    'Siebold',
    'Elite Siebold',
    [
        new GymPokemon('Clawitzer', 54696969, 63),
        new GymPokemon('Gyarados', 55405330, 63),
        new GymPokemon('Starmie', 55405330, 63),
        new GymPokemon('Barbaracle', 55557000, 65),
    ],
    BadgeEnums.Elite_Siebold,
    64000,
    'I shall store my memory of you and your Pokémon forever away within my heart.',
    [new GymBadgeRequirement(BadgeEnums.Elite_Malva)]
);
GymList['Elite Wikstrom'] = new Gym(
    'Wikstrom',
    'Elite Wikstrom',
    [
        new GymPokemon('Klefki', 54696969, 63),
        new GymPokemon('Probopass', 55405330, 63),
        new GymPokemon('Scizor', 55405330, 63),
        new GymPokemon('Aegislash', 55557000, 65),
    ],
    BadgeEnums.Elite_Wikstrom,
    64000,
    'Glorious! The trust that you share with your honorable Pokémon surpasses even mine!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Siebold)]
);
GymList['Elite Drasna'] = new Gym(
    'Drasna',
    'Elite Drasna',
    [
        new GymPokemon('Dragalge', 54696969, 63),
        new GymPokemon('Druddigon', 55405330, 63),
        new GymPokemon('Altaria', 55405330, 63),
        new GymPokemon('Noivern', 55557000, 65),
    ],
    BadgeEnums.Elite_Drasna,
    64000,
    'Oh, dear me. That sure was a quick battle... I do hope you\'ll come back again sometime!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Wikstrom)]
);

// Kalos Champion
GymList['Champion Diantha'] = new Champion(
    'Diantha',
    'Champion Diantha',
    [
        new GymPokemon('Hawlucha', 60083000, 64),
        new GymPokemon('Tyrantrum', 62057000, 65),
        new GymPokemon('Aurorus', 62057000, 65),
        new GymPokemon('Gourgeist', 62557000, 65),
        new GymPokemon('Goodra', 62170000, 66),
        new GymPokemon('Mega Gardevoir', 63070000, 68),
    ],
    BadgeEnums.Elite_KalosChampion,
    128000,
    'Witnessing the noble spirits of you and your Pokémon in battle has really touched my heart...',
    [new GymBadgeRequirement(BadgeEnums.Elite_Drasna)]
);

//Alola Gyms
//TODO: Balancing of gym Pokemon HP & rewards.
GymList['Iki Town'] = new Gym(
    'Hala',
    'Iki Town',
    [
        new GymPokemon('Machop', 62058739, 15),
        new GymPokemon('Makuhita', 62058739, 15),
        new GymPokemon('Crabrawler', 63069612, 16),
    ],
    BadgeEnums.FightiniumZ,
    128000,
    'The results come as no surprise to me. What a fine Trainer...and what fine Pokémon, too!',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Melemele Meadow'))]
);
GymList['Konikoni City'] = new Gym(
    'Olivia',
    'Konikoni City',
    [
        new GymPokemon('Anorith', 66147743, 27),
        new GymPokemon('Lileep', 66147743, 27),
        new GymPokemon('Lycanroc (Midnight)', 67478674, 28),
    ],
    BadgeEnums.RockiumZ,
    128000,
    'How lovely.',
    [new RouteKillRequirement(10, GameConstants.Region.alola, 9)],
    () => {
        App.game.quests.getQuestLine('Eater of Light').beginQuest();
    }
);
GymList['Malie City'] = new Gym(
    'Nanu',
    'Malie City',
    [
        new GymPokemon('Sableye', 70650480, 43),
        new GymPokemon('Krokorok', 70650480, 43),
        new GymPokemon('Alolan Persian', 71735104, 44),
    ],
    BadgeEnums.DarkiniumZ,
    128000,
    'Hmph...',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Po Town'))]
);
GymList['Exeggutor Island'] = new Gym(
    'Hapu',
    'Exeggutor Island',
    [
        new GymPokemon('Golurk', 76658268, 53),
        new GymPokemon('Gastrodon (east)', 76658268, 53),
        new GymPokemon('Flygon', 76658268, 53),
        new GymPokemon('Mudsdale', 77747374, 54),
    ],
    BadgeEnums.GroundiumZ,
    128000,
    'You have succeeded in your final grand trial!',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Mina\'s Houseboat'))]
);
//trials
GymList['Ilima\'s Trial'] = new Gym(
    'Ilima',
    'Verdant Cavern',
    [
        new GymPokemon('Gumshoos', 2458300, 51),
        new GymPokemon('Smeargle', 2462000, 51),
        new GymPokemon('Komala', 2462000, 51),
    ],
    BadgeEnums.NormaliumZ,
    128000,
    'You have received the Normalium-Z!',
    undefined,
    undefined,
    {
        quest: false,
        achievement: false,
    }
);
GymList['Lana\'s Trial'] = new Gym(
    'Lana',
    'Brooklet Hill',
    [
        new GymPokemon('Lanturn', 2458300, 51),
        new GymPokemon('Cloyster', 2462000, 51),
        new GymPokemon('Araquanid', 2462000, 51),
    ],
    BadgeEnums.WateriumZ,
    128000,
    'You have received the Waterium-Z!',
    undefined,
    undefined,
    {
        quest: false,
        achievement: false,
    }
);
GymList['Kiawe\'s Trial'] = new Gym(
    'Kiawe',
    'Wela Volcano Park',
    [
        new GymPokemon('Arcanine', 2458300, 51),
        new GymPokemon('Talonflame', 2462000, 51),
        new GymPokemon('Alolan Marowak', 2462000, 51),
    ],
    BadgeEnums.FiriumZ,
    128000,
    'You have received the Firium-Z!',
    undefined,
    undefined,
    {
        quest: false,
        achievement: false,
    }
);
GymList['Mallow\'s Trial'] = new Gym(
    'Mallow',
    'Lush Jungle',
    [
        new GymPokemon('Trevenant', 2458300, 51),
        new GymPokemon('Shiinotic', 2462000, 51),
        new GymPokemon('Tsareena', 2462000, 51),
    ],
    BadgeEnums.GrassiumZ,
    128000,
    'You have received the Grassium-Z!',
    undefined,
    undefined,
    {
        quest: false,
        achievement: false,
    }
);
GymList['Sophocles\' Trial'] = new Gym(
    'Sophocles',
    'Hokulani Observatory',
    [
        new GymPokemon('Togedemaru', 2458300, 51),
        new GymPokemon('Magnezone', 2462000, 51),
        new GymPokemon('Alolan Golem', 2462000, 51),
    ],
    BadgeEnums.ElectriumZ,
    128000,
    'You have received the Electrium-Z!',
    undefined,
    undefined,
    {
        quest: false,
        achievement: false,
    }
);
GymList['Acerola\'s Trial'] = new Gym(
    'Acerola',
    'Thrifty Megamart',
    [
        new GymPokemon('Haunter', 2458300, 51),
        new GymPokemon('Gengar', 2462000, 51),
        new GymPokemon('Mimikyu', 2462000, 51),
    ],
    BadgeEnums.GhostiumZ,
    128000,
    'You have received the Ghostium-Z!',
    undefined,
    undefined,
    {
        quest: false,
        achievement: false,
    }
);
GymList['Vast Poni Canyon Trial'] = new Gym(
    'Totem Kommo-o',
    'Vast Poni Canyon',
    [
        new GymPokemon('Jangmo-o', 2458300, 51),
        new GymPokemon('Hakamo-o', 2462000, 51),
        new GymPokemon('Kommo-o', 2462000, 51),
    ],
    BadgeEnums.DragoniumZ,
    128000,
    'You have received the Dragonium-Z!',
    undefined,
    undefined,
    {
        quest: false,
        achievement: false,
    }
);
GymList['Mina\'s Trial'] = new Gym(
    'Mina',
    'Mina\'s Houseboat',
    [
        new GymPokemon('Pelipper', 2458300, 51),
        new GymPokemon('Chansey', 2462000, 51),
        new GymPokemon('Ribombee', 2462000, 51),
    ],
    BadgeEnums.FairiumZ,
    128000,
    'You have received the Fairium-Z!',
    undefined,
    undefined,
    {
        quest: false,
        achievement: false,
    }
);

//Alola Elite 4
//TODO: Balancing of elite Pokemon HP & rewards.
GymList['Elite Molayne'] = new Gym(
    'Molayne',
    'Elite Molayne',
    [
        new GymPokemon('Klefki', 85547357, 56),
        new GymPokemon('Bisharp', 85547357, 56),
        new GymPokemon('Magnezone', 85547357, 56),
        new GymPokemon('Metagross', 85547357, 56),
        new GymPokemon('Alolan Dugtrio', 86456446, 57),
    ],
    BadgeEnums.Elite_Molayne,
    64000,
    'That Kukui... He certainly found an interesting Trainer for me to face!',
    [new GymBadgeRequirement(BadgeEnums.GroundiumZ)]
);
GymList['Elite Olivia'] = new Gym(
    'Olivia',
    'Elite Olivia',
    [
        new GymPokemon('Armaldo', 85547357, 56),
        new GymPokemon('Cradily', 85547357, 56),
        new GymPokemon('Gigalith', 85547357, 56),
        new GymPokemon('Probopass', 85547357, 56),
        new GymPokemon('Lycanroc (Midnight)', 86456446, 57),
    ],
    BadgeEnums.Elite_Olivia,
    64000,
    'I don\'t see the same look in your eyes that I saw when we first met on Akala Island. Have you had some experiences that you\'ll carry with you in your heart forever? Well, it\'s time for you to move on.',
    [new GymBadgeRequirement(BadgeEnums.Elite_Molayne)]
);
GymList['Elite Acerola'] = new Gym(
    'Acerola',
    'Elite Acerola',
    [
        new GymPokemon('Banette', 85547357, 56),
        new GymPokemon('Drifblim', 85547357, 56),
        new GymPokemon('Dhelmise', 85547357, 56),
        new GymPokemon('Froslass', 85547357, 56),
        new GymPokemon('Palossand', 86456446, 57),
    ],
    BadgeEnums.Elite_Acerola,
    64000,
    'I\'m...I\'m speechless! You\'ve done me in!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Olivia)]
);
GymList['Elite Kahili'] = new Gym(
    'Kahili',
    'Elite Kahili',
    [
        new GymPokemon('Braviary', 85547357, 56),
        new GymPokemon('Hawlucha', 85547357, 56),
        new GymPokemon('Oricorio (Baile)', 85547357, 56),
        new GymPokemon('Mandibuzz', 85547357, 56),
        new GymPokemon('Toucannon', 86456446, 57),
    ],
    BadgeEnums.Elite_Kahili,
    64000,
    'It\'s frustrating to me as a member of the Elite Four, but it seems your strength is the real deal.',
    [new GymBadgeRequirement(BadgeEnums.Elite_Acerola)]
);

// Alola Champion
// TODO: Balancing - Set HP
GymList['Champion Hau'] = new Champion(
    'Hau',
    'Champion Hau',
    [
        new GymPokemon('Alolan Raichu', 91545555, 59),
        new GymPokemon('Tauros', 89636471, 58),
        new GymPokemon('Noivern', 89636471, 58),
        new GymPokemon('Crabominable', 91545555, 59),
    ],
    BadgeEnums.Elite_AlolaChampion,
    100000,
    'We\'re gonna keep moving forward, by staying at full power all the time!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Kahili)],
    // Bulbasaur
    [
        new GymPokemon('Flareon', 89636471, 58),
        new GymPokemon('Primarina', 96725389, 60),
    ],
    // Charmander
    [
        new GymPokemon('Vaporeon', 89636471, 58),
        new GymPokemon('Decidueye', 96725389, 60),
    ],
    // Squirtle/Pikachu
    [
        new GymPokemon('Leafeon', 89636471, 58),
        new GymPokemon('Incineroar', 96725389, 60),
    ]
);


//Galar Leaders
//TODO Addition of G-Max forms?
GymList['Turffield'] = new Gym(
    'Milo',
    'Turffield',
    [
        new GymPokemon('Gossifleur', 40466361, 19),
        new GymPokemon('Eldegoss', 42596169, 20),
    ],
    BadgeEnums.Galar_Grass,
    40000,
    'The power of Grass has wilted... What an incredible Gym Challenger!',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 4)]
);
GymList['Hulbury'] = new Gym(
    'Nessa',
    'Hulbury',
    [
        new GymPokemon('Goldeen', 47607484, 22),
        new GymPokemon('Arrokuda', 48108615, 23),
        new GymPokemon('Drednaw', 50113141, 24),
    ],
    BadgeEnums.Galar_Water,
    60000,
    'I may proudly be the strongest member of this Gym, but I was totally washed away!',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 5)]
);
GymList['Motostoke'] = new Gym(
    'Kabu',
    'Motostoke',
    [
        new GymPokemon('Ninetales', 56008804, 25),
        new GymPokemon('Arcanine', 56008804, 25),
        new GymPokemon('Centiskorch', 58936636, 27),
    ],
    BadgeEnums.Galar_Fire,
    60000,
    'I\'m often regarded as the first real roadblock of the Gym Challenge, and yet you defeated me! Clearly, your talent surpassed my many years of experience. I still have much to learn!',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 13)]
);
GymList['Stow-on-Side1'] = new Gym(
    'Bea',
    'Stow-on-Side1',
    [
        new GymPokemon('Hitmontop', 65892712, 34),
        new GymPokemon('Pangoro', 65892712, 34),
        new GymPokemon('Sirfetch\'d', 66586319, 35),
        new GymPokemon('Machamp', 69360749, 36),
    ],
    BadgeEnums.Galar_Fighting,
    80000,
    'Your strength nearly made me want to turn and run in my bare feet!',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 15)]
);
GymList['Stow-on-Side2'] = new Gym(
    'Allister',
    'Stow-on-Side2',
    [
        new GymPokemon('Galarian Yamask', 65892712, 34),
        new GymPokemon('Mimikyu', 65892712, 34),
        new GymPokemon('Cursola', 66586319, 35),
        new GymPokemon('Gengar', 69360749, 36),
    ],
    BadgeEnums.Galar_Ghost,
    80000,
    'Maybe my mask... kept me from seeing just how strong you really are...',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 15)]
);
GymList['Ballonlea'] = new Gym(
    'Opal',
    'Ballonlea',
    [
        new GymPokemon('Galarian Weezing', 71622513, 36),
        new GymPokemon('Mawile', 71622513, 36),
        new GymPokemon('Togekiss', 73130355, 37),
        new GymPokemon('Alcremie (Strawberry Vanilla)', 75392119, 38),
    ],
    BadgeEnums.Galar_Fairy,
    80000,
    'Your pink is still lacking, but you\'re an excellent Trainer with some excellent Pokémon.',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Glimwood Tangle'))]
);
GymList['Circhester1'] = new Gym(
    'Gordie',
    'Circhester1',
    [
        new GymPokemon('Barbaracle', 84261781, 40),
        new GymPokemon('Shuckle', 84261781, 40),
        new GymPokemon('Stonjourner', 86035713, 41),
        new GymPokemon('Coalossal', 88696611, 42),
    ],
    BadgeEnums.Galar_Rock,
    80000,
    'I just want to climb into a hole... Well, I guess it\'d be more like falling from here.',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 18)]
);
GymList['Circhester2'] = new Gym(
    'Melony',
    'Circhester2',
    [
        new GymPokemon('Frosmoth', 84261781, 40),
        new GymPokemon('Galarian Darmanitan', 84261781, 40),
        new GymPokemon('Eiscue', 86035713, 41),
        new GymPokemon('Lapras', 88696611, 42),
    ],
    BadgeEnums.Galar_Ice,
    80000,
    'I think you took breaking the ice a little too literally...',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 18)]
);
GymList['Spikemuth'] = new Gym(
    'Piers',
    'Spikemuth',
    [
        new GymPokemon('Scrafty', 99141007, 44),
        new GymPokemon('Malamar', 100184597, 45),
        new GymPokemon('Skuntank', 100184597, 45),
        new GymPokemon('Obstagoon', 104348955, 46),
    ],
    BadgeEnums.Galar_Dark,
    96000,
    'Me an\' my team gave it our best. Let\'s meet up again for a battle some time...',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 22)]
);
GymList['Hammerlocke'] = new Gym(
    'Raihan',
    'Hammerlocke',
    [
        new GymPokemon('Gigalith', 111645278, 46),
        new GymPokemon('Flygon', 112820492, 47),
        new GymPokemon('Sandaconda', 111645278, 46),
        new GymPokemon('Duraludon', 117521346, 48),
    ],
    BadgeEnums.Galar_Dragon,
    128000,
    'I might have lost, but I still look good. Maybe I should snap a quick selfie...',
    [
        new RouteKillRequirement(10, GameConstants.Region.galar, 22),
        new GymBadgeRequirement(BadgeEnums.Galar_Dark),
    ]
);
GymList['Trainer Marnie'] = new Gym(
    'Marnie',
    'Trainer Marnie',
    [
        new GymPokemon('Liepard', 117521346, 47),
        new GymPokemon('Toxicroak', 117521346, 47),
        new GymPokemon('Scrafty', 117521346, 47),
        new GymPokemon('Morpeko', 127967688, 48),
        new GymPokemon('Grimmsnarl', 130579274, 49),
    ],
    BadgeEnums.Elite_Marnie,
    150000,
    'I mean, If you\'re gonna win, you could at least win in a way that makes me look good, right?',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Rose Tower'))]
);
GymList['Gym Leader Bede'] = new Gym(
    'Bede',
    'Gym Leader Bede',
    [
        new GymPokemon('Mawile', 117521346, 51),
        new GymPokemon('Sylveon', 117521346, 51),
        new GymPokemon('Gardevoir', 117521346, 51),
        new GymPokemon('Galarian Rapidash', 127967688, 52),
        new GymPokemon('Hatterene', 130579274, 53),
    ],
    BadgeEnums.Elite_Bede,
    150000,
    'I couldn\'t win, but at least I was able to show everyone how great Fairy types are.',
    [new GymBadgeRequirement(BadgeEnums.Elite_Marnie)]
);
GymList['Trainer Hop'] = new Gym(
    'Hop',
    'Trainer Hop',
    [
        new GymPokemon('Dubwool', 130579274, 59),
        new GymPokemon('Cramorant', 117521346, 58),
        new GymPokemon('Pincurchin', 117521346, 58),
        new GymPokemon('Snorlax', 117521346, 58),
        new GymPokemon('Corviknight', 130579274, 59),
        new GymPokemon('Inteleon', 137833678, 60),
    ],
    BadgeEnums.Elite_Hop,
    200000,
    'Thanks, mate. I\'m really glad you were the one here with me.',
    [new GymBadgeRequirement(BadgeEnums.Elite_Bede)]
    // TODO: Add ability to change gym leaders pokemon based on your starter
    // Bulbasaur
    // [new GymPokemon('Inteleon', 137833678, 60)],
    // Charmander
    // [new GymPokemon('Rillaboom', 137833678, 60)],
    // Squirtle/Pikachu
    // [new GymPokemon('Cinderace', 137833678, 60)]
);
// Galar Champion
//TODO: rewards/hp rebalance
GymList['Champion Leon'] = new Champion(
    'Leon',
    'Champion Leon',
    [
        new GymPokemon('Aegislash', 130579274, 62),
        new GymPokemon('Dragapult', 130579274, 62),
        new GymPokemon('Haxorus', 130579274, 63),
    ],
    BadgeEnums.Elite_GalarChampion,
    250000,
    'My time as Champion is over... But what a champion time it\'s been! Thank you for the greatest battle I\'ve ever had!',
    [new GymBadgeRequirement(BadgeEnums.Elite_Hop)],
    // Bulbasaur
    [
        new GymPokemon('Seismitoad', 133481036, 64),
        new GymPokemon('Cinderace', 137833678, 64),
        new GymPokemon('Charizard', 145088083, 65),
    ],
    // Charmander
    [
        new GymPokemon('Mr. Rime', 133481036, 64),
        new GymPokemon('Inteleon', 137833678, 64),
        new GymPokemon('Charizard', 145088083, 65),
    ],
    // Squirtle/Pikachu
    [
        new GymPokemon('Rhyperior', 133481036, 64),
        new GymPokemon('Rillaboom', 137833678, 64),
        new GymPokemon('Charizard', 145088083, 65),
    ]
);

// Armor + crown gyms
GymList['Gym Leader Klara'] = new Gym(
    'Klara',
    'Gym Leader Klara',
    [
        new GymPokemon('Galarian Slowking', 144036193, 68),
        new GymPokemon('Galarian Weezing', 144036193, 68),
        new GymPokemon('Drapion', 144036193, 68),
        new GymPokemon('Scolipede', 147068434, 69),
        new GymPokemon('Galarian Slowbro', 151617045, 70),
    ],
    BadgeEnums.Elite_ArmorPoison,
    150000,
    'Aww, come on! What a drag! But...I guess it was also kinda fun!',
    [
        new MultiRequirement([
            new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Tower of Darkness')),
            new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Tower of Water')),
        ]),
    ]
);
GymList['Gym Leader Avery'] = new Gym(
    'Avery',
    'Gym Leader Avery',
    [
        new GymPokemon('Galarian Slowbro', 144036193, 68),
        new GymPokemon('Swoobat', 144036193, 68),
        new GymPokemon('Galarian Rapidash', 144036193, 68),
        new GymPokemon('Alakazam', 147068434, 69),
        new GymPokemon('Galarian Slowking', 151617045, 70),
    ],
    BadgeEnums.Elite_ArmorPsychic,
    150000,
    'More! I require more! Show me your Stored Power!',
    [new GymBadgeRequirement(BadgeEnums.Elite_ArmorPoison)]
);
GymList['Dojo Master Mustard'] = new Gym(
    'Mustard',
    'Dojo Master Mustard',
    [
        new GymPokemon('Mienshao', 151617046, 73),
        new GymPokemon('Luxray', 151617046, 73),
        new GymPokemon('Lycanroc (Midday)', 154808984, 75),
        new GymPokemon('Kommo-o', 154808984, 75),
        new GymPokemon('Urshifu (Single Strike)', 159596891, 75),
        new GymPokemon('Urshifu (Rapid Strike)', 159596891, 75),
    ],
    BadgeEnums.Elite_ArmorChampion,
    250000,
    'That strength of yours doesn\'t bend easily!',
    [new GymBadgeRequirement(BadgeEnums.Elite_ArmorPsychic)]
);
GymList['Trainer Peony'] = new Gym(
    'Freezington',
    'Trainer Peony',
    [
        new GymPokemon('Perrserker', 197029616, 74),
        new GymPokemon('Bronzong', 192967150, 73),
        new GymPokemon('Scizor', 192967150, 73),
        new GymPokemon('Aggron', 197029616, 74),
        new GymPokemon('Copperajah', 203123316, 74),
    ],
    BadgeEnums.Elite_CrownChampion,
    250000,
    'Gone and got stronger again, have you? Ah well! Hats off to you-in more ways than one!',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Crown Shrine'))]
);
