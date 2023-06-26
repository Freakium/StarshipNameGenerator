var adjectives = [
  // colours
  "Aqua",
  "Azure",
  "Black",
  "Blue",
  "Crimson",
  "Cyan",
  "Gray",
  "Green",
  "Grey",
  "Indigo",
  "Jasmine",
  "Lavender",
  "Magenta",
  "Maroon",
  "Onyx",
  "Orange",
  "Purple",
  "Red",
  "Rouge",
  "Scarlet",
  "Teal",
  "Turquoise",
  "Vermillion",
  "Violet",
  "White",
  "Yellow",

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
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
  "Seventh",
  "Eighth",
  "Ninth",
  "Tenth",
  "Eleventh",
  "Twelfth",
  "Thirteenth",
  "Fourteenth",
  "Fifteenth",
  "Sixteenth",
  "Seventeenth",
  "Eighteenth",
  "Nineteenth",
  "Twentieth",

  // Direction
  "Eastern",
  "Northern",
  "Southern",
  "Western",

  //== Adjective Main List ==//
  "Abnormal",
  "Abominable",
  "Absolute",
  "Adorned",
  "Ancient",
  "Angry",
  "Antique",
  "Arid",
  "Ashen",
  "Audacious",
  "Auspicious",
  "Banished",
  "Battlestar",
  "Bawling",
  "Beastly",
  "Bitterness",
  "Blazing",
  "Bloody",
  "Brave",
  "Brazen",
  "Breaking",
  "Brewing",
  "Bright",
  "Burning",
  "Candid",
  "Caustic",
  "Cautious",
  "Celestial",
  "Centennial",
  "Chaotic",
  "Civic",
  "Clandestine",
  "Classy",
  "Clear",
  "Clever",
  "Coarse",
  "Cold",
  "Colossal",
  "Common",
  "Constant",
  "Cosmic",
  "Covert",
  "Crazy",
  "Creative",
  "Critical",
  "Crucial",
  "Cruel",
  "Crying",
  "Cyber",
  "Damned",
  "Dandy",
  "Daring",
  "Dark",
  "Darkest",
  "Dastardly",
  "Decisive",
  "Deep",
  "Defiant",
  "Determined",
  "Dignified",
  "Direct",
  "Dirty",
  "Disruptive",
  "Drifting",
  "Drowsy",
  "Earnest",
  "Elder",
  "Electric",
  "Elegant",
  "Epic",
  "Errant",
  "Eternal",
  "Ethereal",
  "Ever",
  "Everlasting",
  "Exciting",
  "Exemplar",
  "Exemplary",
  "Fair",
  "Fair",
  "Falling",
  "Far",
  "Fast",
  "Fastidious",
  "Ferocious",
  "Flailing",
  "Fleeting",
  "Flying",
  "Forbidden",
  "Forever",
  "Fortunate",
  "Forward",
  "Frantic",
  "Futile",
  "Future",
  "Galant",
  "Galavanting",
  "Garish",
  "Generic",
  "Gentle",
  "Ghastly",
  "Gleaming",
  "Glowing",
  "Golden",
  "Good",
  "Grand",
  "Great",
  "Grievous",
  "Growling",
  "Guilty",
  "Hairy",
  "Hallowed",
  "Handy",
  "Happy",
  "Heavenly",
  "High",
  "Holistic",
  "Holy",
  "Honest",
  "Honorable",
  "Honourable",
  "Hostile",
  "Hot",
  "Improper",
  "Incessant",
  "Incredible",
  "Indomitable",
  "Infinite",
  "Interstellar",
  "Intransigent",
  "Intrepid",
  "Jubilant",
  "Lambent",
  "Last",
  "Laughing",
  "Legendary",
  "Lethal",
  "Logical",
  "Lone",
  "Long",
  "Loud",
  "Low",
  "Lucid",
  "Lunar",
  "Lustrous",
  "Luxurious",
  "Magnetic",
  "Majestic",
  "Major",
  "Marine",
  "Merry",
  "Metallic",
  "Millenial",
  "Minor",
  "Mocha",
  "Mysterious",
  "Mystifying",
  "Noble",
  "Old",
  "Omnipotent",
  "Onward",
  "Optimistic",
  "Ostentatious",
  "Over",
  "Pale",
  "Passionate",
  "Past",
  "Patient",
  "Peaceful",
  "Pedantic",
  "Peerless",
  "Penitent",
  "Pensive",
  "Perilous",
  "Periodic",
  "Persevering",
  "Persistent",
  "Pessimistic",
  "Plain",
  "Pleasant",
  "Plutonian",
  "Polar",
  "Polarizing",
  "Potent",
  "Potential",
  "Pouncing",
  "Precise",
  "Premium",
  "Present",
  "Prime",
  "Prodigal",
  "Progressive",
  "Prominent",
  "Proper",
  "Pure",
  "Quantum",
  "Radiant",
  "Radical",
  "Raging",
  "Rare",
  "Raving",
  "Regal",
  "Regional",
  "Regular",
  "Relentless",
  "Reliance",
  "Reliant",
  "Resolute",
  "Reticent",
  "Risky",
  "Roaring",
  "Rough",
  "Round",
  "Royal",
  "Rudimentary",
  "Sacred",
  "Sage",
  "Sandy",
  "Sapient",
  "Scandalous",
  "Screaming",
  "Screeching",
  "Searing",
  "Seething",
  "Serene",
  "Severe",
  "Shining",
  "Short",
  "Shy",
  "Siege",
  "Silent",
  "Silly",
  "Singing",
  "Sleeping",
  "Sleepy",
  "Slippery",
  "Slow",
  "Smiling",
  "Smirking",
  "Smooth",
  "Soaring",
  "Social",
  "Solar",
  "Solemn",
  "Somber",
  "Sonic",
  "Sordid",
  "Sparkling",
  "Speckled",
  "Stammering",
  "Steady",
  "Stellar",
  "Sterling",
  "Still",
  "Strange",
  "Subtle",
  "Super",
  "Superior",
  "Surging",
  "Swift",
  "Swooping",
  "Symbolic",
  "Tall",
  "Tame",
  "Tantalizing",
  "Thieving",
  "Thundering",
  "Torrential",
  "Total",
  "Towering",
  "Toxic",
  "Tranquil",
  "Traveling",
  "Travelling",
  "Troubled",
  "Twin",
  "Ultra",
  "Uncommon",
  "Unfortunate",
  "Urban",
  "Vacant",
  "Vain",
  "Valiant",
  "Valorous",
  "Valourous",
  "Vaudevillian",
  "Venomous",
  "Vibrant",
  "Vicarious",
  "Vicious",
  "Vigilant",
  "Violent",
  "Virtuous",
  "Vitriolic",
  "Vitruvian",
  "Volatile",
  "Voracious",
  "Wailing",
  "Wandering",
  "Waning",
  "Warm",
  "Waxing",
  "Wayward",
  "Weeping",
  "Whistling",
  "Wholesome",
  "Withering",
  "Ye Olde",
  "Young"
];