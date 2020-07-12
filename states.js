//Create objects with each states population data.

//Constructor function.
function State({
    id = "",
    name = "",
    c1980 = "",
    c1990 = "",
    c2000 = "",
    c2010 = ""
}) {
    this.id = id;
    this.name = name;
    this.c1980 = c1980;
    this.c1990 = c1990;
    this.c2000 = c2000;
    this.c2010 = c2010;
}

//Function Invocations.
const alabama = new State({
    id: "alabama",
    name: "Alabama",
    c1980: 3891000,
    c1990: 4040587,
    c2000: 4447100,
    c2010: 4779736
});

const alaska = new State({
    id: "alaska",
    name: "A",
    c1980: 400000,
    c1990: 550043,
    c2000: 626932,
    c2010: 710231
});

const arizona = new State({
    id: "arizona",
    name: "Arizona",
    c1980: 2718000,
    c1990: 3665228,
    c2000: 5130632,
    c2010: 6392017
});

const arkansas = new State({
    id: "arkansas",
    name: "Arkansas",
    c1980: 2285000,
    c1990: 2350725,
    c2000: 2673400,
    c2010: 2915918
});

const california = new State({
    id: "california",
    name: "California",
    c1980: 23662809,
    c1990: 29760021,
    c2000: 33871648,
    c2010: 37253956
});

const colorado = new State({
    id: "colorado",
    name: "Colorado",
    c1980: 2890000,
    c1990: 3294394,
    c2000: 4301261,
    c2010: 5029196
});

const connecticut = new State({
    id: "connecticut",
    name: "Connecticut",
    c1980: 3107000,
    c1990: 3287116,
    c2000: 3405565,
    c2010: 3574097
});

const delaware = new State({
    id: "delaware",
    name: "Delaware",
    c1980: 596000,
    c1990: 666168,
    c2000: 783600,
    c2010: 897934
});

const districtofcolumbia = new State({
    id: "dc",
    name: "Washington, DC",
    c1980: 638000,
    c1990: 606900,
    c2000: 572059,
    c2010: 601723
});

const florida = new State({
    id: "florida",
    name: "Florida",
    c1980: 9739000,
    c1990: 12937926,
    c2000: 15982378,
    c2010: 18801310
});

const georgia = new State({
    id: "georgia",
    name: "Georgia",
    c1980: 5464000,
    c1990: 6478216,
    c2000: 8186453,
    c2010: 9687653
});

const hawaii = new State({
    id: "hawaii",
    name: "Hawaii",
    c1980: 985000,
    c1990: 1108229,
    c2000: 1211537,
    c2010: 1360301
});

const idaho = new State({
    id: "idaho",
    name: "Idaho",
    c1980: 945000,
    c1990: 1006749,
    c2000: 1293953,
    c2010: 1567582
});

const illinois = new State({
    id: "illinois",
    name: "Illinois",
    c1980: 11419000,
    c1990: 11430602,
    c2000: 12419293,
    c2010: 12830632
});

const indiana = new State({
    id: "indiana",
    name: "Indiana",
    c1980: 5491000,
    c1990: 5544159,
    c2000: 6080485,
    c2010: 6483802
});

const iowa = new State({
    id: "iowa",
    name: "Iowa",
    c1980: 2914000,
    c1990: 2776755,
    c2000: 2926324,
    c2010: 3046355
});

const kansas = new State({
    id: "kansas",
    name: "Kansas",
    c1980: 2363000,
    c1990: 2477574,
    c2000: 2688418,
    c2010: 2853118
});

const kentucky = new State({
    id: "kentucky",
    name: "Kentucky",
    c1980: 3661000,
    c1990: 3685296,
    c2000: 4041769,
    c2010: 4339367
});

const louisiana = new State({
    id: "louisiana",
    name: "Louisiana",
    c1980: 4203000,
    c1990: 4219973,
    c2000: 4468976,
    c2010: 4533372
});

const maine = new State({
    id: "maine",
    name: "Maine",
    c1980: 1125000,
    c1990: 1227928,
    c2000: 1274923,
    c2010: 1328361
});

const maryland = new State({
    id: "maryland",
    name: "Maryland",
    c1980: 4216000,
    c1990: 4781468,
    c2000: 5296486,
    c2010: 5773552
});

const massachusetts = new State({
    id: "massachusetts",
    name: "Massachusetts",
    c1980: 5481890,
    c1990: 6016425,
    c2000: 6349097,
    c2010: 6547629
});

const michigan = new State({
    id: "michigan",
    name: "Michigan",
    c1980: 9259000,
    c1990: 9295297,
    c2000: 9938444,
    c2010: 9883640
});

const minnesota = new State({
    id: "minnesota",
    name: "Minnesota",
    c1980: 4070578,
    c1990: 4375099,
    c2000: 4919479,
    c2010: 5303925
});

const mississippi = new State({
    id: "mississippi",
    name: "Mississippi",
    c1980: 2520000,
    c1990: 2573216,
    c2000: 2844658,
    c2010: 2967297
});

const missouri = new State({
    id: "missouri",
    name: "Missouri",
    c1980: 4917000,
    c1990: 5117073,
    c2000: 5595211,
    c2010: 5988927
});

const montana = new State({
    id: "montana",
    name: "Montana",
    c1980: 787000,
    c1990: 799065,
    c2000: 902195,
    c2010: 989415
});

