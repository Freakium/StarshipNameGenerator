var nouns = [
  // Months
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",

  // Direction
  "East",
  "North",
  "South",
  "West",

  // Element, Mineral, Resource
  "Amber",
  "Aluminum",
  "Argon",
  "Barium",
  "Brass",
  "Bronze",
  "Calcium",
  "Carbon",
  "Chlorine",
  "Cobalt",
  "Copper",
  "Diamond",
  "Earth",
  "Emerald",
  "Gold",
  "Granite",
  "Helium",
  "Iridium",
  "Iron",
  "Krypton",
  "Lead",
  "Magnesite",
  "Mercury",
  "Neon",
  "Palladium",
  "Phosphorus",
  "Platinum",
  "Plutonium",
  "Quartz",
  "Radium",
  "Radon",
  "Ruby",
  "Rust",
  "Silicon",
  "Silver",
  "Steel",
  "Strontium",
  "Sulfur",
  "Tantalum",
  "Tin",
  "Titanium",
  "Tungsten",
  "Xenon",

  // Animal
  "Adder",
  "Akita",
  "Anaconda",
  "Ant",
  "Antelope",
  "Archaeopteryx",
  "Asp",
  "Bat",
  "Beagle",
  "Bear",
  "Bee",
  "Beluga",
  "Bird",
  "Bison",
  "Boar",
  "Buffalo",
  "Bull",
  "Butterfly",
  "Camel",
  "Canary",
  "Caracal",
  "Cassowary",
  "Cat",
  "Chickadee",
  "Chicken",
  "Cicada",
  "Cobra",
  "Cockatiel",
  "Cockatoo",
  "Condor",
  "Coral",
  "Cougar",
  "Cow",
  "Crane",
  "Crow",
  "Dog",
  "Dolphin",
  "Donkey",
  "Dinosaur",
  "Dragon",
  "Eagle",
  "Elephant",
  "Finch",
  "Firefly",
  "Falcon",
  "Fox",
  "Frog",
  "Gazelle",
  "Goat",
  "Goose",
  "Gorilla",
  "Griffin",
  "Grizzly",
  "Hammerhead",
  "Hawk",
  "Heron",
  "Hippo",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Hound",
  "Jellyfish",
  "Kestrel",
  "Kingfisher",
  "Koala",
  "Krait",
  "Lark",
  "Lemur",
  "Leopard",
  "Lion",
  "Locust",
  "Magpie",
  "Mako",
  "Mamba",
  "Mammoth",
  "Manta",
  "Mastodon",
  "Mare",
  "Mockingbird",
  "Mongoose",
  "Monkey",
  "Moose",
  "Moth",
  "Mouse",
  "Mule",
  "Mustang",
  "Nightingale",
  "Osprey",
  "Ostrich",
  "Ox",
  "Owl",
  "Panda",
  "Panther",
  "Pelican",
  "Penguin",
  "Peregrine",
  "Phoenix",
  "Pig",
  "Platypus",
  "Porpoise",
  "Pterodactyl",
  "Puma",
  "Python",
  "Rabbit",
  "Raven",
  "Ram",
  "Raptor",
  "Rat",
  "Razorback",
  "Rhino",
  "Rhinoceros",
  "Robin",
  "Rooster",
  "Salamander",
  "Salmon",
  "Scarab",
  "Scorpion",
  "Seagull",
  "Shark",
  "Sheep",
  "Shrike",
  "Silverback",
  "Snake",
  "Sparrow",
  "Spider",
  "Squid",
  "Squirrel",
  "Stallion",
  "Steed",
  "Stingray",
  "Sturgeon",
  "Terrier",
  "Tiger",
  "Trilobite",
  "Turtle",
  "Unicorn",
  "Urchin",
  "Viper",
  "Vulture",
  "Warthog",
  "Wasp",
  "Weasel",
  "Wildcat",
  "Wolf",
  "Wolverine",
  "Zebra",

  // Radio
  "Alpha",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliet",
  "Kilo",
  "Lima",
  "Mike",
  // "November",
  "Oscar",
  "Papa",
  "Quebec",
  "Romeo",
  "Sierra",
  "Tango",
  "Uniform",
  "Victor",
  "Whiskey",
  "X-ray",
  "Yankee",
  "Zulu",

  // Rank
  "Admiral",
  "Captain",
  "Commander",
  "Commodore",
  "Corporal",
  "Ensign",
  "General",
  "Lieutenant",

  // Plants
  "Hyacinth",

  //== Noun Main List ==//
  "Abomination",
  "Absolution",
  "Adjudicator",
  "Adversity",
  "Aether",
  "Affirmation",
  "Agenda",
  "Aggression",
  "Air",
  "Alert",
  "Ambassador",
  "Ambition",
  "Andromeda",
  "Angel",
  "Apocalypse",
  "Apollo",
  "Aqua",
  "Aquarius",
  "Aquila",
  "Arbiter",
  "Arbor",
  "Arbour",
  "Arch",
  "Archer",
  "Archon",
  "Argonaut",
  "Aries",
  "Ark",
  "Armageddon",
  "Armistice",
  "Arrow",
  "Art",
  "Artery",
  "Ascendant",
  "Ascension",
  "Assassin",
  "Asunder",
  "Aurora",
  "Autumn",
  "Avalanche",
  "Avatar",
  "Avenger",
  "Azimuth",
  "Ballad",
  "Ballista",
  "Bane",
  "Banshee",
  "Baron",
  "Barrier",
  "Beacon",
  "Beast",
  "Bell",
  "Bender",
  "Birch",
  "Blade",
  "Blender",
  "Blizzard",
  "Blood",
  "Bloom",
  "Blossom",
  "Bonanza",
  "Boom",
  "Boomerang",
  "Booster",
  "Born",
  "Borne",
  "Boulder",
  "Boy",
  "Brand",
  "Breeze",
  "Brother",
  "Bucket",
  "Bullet",
  "Caldera",
  "Caliber",
  "Calibre",
  "Call",
  "Camomile",
  "Cancer",
  "Candor",
  "Canine",
  "Canterbury",
  "Canyon",
  "Capital",
  "Capricorn",
  "Capricornus",
  "Caravan",
  "Careless",
  "Cartographer",
  "Cassiopeia",
  "Castle",
  "Catapult",
  "Centaur",
  "Centaurus",
  "Century",
  "Cerberus",
  "Ceremony",
  "Challenger",
  "Chant",
  "Chaos",
  "Chariot",
  "Charity",
  "Chase",
  "Chevalier",
  "Chief",
  "Chieftain",
  "Child",
  "Chinook",
  "Chorus",
  "Cinder",
  "Clapper",
  "Clash",
  "Claw",
  "Claymore",
  "Cliff",
  "Clipper",
  "Clover",
  "Coast",
  "Cocoon",
  "Collector",
  "Colonial",
  "Colossus",
  "Columbia",
  "Column",
  "Comet",
  "Compass",
  "Compassion",
  "Complexity",
  "Concorde",
  "Conflict",
  "Conqueror",
  "Conquest",
  "Conquistador",
  "Constable",
  "Constellation",
  "Constitution",
  "Contemplation",
  "Continuum",
  "Conundrum",
  "Conviction",
  "Corona",
  "Coronation",
  "Corsair",
  "Corvette",
  "Corvid",
  "Corvus",
  "Cotton",
  "Courage",
  "Course",
  "Creativity",
  "Creed",
  "Creek",
  "Crescent",
  "Crest",
  "Crusade",
  "Crusader",
  "Cry",
  "Crysanthemum",
  "Crystal",
  "Cultivation",
  "Cure",
  "Curse",
  "Cutlass",
  "Cutter",
  "Cygnus",
  "Daedalus",
  "Dancer",
  "Dandelion",
  "Danger",
  "Darkness",
  "Darling",
  "Dawn",
  "Day",
  "Death",
  "Decade",
  "Decay",
  "Decimation",
  "Defence",
  "Defender",
  "Defense",
  "Defiance",
  "Deliverance",
  "Demon",
  "Den",
  "Denial",
  "Descendant",
  "Desert",
  "Devil",
  "Dimension",
  "Dirge",
  "Discovery",
  "Discretion",
  "Disruptor",
  "Distinction",
  "Dominion",
  "Donnager",
  "Dragoon",
  "Drain",
  "Drake",
  "Dreamer",
  "Drizzle",
  "Duelist",
  "Dust",
  "Duty",
  "Eater",
  "Eclipse",
  "Electron",
  "Elegance",
  "Eliminator",
  "Emergence",
  "Emissary",
  "Emperor",
  "Empire",
  "Empress",
  "Encore",
  "Endeavour",
  "Endurance",
  "Enforcer",
  "Enterprise",
  "Epitome",
  "Equilibrium",
  "Equine",
  "Equinox",
  "Escapade",
  "Esquire",
  "Estate",
  "Eternity",
  "Event",
  "Excalibur",
  "Excelsior",
  "Excursion",
  "Executor",
  "Expanse",
  "Expedition",
  "Explorer",
  "Extermination",
  "Exterminator",
  "Fallen",
  "Fame",
  "Fang",
  "Fate",
  "Father",
  "Feather",
  "Feline",
  "Ferocity",
  "Festival",
  "Fever",
  "Fire",
  "Fireworks",
  "Flame",
  "Flower",
  "Fog",
  "Forager",
  "Force",
  "Forest",
  "Forge",
  "Forsworn",
  "Fortitude",
  "Fortune",
  "Foundation",
  "Freedom",
  "Frenzy",
  "Friction",
  "Friend",
  "Fusion",
  "Galactica",
  "Galaxy",
  "Galleon",
  "Gambit",
  "Game",
  "Gargantuan",
  "Gargoyle",
  "Gaze",
  "Gemini",
  "General",
  "Generation",
  "Genesis",
  "Ghost",
  "Giant",
  "Girl",
  "Gladiator",
  "Glimpse",
  "Goblin",
  "God",
  "Goliath",
  "Gratitude",
  "Gremlin",
  "Guard",
  "Guardian",
  "Gulf",
  "Gun",
  "Hail",
  "Halberd",
  "Halo",
  "Hammer",
  "Hand",
  "Harbor",
  "Harbour",
  "Harvest",
  "Haven",
  "Heart",
  "Heat",
  "Heritage",
  "Hitman",
  "Hollow",
  "Hominid",
  "Honor",
  "Honour",
  "Hope",
  "Hopper",
  "Horizon",
  "Horn",
  "Horror",
  "Host",
  "Hunter",
  "Huntress",
  "Huntsman",
  "Hurricane",
  "Ice",
  "Iceberg",
  "Impasse",
  "Imperative",
  "Imperator",
  "Importance",
  "Inferno",
  "Infinity",
  "Inquisitor",
  "Insomniac",
  "Intent",
  "Interdictor",
  "Interloper",
  "Intimidation",
  "Invictus",
  "Janissary",
  "Javelin",
  "Jenny",
  "Jubilee",
  "Judgement",
  "Jumper",
  "Jungle",
  "Justicar",
  "Justice",
  "Katana",
  "King",
  "Knave",
  "Knife",
  "Knight",
  "Kraken",
  "Lacerta",
  "Lady",
  "Lament",
  "Lancaster",
  "Lance",
  "Laser",
  "Leaf",
  "Legend",
  "Legion",
  "Leo",
  "Leviathan",
  "Lexicon",
  "Liberty",
  "Libra",
  "Lightning",
  "Lilac",
  "Lily",
  "Line",
  "Logic",
  "Lord",
  "Luxury",
  "Lyra",
  "Machine",
  "Maelstrom",
  "Mage",
  "Magellanic",
  "Magic",
  "Magnet",
  "Magnum",
  "Maiden",
  "Maker",
  "Mandate",
  "Mandible",
  "Mandrake",
  "Mane",
  "Mantle",
  "Mantra",
  "Marathon",
  "Marauder",
  "Marble",
  "Marshal",
  "Mary",
  "Mason",
  "Masonry",
  "Master",
  "Matador",
  "Maxim",
  "Memory",
  "Mercy",
  "Meridian",
  "Merit",
  "Meteor",
  "Midnight",
  "Might",
  "Millenium",
  "Mischief",
  "Misfortune",
  "Mist",
  "Mistress",
  "Model",
  "Monarch",
  "Monitor",
  "Monument",
  "Moon",
  "Morning",
  "Mother",
  "Motive",
  "Motor",
  "Mount",
  "Mountain",
  "Mystery",
  "Mystify",
  "Nature",
  "Nautilus",
  "Nebula",
  "Nest",
  "Neutron",
  "News",
  "Night",
  "Nightmare",
  "Ninja",
  "Nomad",
  "Nova",
  "Nuclear",
  "Nucleus",
  "Oath",
  "Oblivion",
  "Observer",
  "Offence",
  "Offense",
  "Olympian",
  "Olympic",
  "Onslaught",
  "Opportunity",
  "Optimism",
  "Optimist",
  "Opus",
  "Oracle",
  "Orchid",
  "Order",
  "Origami",
  "Orion",
  "Orrery",
  "Outcome",
  "Outlander",
  "Outsider",
  "Palace",
  "Paladin",
  "Paradox",
  "Paragon",
  "Parasol",
  "Passage",
  "Passion",
  "Pasture",
  "Path",
  "Pathfinder",
  "Patience",
  "Peanut",
  "Pearl",
  "Pegasus",
  "Peninsula",
  "Penny",
  "Perdition",
  "Perish",
  "Perplexity",
  "Persecution",
  "Pessimism",
  "Pessimist",
  "Pest",
  "Phalanx",
  "Phantom",
  "Pharoah",
  "Pillar",
  "Pinwheel",
  "Pioneer",
  "Pisces",
  "Plague",
  "Point",
  "Pointe",
  "Pool",
  "Possibility",
  "Praetor",
  "Prairie",
  "Predator",
  "Premonition",
  "Preservation",
  "Preserver",
  "Prince",
  "Princess",
  "Procession",
  "Progress",
  "Projection",
  "Prometheus",
  "Property",
  "Prophet",
  "Prospect",
  "Protector",
  "Proton",
  "Puddle",
  "Pulsar",
  "Purge",
  "Purpose",
  "Quake",
  "Queen",
  "Quest",
  "Quotient",
  "Radiance",
  "Ragamuffin",
  "Ragnarok",
  "Raider",
  "Rain",
  "Ranger",
  "Ransom",
  "Rascal",
  "Ray",
  "Razor",
  "Reaper",
  "Reason",
  "Reaver",
  "Rebel",
  "Rebellion",
  "Reclaimer",
  "Reclamation",
  "Reflection",
  "Regent",
  "Regula",
  "Reign",
  "Reliance",
  "Reliant",
  "Reminisce",
  "Remnant",
  "Renegade",
  "Reprisal",
  "Repulse",
  "Reputation",
  "Resentment",
  "Resistance",
  "Resolution",
  "Resonance",
  "Resource",
  "Responsibility",
  "Retaliation",
  "Revelation",
  "Revenge",
  "Revolution",
  "Ribbon",
  "Rite",
  "River",
  "Roar",
  "Rocinante",
  "Rock",
  "Rodent",
  "Rogue",
  "Root",
  "Rose",
  "Ruin",
  "Ruler",
  "Rumble",
  "Runner",
  "Saber",
  "Saboteur",
  "Sabre",
  "Sacrifice",
  "Sacrosanct",
  "Saddle",
  "Sagittarius",
  "Saint",
  "Sally",
  "Samarai",
  "Samaritan",
  "Sanctuary",
  "Sand",
  "Scepter",
  "Sceptre",
  "Scimitar",
  "Scorpius",
  "Scoundrel",
  "Scourge",
  "Scout",
  "Scurvy",
  "Scythe",
  "Sea",
  "Secretariat",
  "Sector",
  "Seed",
  "Seer",
  "Sentinel",
  "Seraph",
  "Serenity",
  "Serpent",
  "Shadow",
  "Shadowfax",
  "Shell",
  "Shelter",
  "Shore",
  "Shroud",
  "Sidewinder",
  "Sight",
  "Signet",
  "Silk",
  "Simian",
  "Simplicity",
  "Sister",
  "Skies",
  "Skull",
  "Sky",
  "Smile",
  "Smoke",
  "Snare",
  "Snow",
  "Sojourn",
  "Sojourner",
  "Solace",
  "Solstice",
  "Sombra",
  "Somnambulist",
  "Son",
  "Sonata",
  "Song",
  "Sorrow",
  "Soul",
  "Sovereign",
  "Space",
  "Spaceship",
  "Spark",
  "Sparkle",
  "Spartan",
  "Spear",
  "Specter",
  "Spectre",
  "Sphinx",
  "Spirit",
  "Spring",
  "Spruce",
  "Squall",
  "Stalemate",
  "Star",
  "Starship",
  "Steadfast",
  "Stealth",
  "Steam",
  "Stench",
  "Step",
  "Sting",
  "Stinger",
  "Stint",
  "Stone",
  "Storm",
  "Strategem",
  "Strategy",
  "Strength",
  "Subspace",
  "Subterfuge",
  "Summer",
  "Sun",
  "Sunflower",
  "Sunrise",
  "Sunset",
  "Surge",
  "Surprise",
  "Surveyor",
  "Swarm",
  "Sword",
  "Symbol",
  "Symphony",
  "Syndicate",
  "Synthesis",
  "Tail",
  "Talon",
  "Tangent",
  "Taurus",
  "Tempest",
  "Templar",
  "Terminator",
  "Terror",
  "Theory",
  "Thought",
  "Threat",
  "Throne",
  "Thunder",
  "Titan",
  "Tomahawk",
  "Tomorrow",
  "Tornado",
  "Torrent",
  "Tower",
  "Trace",
  "Trade",
  "Traveler",
  "Traveller",
  "Treader",
  "Trebuchet",
  "Trepidation",
  "Tribulation",
  "Tribunal",
  "Tribune",
  "Tribute",
  "Trident",
  "Troll",
  "Truth",
  "Tsunami",
  "Tundra",
  "Tune",
  "Typhoon",
  "Unity",
  "Universe",
  "Urgency",
  "Valkyrie",
  "Valley",
  "Valor",
  "Valour",
  "Value",
  "Vampire",
  "Vanguard",
  "Vanish",
  "Vanity",
  "Vanquish",
  "Vantage",
  "Veil",
  "Vein",
  "Velvet",
  "Vendetta",
  "Vengeance",
  "Venom",
  "Venture",
  "Veracity",
  "Verdict",
  "Vermin",
  "Vestige",
  "Veteran",
  "Vexation",
  "Vice",
  "Viceroy",
  "Vicissitude",
  "Victory",
  "Vigil",
  "Vigilance",
  "Vindicator",
  "Virgo",
  "Virtue",
  "Virtuous",
  "Visage",
  "Viscount",
  "Vitality",
  "Volcano",
  "Volition",
  "Votive",
  "Voyage",
  "Voyager",
  "Vulcan",
  "Walker",
  "Wall",
  "Wanderer",
  "War",
  "Warden",
  "Warrior",
  "Water",
  "Weaver",
  "Welfare",
  "Whisper",
  "Whisperer",
  "Widow",
  "Wind",
  "Wing",
  "Winter",
  "Wisp",
  "Woe",
  "Wraith",
  "Wrath",
  "Yorktown",
  "Zealot",
  "Zenith",
  "Zodiac",
  "Zombie",
  "Zone",
  "Zoom"
];
