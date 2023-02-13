var cookies = 0;
var cps = 0;
var cpc = 1;
var showHelp = true;

/*
Copy for new item:
,
  {
    name: "",
    initialCost: #,
    rate: #,
    description: ""
  }
*/

var autoclickItems = [
  {
    name: "ECU Tune",
    initialCost: 50,
    rate: 1,
    description: "Computers are super useful!"
  },
  {
    name: "Exhaust Upgrades",
    initialCost: 250,
    rate: 2,
    description: "Rev it up!"
  },
  {
    name: "T1 Turbocharger",
    initialCost: 500,
    rate: 3,
    description: "Stututututu"
  },
  {
    name: "T1 Supercharger",
    initialCost: 705,
    rate: 4,
    description: "Make any car sound like a Hellcat"
  },
  {
    name: "T2 Turbo",
    initialCost: 9000,
    rate: 8,
    description: "Make your stutututu better"
  },
  {
      name: "T2 Supercharger",
      initialCost: 9100,
      rate: 12,
      description: "LET IT WHINE!!!"
    },
  {
    name: "T2 Engine",
    initialCost: 11000,
    rate: 13,
    description: "Fast!"
  },
  {
      name: "T3 Turbo",
      initialCost: 24000,
      rate: 18,
      description: "STUTUTU BUT 3x better!"
   },
    {
      name: "T3 Supercharger",
      initialCost: 24100,
      rate: 20,
      description: "Challenger Hellcat vibes!"
    },
    {
      name: "T3 Engine",
      initialCost: 25000,
      rate: 23,
      description: "Tier 3, getting better!"
    },
     {
          name: "T4 Turbo",
          initialCost: 30000,
          rate: 29,
          description: "stututututu from another world"
     },
     {
       name: "T4 Supercharger",
        initialCost: 30100,
         rate: 32,
        description: "Hellcat but super whining noise"
     },
       {
         name: "T4 Engine",
         initialCost: 31000,
         rate: 35,
         description: "Tier 4, closer to the best"
          },
      {
        name: "T5 Turbo",
        initialCost: 44000,
        rate: 45,
         description: "Tier 5 stututu actions, very good!"
       },
       {
       name: "T5 Supercharger",
        initialCost: 44100,
        rate: 47,
        description: "Tier 5 whines!"
         },
         {
           name: "T5 Engine",
           initialCost: 46100,
           rate: 49,
           description: "Tier 5 Engine."
           },
        {
        name: "T6 Turbo",
        initialCost: 74000,
        rate: 50,
         description: "Tier 6 stututu actions, very good but better!"
       },
       {
       name: "T6 Supercharger",
        initialCost: 74100,
        rate: 52,
        description: "Tier 6 whines!"
         },
         {
           name: "T6 Engine",
           initialCost: 77000,
           rate: 55,
           description: "Tier 6 Engine."
           },
];

var multiclickItems = [
  {
    name: "Engine Internals Upgrade",
    initialCost: 200,
    rate: 1,
    description: "Stronger parts, stronger car!"
  },
  {
    name: "Stronger Block",
    initialCost: 210,
    rate: 2,
    description: "The stronger the engine the stronger the acceleration!"
  },
  {
    name: "Higher Revs",
    initialCost: 480,
    rate: 3,
    description: "IT'S OVER 9000!"
  },
  {
    name: "Weight Reduction",
    initialCost: 780,
    rate: 5,
    description: "Reduce Weight to make the car easier to accelerate"
  },
  {
    name: "Body Kit",
    initialCost: 1400,
    rate: 8,
    description: "START YOUR ENGINES!"
  },
  {
    name: "E85 Fuel",
    initialCost: 3000,
    rate: 11,
    description: "BURN THE FUEL!"
  },
   {
      name: "Complete Body Revamp",
      initialCost: 30000,
      rate: 29,
      description: "Complete reset of the car body."
    },
   {
      name: "Small Thrusters",
      initialCost: 90000,
      rate: 45,
      description: "Complete reset of the car body."
    },
];