const nebraska = new State({
    id: "nebraska",
    name: "Nebraska",
    c1980: 1570000,
    c1990: 1578385,
    c2000: 1711263,
    c2010: 1826341
});

const nevada = new State({
    id: "nevada",
    name: "Nevada",
    c1980: 799000,
    c1990: 1201833,
    c2000: 1998257,
    c2010: 2700551
});

const newhampshire = new State({
    id: "newhampshire",
    name: "New Hampshire",
    c1980: 921000,
    c1990: 1109252,
    c2000: 1235786,
    c2010: 1316470
});

const newjersey = new State({
    id: "newjersey",
    name: "New Jersey",
    c1980: 7364000,
    c1990: 7730188,
    c2000: 8414350,
    c2010: 8791894
});

const newmexico = new State({
    id: "newmexico",
    name: "New Mexico",
    c1980: 1299000,
    c1990: 1515069,
    c2000: 1819046,
    c2010: 2059179
});

const newyork = new State({
    id: "newyork",
    name: "New York",
    c1980: 17557000,
    c1990: 17990455,
    c2000: 18976457,
    c2010: 19378102
});

const northcarolina = new State({
    id: "northcarolina",
    name: "North Carolina",
    c1980: 5874000,
    c1990: 6628637,
    c2000: 8049313,
    c2010: 9535483
});

const northdakota = new State({
    id: "northdakota",
    name: "North Dakota",
    c1980: 654000,
    c1990: 638800,
    c2000: 642200,
    c2010: 672591
});

const ohio = new State({
    id: "ohio",
    name: "Ohio",
    c1980: 10797000,
    c1990: 10847115,
    c2000: 11353140,
    c2010: 11536504
});

const oklahoma = new State({
    id: "oklahoma",
    name: "Oklahoma",
    c1980: 3026000,
    c1990: 3145585,
    c2000: 3450654,
    c2010: 3751351
});

const oregon = new State({
    id: "oregon",
    name: "Oregon",
    c1980: 2632000,
    c1990: 2842321,
    c2000: 3421399,
    c2010: 3831074
});

const pennsylvania = new State({
    id: "pennsylvania",
    name: "Pennsylvania",
    c1980: 11867000,
    c1990: 11881643,
    c2000: 12281054,
    c2010: 12702379
});

const rhodeisland = new State({
    id: "rhodeisland",
    name: "Rhode Island",
    c1980: 948000,
    c1990: 1003464,
    c2000: 1048319,
    c2010: 1052567
});

const southcarolina = new State({
    id: "southcarolina",
    name: "South Carolina",
    c1980: 3119000,
    c1990: 3486703,
    c2000: 4012012,
    c2010: 4625364
});

const southdakota = new State({
    id: "southdakota",
    name: "South Dakota",
    c1980: 690000,
    c1990: 696004,
    c2000: 754844,
    c2010: 814180
});

const tennessee = new State({
    id: "tennessee",
    name: "Tennessee",
    c1980: 4591000,
    c1990: 4877185,
    c2000: 5689283,
    c2010: 6346105
});

const texas = new State({
    id: "texas",
    name: "Texas",
    c1980: 14228000,
    c1990: 16986510,
    c2000: 20851820,
    c2010: 25145561
});

const utah = new State({
    id: "utah",
    name: "Utah",
    c1980: 1461000,
    c1990: 1722850,
    c2000: 2233169,
    c2010: 2763885
});

const vermont = new State({
    id: "vermont",
    name: "Vermont",
    c1980: 512000,
    c1990: 562758,
    c2000: 608827,
    c2010: 625741
});

const virginia = new State({
    id: "virginia",
    name: "Virginia",
    c1980: 5346000,
    c1990: 6187358,
    c2000: 7078515,
    c2010: 8001024
});

const washington = new State({
    id: "washington",
    name: "Washington",
    c1980: 4130000,
    c1990: 4866692,
    c2000: 5894121,
    c2010: 6724540
});

const westvirginia = new State({
    id: "westvirginia",
    name: "West Virginia",
    c1980: 1950000,
    c1990: 1793477,
    c2000: 1808344,
    c2010: 1852994
});

const wisconsin = new State({
    id: "wisconsin",
    name: "Wisconsin",
    c1980: 4706000,
    c1990: 4891769,
    c2000: 5363675,
    c2010: 5686986
});

const wyoming = new State({
    id: "wyoming",
    name: "Wyoming",
    c1980: 471000,
    c1990: 453588,
    c2000: 493782,
    c2010: 563626
});

//Combine objects for each state into one larger object.
const allStates = {
    alabama,
    alaska,
    arizona,
    arkansas,
    california,
    colorado,
    connecticut,
    delaware,
    districtofcolumbia,
    florida,
    georgia,
    hawaii,
    idaho,
    illinois,
    indiana,
    iowa,
    kansas,
    kentucky,
    louisiana,
    maine,
    maryland,
    massachusetts,
    michigan,
    minnesota,
    mississippi,
    missouri,
    montana,
    nebraska,
    nevada,
    newhampshire,
    newjersey,
    newmexico,
    newyork,
    northcarolina,
    northdakota,
    ohio,
    oklahoma,
    oregon,
    pennsylvania,
    rhodeisland,
    southcarolina,
    southdakota,
    tennessee,
    texas,
    utah,
    vermont,
    virginia,
    washington,
    westvirginia,
    wisconsin,
    wyoming
};

export {allStates};