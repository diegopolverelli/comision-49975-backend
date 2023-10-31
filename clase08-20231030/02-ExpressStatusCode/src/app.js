import express from 'express';
const PORT=3000;

const app=express();

let villanos = [
    {
        id: 1,
        name: "Joker",
        alias: "Unknown",
        powers: ["Criminal mastermind", "Insanity", "Trickery"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 2,
        name: "Magneto",
        alias: "Erik Lehnsherr",
        powers: ["Magnetism manipulation", "Control over metal", "Leadership"],
        team: "Brotherhood of Mutants",
        publisher: "Marvel"
    },
    {
        id: 3,
        name: "Lex Luthor",
        alias: "Alexander Luthor",
        powers: ["Genius-level intellect", "Wealth", "Power suit"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 4,
        name: "Loki",
        alias: "Loki Laufeyson",
        powers: ["Shape-shifting", "Illusions", "Sorcery"],
        team: "Asgardian rogues",
        publisher: "Marvel"
    },
    {
        id: 5,
        name: "Two-Face",
        alias: "Harvey Dent",
        powers: ["Duality obsession", "Coin flipping", "Expert marksman"],
        team: "None",
        publisher: "DC"
    },
    {
        id: 6,
        name: "Green Goblin",
        alias: "Norman Osborn",
        powers: ["Superhuman strength", "Glider flight", "Goblin gadgets"],
        team: "Sinister Six",
        publisher: "Marvel"
    },
    {
        id: 7,
        name: "Darkseid",
        alias: "Uxas",
        powers: ["Omega Beams", "Superhuman strength", "Immortality"],
        team: "New Gods",
        publisher: "DC"
    },
    {
        id: 8,
        name: "Thanos",
        alias: "Thanos",
        powers: ["Superhuman strength", "Reality manipulation", "Infinity Gauntlet"],
        team: "Black Order",
        publisher: "Marvel"
    },
    {
        id: 9,
        name: "Catwoman",
        alias: "Selina Kyle",
        powers: ["Acrobatics", "Thievery skills", "Whip mastery"],
        team: "None",
        publisher: "DC"
    },
    {
        id: 10,
        name: "Doctor Doom",
        alias: "Victor von Doom",
        powers: ["Genius-level intellect", "Armor suit", "Sorcery"],
        team: "None",
        publisher: "Marvel"
    },
    {
        id: 11,
        name: "Harley Quinn",
        alias: "Harleen Quinzel",
        powers: ["Acrobatics", "Deadly weapons", "Unpredictability"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 12,
        name: "Sabretooth",
        alias: "Victor Creed",
        powers: ["Superhuman strength", "Enhanced senses", "Regenerative healing"],
        team: "Brotherhood of Mutants",
        publisher: "Marvel"
    },
    {
        id: 13,
        name: "Ra's al Ghul",
        alias: "Unknown",
        powers: ["Longevity", "Martial arts mastery", "Strategic genius"],
        team: "League of Assassins",
        publisher: "DC"
    },
    {
        id: 14,
        name: "Venom",
        alias: "Eddie Brock",
        powers: ["Symbiote bonding", "Superhuman strength", "Shape-shifting"],
        team: "None",
        publisher: "Marvel"
    },
    {
        id: 15,
        name: "Deathstroke",
        alias: "Slade Wilson",
        powers: ["Enhanced strength", "Master tactician", "Regenerative healing"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 16,
        name: "Mystique",
        alias: "Raven Darkholme",
        powers: ["Shape-shifting", "Agility", "Combat expertise"],
        team: "Brotherhood of Mutants",
        publisher: "Marvel"
    },
    {
        id: 17,
        name: "Penguin",
        alias: "Oswald Cobblepot",
        powers: ["Cunning mind", "Wealth", "Umbrella gadgets"],
        team: "None",
        publisher: "DC"
    },
    {
        id: 18,
        name: "Red Skull",
        alias: "Johann Schmidt",
        powers: ["Strategic genius", "Superhuman durability", "Hatred for Captain America"],
        team: "Hydra",
        publisher: "Marvel"
    },
    {
        id: 19,
        name: "Enchantress",
        alias: "June Moone",
        powers: ["Magic spells", "Sorcery", "Reality manipulation"],
        team: "Suicide Squad",
        publisher: "DC"
    },
    {
        id: 20,
        name: "Kingpin",
        alias: "Wilson Fisk",
        powers: ["Superhuman strength", "Master tactician", "Criminal empire"],
        team: "None",
        publisher: "Marvel"
    }
];

console.log('Hola, Juan. ¿Cómo están?');
console.log('Messi ganó de nuevo el balón...!!!. ¿OK?');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{


    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK...!!!');
})

app.get('/villanos/:id',(req,res)=>{
    let {id}=req.params
    id=parseInt(id)

    if(isNaN(id)) return res.status(400).json({error:"Indique un id numérico"})

    let villano=villanos.find(villano=>villano.id===id)
    if(!villano) return res.status(404).json({error:`No se encontró en BD el villano con id ${id}`})

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        data:villano
    });
});

app.get('/suma/:v1/:v2',(req,res)=>{
    
    let {v1, v2}=req.params
    v1=Number(v1)
    v2=Number(v2)

    if(isNaN(v1) || isNaN(v2)) return res.status(400).json({error:"Ingrese valores numéricos"})

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        resultado:v1+v2
    });
});

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
