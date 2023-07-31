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

  // Numbering
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  // "Alpha",
  "Beta",
  "Gamma",
  // "Delta",
  "Epsilon",
  "Zeta",
  "Eta",
  "Theta",
  "Iota",
  "Kappa",
  "Lambda",
  "Mu",
  "Nu",
  "Xi",
  "Omicron",
  "Pi",
  "Rho",
  "Sigma",
  "Tau",
  "Upsilon",
  "Phi",
  "Chi",
  "Psi",
  "Omega",

  // Direction
  "East",
  "North",
  "Northeast",
  "Northwest",
  "South",
  "Southeast",
  "Southwest",
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
  "Pyrite",
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

  // Flora
  "Aloe",
  "Agarwood",
  "Aspen",
  "Begonia",
  "Carnation",
  "Coriander",
  "Clover",
  "Daffodil",
  "Daisy",
  "Dandelion",
  "Eucalyptus",
  "Fern",
  "Hibiscus",
  "Hyacinth",
  "Maple",
  "Peach",
  "Pine",
  "Raisin",
  "Rose",
  "Rosemary",
  "Sage",
  "Spruce",
  "Sunflower",
  "Tree",
  "Tulip",

  // Fauna
  "Adder",
  "Akita",
  "Anaconda",
  "Animal",
  "Ant",
  "Antelope",
  "Ape",
  "Archaeopteryx",
  "Asp",
  "Bat",
  "Beagle",
  "Bear",
  "Beaver",
  "Bee",
  "Beluga",
  "Bird",
  "Bison",
  "Blowfish",
  "Boar",
  "Buffalo",
  "Bull",
  "Butterfly",
  "Camel",
  "Canary",
  "Capybara",
  "Caracal",
  "Cardinal",
  "Cassowary",
  "Cat",
  "Colony",
  "Colt",
  "Chickadee",
  "Chicken",
  "Cicada",
  "Civet",
  "Clam",
  "Cobra",
  "Cockatiel",
  "Cockatoo",
  "Condor",
  "Coral",
  "Cougar",
  "Cow",
  "Crane",
  "Crow",
  "Deer",
  "Dingo",
  "Dinosaur",
  "Dodo",
  "Dog",
  "Dolphin",
  "Donkey",
  "Dragon",
  "Eagle",
  "Egret",
  "Elephant",
  "Falcon",
  "Finch",
  "Firefly",
  "Fox",
  "Frog",
  "Gazelle",
  "Giraffe",
  "Goat",
  "Goose",
  "Gopher",
  "Gorilla",
  "Gosling",
  "Griffin",
  "Grizzly",
  "Hammerhead",
  "Harpy",
  "Hawk",
  "Hen",
  "Heron",
  "Hippo",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Hound",
  "Jackdaw",
  "Jellyfish",
  "Kangaroo",
  "Kestrel",
  "Kingfisher",
  "Kitten",
  "Koala",
  "Koi",
  "Kookaburra",
  "Krait",
  "Lark",
  "Lemur",
  "Leopard",
  "Lion",
  "Lobster",
  "Locust",
  "Magpie",
  "Mako",
  "Mamba",
  "Mammoth",
  "Manta",
  "Mare",
  "Mastodon",
  "Mockingbird",
  "Mongoose",
  "Monkey",
  "Moose",
  "Mosquito",
  "Moth",
  "Mouse",
  "Mule",
  "Mustang",
  "Nightingale",
  "Osprey",
  "Ostrich",
  "Owl",
  "Ox",
  "Oyster",
  "Panda",
  "Pangolin",
  "Panther",
  "Pelican",
  "Penguin",
  "Peregrine",
  "Phoenix",
  "Pig",
  "Platypus",
  "Porpoise",
  "Prawn",
  "Pterodactyl",
  "Puffin",
  "Puma",
  "Puppy",
  "Python",
  "Rabbit",
  "Ram",
  "Raptor",
  "Rat",
  "Raven",
  "Razorback",
  "Rhino",
  "Rhinoceros",
  "Robin",
  "Rooster",
  "Sabertooth",
  "Sabretooth",
  "Salamander",
  "Salmon",
  "Scarab",
  "Scorpion",
  "Seagull",
  "Shark",
  "Sheep",
  "Shoebill",
  "Shrike",
  "Shrimp",
  "Silverback",
  "Snake",
  "Sparrow",
  "Spider",
  "Squid",
  "Squirrel",
  "Stallion",
  "Starling",
  "Steed",
  "Stingray",
  "Sturgeon",
  "Swan",
  "Tardigrade",
  "Termite",
  "Terrier",
  "Tiger",
  "Triceratops",
  "Trilobite",
  "Turtle",
  "Tyrannosaurus",
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
  "Wombat",
  "Zebra",

  //== Noun Main List ==//
  "Abacus",
  "Abomination",
  "Absolution",
  "Adjudicator",
  "Adversity",
  "Advocate",
  "Aether",
  "Affirmation",
  "Aftermath",
  "Agenda",
  "Aggression",
  "Air",
  "Alert",
  "Ambassador",
  "Ambition",
  "Ambrosia",
  "Andromeda",
  "Angel",
  "Apex",
  "Apocalypse",
  "Apollo",
  "Aqua",
  "Aquarius",
  "Aquila",
  "Arbiter",
  "Arbitrator",
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
  "Artisan",
  "Ascendant",
  "Ascension",
  "Aspiration",
  "Assassin",
  "Asteroid",
  "Asunder",
  "Asylum",
  "Auger",
  "Augment",
  "Aurora",
  "Autumn",
  "Avalanche",
  "Avatar",
  "Avenger",
  "Aviator",
  "Azimuth",
  "Babe",
  "Baby",
  "Ballad",
  "Ballista",
  "Bane",
  "Banshee",
  "Barge",
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
  "Bolt",
  "Bonanza",
  "Boom",
  "Boon",
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
  "Carnival",
  "Carnivore",
  "Cartographer",
  "Cassiopeia",
  "Castellan",
  "Castle",
  "Catapult",
  "Centaur",
  "Centauri",
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
  "Chopper",
  "Chorus",
  "Cinder",
  "Citizen",
  "Clapper",
  "Clash",
  "Claw",
  "Claymore",
  "Cliff",
  "Climax",
  "Clipper",
  "Coast",
  "Cocoon",
  "Collector",
  "Colonial",
  "Colossus",
  "Columbia",
  "Column",
  "Comet",
  "Comfort",
  "Command",
  "Compass",
  "Compassion",
  "Complexity",
  "Concorde",
  "Confidant",
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
  "Cornucopia",
  "Corona",
  "Coronation",
  "Corsair",
  "Corvette",
  "Corvid",
  "Corvus",
  "Cotton",
  "Courage",
  "Courier",
  "Course",
  "Creativity",
  "Creed",
  "Creek",
  "Crescent",
  "Crest",
  "Crusade",
  "Crusader",
  "Crush",
  "Cry",
  "Crysanthemum",
  "Crystal",
  "Cultivation",
  "Cure",
  "Curse",
  "Cutlass",
  "Cutter",
  "Cyclone",
  "Cygnus",
  "Daedalus",
  "Daemon",
  "Dancer",
  "Danger",
  "Darkness",
  "Darling",
  "Dawn",
  "Day",
  "Daylight",
  "Death",
  "Decade",
  "Decay",
  "Deception",
  "Decimation",
  "Defence",
  "Defender",
  "Defense",
  "Defiance",
  "Deliverance",
  "Demon",
  "Den",
  "Denial",
  "Denizen",
  "Descendant",
  "Desert",
  "Devil",
  "Dignity",
  "Dimension",
  "Dirge",
  "Discovery",
  "Discretion",
  "Disruptor",
  "Distinction",
  "Divinity",
  "Dominion",
  "Donnager",
  "Doomsday",
  "Dragoon",
  "Drain",
  "Drake",
  "Dream",
  "Dreamer",
  "Drizzle",
  "Duelist",
  "Dust",
  "Dutchman",
  "Duty",
  "Eater",
  "Echelon",
  "Eclipse",
  "Electron",
  "Elegance",
  "Eliminator",
  "Elite",
  "Emergence",
  "Emissary",
  "Emperor",
  "Empire",
  "Empress",
  "Empyrean",
  "Encore",
  "Endeavour",
  "Endurance",
  "Enforcer",
  "Enterprise",
  "Epiphany",
  "Epitome",
  "Equilibrium",
  "Equine",
  "Equinox",
  "Escapade",
  "Esquire",
  "Estate",
  "Eternity",
  "Etiquette",
  "Event",
  "Excalibur",
  "Excelsior",
  "Excursion",
  "Executor",
  "Exemplar",
  "Existence",
  "Expanse",
  "Expedition",
  "Explorer",
  "Extermination",
  "Exterminator",
  "Fallen",
  "Fame",
  "Fang",
  "Fantasy",
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
  "Forever",
  "Forge",
  "Forsworn",
  "Fortitude",
  "Fortune",
  "Foundation",
  "Freedom",
  "Frenzy",
  "Friction",
  "Friend",
  "Frontier",
  "Fusion",
  "Gala",
  "Galactica",
  "Galaxy",
  "Gale",
  "Galleon",
  "Gambit",
  "Game",
  "Gargoyle",
  "Gaze",
  "Gem",
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
  "Governor",
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
  "Harpoon",
  "Harvest",
  "Haven",
  "Heart",
  "Heat",
  "Herbivore",
  "Heritage",
  "Hero",
  "Highlander",
  "Hill",
  "Hitman",
  "Hollow",
  "Hominid",
  "Honey",
  "Honor",
  "Honour",
  "Hope",
  "Hopper",
  "Horizon",
  "Horn",
  "Horror",
  "Host",
  "Howl",
  "Hunter",
  "Huntress",
  "Huntsman",
  "Hurricane",
  "Ice",
  "Iceberg",
  "Immortal",
  "Impact",
  "Impasse",
  "Imperative",
  "Imperator",
  "Impetus",
  "Importance",
  "Impulse",
  "Independence",
  "Inferno",
  "Infinity",
  "Infusion",
  "Inquisitor",
  "Insomniac",
  "Inspiration",
  "Intent",
  "Interdictor",
  "Interloper",
  "Intimidation",
  "Invictus",
  "Janissary",
  "Javelin",
  "Jaw",
  "Jazz",
  "Jenny",
  "Jewel",
  "Journey",
  "Jubilee",
  "Judgement",
  "Juggernaut",
  "Jumper",
  "Jungle",
  "Justicar",
  "Justice",
  "Katana",
  "Khopesh",
  "King",
  "Knave",
  "Knife",
  "Knight",
  "Kopis",
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
  "Liberator",
  "Liberty",
  "Libra",
  "Lightning",
  "Lilac",
  "Lily",
  "Line",
  "Locomotion",
  "Logic",
  "Lord",
  "Lotus",
  "Luxury",
  "Lyra",
  "Machine",
  "Maelstrom",
  "Mage",
  "Magellanic",
  "Magic",
  "Magistrate",
  "Magnet",
  "Magnum",
  "Maiden",
  "Majesty",
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
  "Meadow",
  "Medley",
  "Memory",
  "Menagerie",
  "Mercy",
  "Meridian",
  "Merit",
  "Meteor",
  "Midnight",
  "Might",
  "Millenium",
  "Miracle",
  "Mirage",
  "Mischief",
  "Misfortune",
  "Mist",
  "Mistress",
  "Model",
  "Monarch",
  "Monitor",
  "Monster",
  "Montage",
  "Monument",
  "Moon",
  "Moonlight",
  "Morning",
  "Mother",
  "Motive",
  "Motor",
  "Mount",
  "Mountain",
  "Muse",
  "Mystery",
  "Mystify",
  "Nature",
  "Nautilus",
  "Nebula",
  "Nest",
  "Neutron",
  "News",
  "Nexus",
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
  "Oddity",
  "Odyssey",
  "Offence",
  "Offense",
  "Official",
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
  "Outback",
  "Outcome",
  "Outlander",
  "Outsider",
  "Palace",
  "Paladin",
  "Paradox",
  "Paragon",
  "Parallel",
  "Paramount",
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
  "Perseverance",
  "Persistence",
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
  "Pontifex",
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
  "Priority",
  "Procession",
  "Progress",
  "Projection",
  "Prometheus",
  "Property",
  "Prophet",
  "Prospect",
  "Protector",
  "Proton",
  "Proxima",
  "Puddle",
  "Pulsar",
  "Punishment",
  "Purge",
  "Purpose",
  "Pursuit",
  "Quake",
  "Queen",
  "Quest",
  "Quotient",
  "Radiance",
  "Ragamuffin",
  "Ragnarok",
  "Raider",
  "Rain",
  "Rainbow",
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
  "Reckoning",
  "Reclaimer",
  "Reclamation",
  "Reconciliation",
  "Redline",
  "Reflection",
  "Regent",
  "Regret",
  "Regula",
  "Reign",
  "Reliance",
  "Reliant",
  "Remnant",
  "Renegade",
  "Renown",
  "Reprisal",
  "Repulse",
  "Reputation",
  "Resentment",
  "Resistance",
  "Resolution",
  "Resonance",
  "Resource",
  "Respect",
  "Responsibility",
  "Retaliation",
  "Retribution",
  "Retriever",
  "Revelation",
  "Revenant",
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
  "Routine",
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
  "Secret",
  "Secretariat",
  "Sector",
  "Seed",
  "Seer",
  "Sentinel",
  "Seraph",
  "Serenity",
  "Serpent",
  "Shade",
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
  "Sleuth",
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
  "Spire",
  "Spirit",
  "Sport",
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
  "Stream",
  "Strength",
  "Strife",
  "Strike",
  "Subspace",
  "Subterfuge",
  "Summer",
  "Sun",
  "Sunrise",
  "Sunset",
  "Sunshine",
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
  "Temporal",
  "Templar",
  "Terminator",
  "Terror",
  "Theory",
  "Thorn",
  "Thought",
  "Threat",
  "Throne",
  "Thunder",
  "Time",
  "Titan",
  "Tomahawk",
  "Tomorrow",
  "Ton",
  "Tonne",
  "Tornado",
  "Torrent",
  "Tower",
  "Trace",
  "Trade",
  "Traveler",
  "Traveller",
  "Treader",
  "Treasure",
  "Trebuchet",
  "Tremor",
  "Trepidation",
  "Triad",
  "Tribulation",
  "Tribunal",
  "Tribune",
  "Tribute",
  "Trident",
  "Triumvirate",
  "Troll",
  "Truth",
  "Tsunami",
  "Tundra",
  "Tune",
  "Twilight",
  "Twin",
  "Typhoon",
  "Tyrant",
  "Union",
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
  "Vector",
  "Veil",
  "Vein",
  "Velocity",
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
  "Virtuoso",
  "Visage",
  "Viscount",
  "Vitality",
  "Void",
  "Volcano",
  "Volition",
  "Volt",
  "Votive",
  "Voyage",
  "Voyager",
  "Vulcan",
  "Wake",
  "Walker",
  "Wall",
  "Wanderer",
  "War",
  "Warden",
  "Warlock",
  "Warrior",
  "Water",
  "Weaver",
  "Web",
  "Welfare",
  "Whisper",
  "Whisperer",
  "Widow",
  "Wind",
  "Winds",
  "Wing",
  "Wings",
  "Winter",
  "Wisp",
  "Witch",
  "Woe",
  "Wraith",
  "Wrath",
  "Yeti",
  "Yorktown",
  "Zealot",
  "Zenith",
  "Zodiac",
  "Zombie",
  "Zone",
  "Zoom"
];
