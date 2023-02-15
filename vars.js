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
/*
i have no idea
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
    rate: 4,
    description: "Stututututu"
  },
  {
    name: "T1 Supercharger",
    initialCost: 705,
    rate: 8,
    description: "Make any car sound like a Hellcat"
  },
  {
    name: "T2 Turbo",
    initialCost: 9000,
    rate: 12,
    description: "Make your stutututu better"
  },
  {
      name: "T2 Supercharger",
      initialCost: 10000,
      rate: 20,
      description: "LET IT WHINE!!!"
    },
  {
    name: "T2 Engine",
    initialCost: 11000,
    rate: 28,
    description: "Fast!"
  },
  {
      name: "T3 Turbo",
      initialCost: 24000,
      rate: 36,
      description: "STUTUTU BUT 3x better!"
   },
    {
      name: "T3 Supercharger",
      initialCost: 24100,
      rate: 41,
      description: "Challenger Hellcat vibes!"
    },
    {
      name: "T3 Engine",
      initialCost: 25000,
      rate: 48,
      description: "Tier 3, getting better!"
    },
     {
          name: "T4 Turbo",
          initialCost: 30000,
          rate: 55,
          description: "stututututu from another world"
     },
     {
       name: "T4 Supercharger",
        initialCost: 30100,
         rate: 62,
        description: "Hellcat but super whining noise"
     },
       {
         name: "T4 Engine",
         initialCost: 31000,
         rate: 68,
         description: "Tier 4, closer to the best"
          },
      {
        name: "T5 Turbo",
        initialCost: 44000,
        rate: 85,
         description: "Tier 5 stututu actions, very good!"
       },
       {
       name: "T5 Supercharger",
        initialCost: 44100,
        rate: 97,
        description: "Tier 5 whines!"
         },
         {
           name: "T5 Engine",
           initialCost: 46100,
           rate: 109,
           description: "Tier 5 Engine."
           },
        {
        name: "T6 Turbo",
        initialCost: 74000,
        rate: 120,
         description: "Tier 6 stututu actions, very good but better!"
       },
       {
       name: "T6 Supercharger",
        initialCost: 74100,
        rate: 135,
        description: "Tier 6 whines!"
         },
         {
           name: "T6 Engine",
           initialCost: 77000,
           rate: 152,
           description: "Tier 6 Engine."
           },
   {
        name: "T7 Turbo",
        initialCost: 102000,
        rate: 167,
         description: "Tier 7 stututu.."
       },
       {
       name: "T7 Supercharger",
        initialCost: 102100,
        rate: 178,
        description: "Tier 7 Supercharger"
         },
         {
           name: "T7 Engine",
           initialCost: 103000,
           rate: 190,
           description: "Tier 7 Engine."
           },
   {
        name: "T8 Turbo",
        initialCost: 202000,
        rate: 210,
         description: "Tier 8 stututu.."
       },
       {
       name: "T8 Supercharger",
        initialCost: 202100,
        rate: 222,
        description: "Tier 8 Supercharger"
         },
         {
           name: "T8 Engine",
           initialCost: 203000,
           rate: 227,
           description: "Tier 8 Engine."
           },
    {
        name: "T9 Turbo",
        initialCost: 442000,
        rate: 240,
         description: "Tier 9 Turbocharger"
       },
       {
       name: "T9 Supercharger",
        initialCost: 442100,
        rate: 255,
        description: "Tier 9 Supercharger"
         },
         {
           name: "T9 Engine",
           initialCost: 443000,
           rate: 267,
           description: "Tier 9 Engine."
           },
    {
        name: "T10 Turbo",
        initialCost: 882000,
        rate: 282,
         description: "Tier 10 Turbocharger"
       },
       {
       name: "T10 Supercharger",
        initialCost: 882100,
        rate: 312,
        description: "Tier 10 Supercharger"
         },
         {
           name: "T10 Engine",
           initialCost: 883000,
           rate: 332,
           description: "Tier 10 Engine."
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
    name: "200 RON Fuel",
    initialCost: 15000,
    rate: 20,
    description: "BURN THE FUEL!"
  },
   {
      name: "Complete Body Revamp",
      initialCost: 30000,
      rate: 29,
      description: "Complete revamp of the car body."
    },
     {
      name: "Body Improvements",
      initialCost: 37500,
      rate: 40,
      description: "body improvements."
    },
   {
      name: "Powerful Engine Swap",
      initialCost: 45000,
      rate: 55,
      description: "Kind of like the 900hp hertz car"
    },
   {
      name: "Small Thrusters",
      initialCost: 90000,
      rate: 75,
      description: "small thrusters, they do the job."
    },
  {
      name: "More Powerful Engine Swap",
      initialCost: 110000,
      rate: 90,
      description: "Basically the bugatti chiron"
    },
{
      name: "Medium Size Thrusters",
      initialCost: 150000,
      rate: 105,
      description: "Medium size, bigger than small thrusters."
    },
  {
      name: "Large Thrusters",
      initialCost: 300000,
      rate: 125,
      description: "One of the bigger thrusters"
    },
    {
      name: "XL Thrusters",
      initialCost: 900000,
      rate: 385,
      description: "Extra Large Thrusters"
    },
  
];
