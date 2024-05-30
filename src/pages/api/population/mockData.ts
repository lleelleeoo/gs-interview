// Actually, this is the perfect way to backend typings.
// Both: back- and frontend types are the same

type StateCode =
    "al" | "ak" | "az" | "ar" | "ca" | "co" | "ct" | "de" | "dc" | "fl" | "ga" | "hi" | "id" | "il" | "in" | "ia" |
    "ks" | "ky" | "la" | "me" | "md" | "ma" | "mi" | "mn" | "ms" | "mo" | "mt" | "ne" | "nv" | "nh" | "nj" | "nm" |
    "ny" | "nc" | "nd" | "oh" | "ok" | "or" | "pa" | "ri" | "sc" | "sd" | "tn" | "tx" | "ut" | "vt" | "va" | "wa" |
    "wv" | "wi" | "wy";

type StateName =
    "Alabama"| "Alaska"| "Arizona"| "Arkansas"| "California"| "Colorado"| "Connecticut"| "Delaware"|
    "District of Columbia"| "Florida"| "Georgia"| "Hawaii"| "Idaho"| "Illinois"| "Indiana"| "Iowa"| "Kansas"|
    "Kentucky"| "Louisiana"| "Maine"| "Maryland"| "Massachusetts"| "Michigan"| "Minnesota"| "Mississippi"| "Missouri"|
    "Montana"| "Nebraska"| "Nevada"| "New Hampshire"| "New Jersey"| "New Mexico"| "New York"| "North Carolina"|
    "North Dakota"| "Ohio"| "Oklahoma"| "Oregon"| "Pennsylvania"| "Rhode Island"| "South Carolina"| "South Dakota"|
    "Tennessee"| "Texas"| "Utah"| "Vermont"| "Virginia"| "Washington"| "West Virginia"| "Wisconsin"| "Wyoming";

type PopulationItem = {
    code: StateCode,
    name: StateName,
    population: number,
};

export type PopulationPayload = PopulationItem[];

export const populationPerState: PopulationPayload = [
    {
        code: "al",
        name: "Alabama",
        population: 4903185,
    },
    {
        code: "ak",
        name: "Alaska",
        population: 731545,
    },
    {
        code: "az",
        name: "Arizona",
        population: 7278717,
    },
    {
        code: "ar",
        name: "Arkansas",
        population: 3017804,
    },
    {
        code: "ca",
        name: "California",
        population: 39512223,
    },
    {
        code: "co",
        name: "Colorado",
        population: 5758736,
    },
    {
        code: "ct",
        name: "Connecticut",
        population: 3565287,
    },
    {
        code: "de",
        name: "Delaware",
        population: 973764,
    },
    {
        code: "dc",
        name: "District of Columbia",
        population: 705749,
    },
    {
        code: "fl",
        name: "Florida",
        population: 21477737,
    },
    {
        code: "ga",
        name: "Georgia",
        population: 10617423,
    },
    {
        code: "hi",
        name: "Hawaii",
        population: 1415872,
    },
    {
        code: "id",
        name: "Idaho",
        population: 1787065,
    },
    {
        code: "il",
        name: "Illinois",
        population: 12671821,
    },
    {
        code: "in",
        name: "Indiana",
        population: 6732219,
    },
    {
        code: "ia",
        name: "Iowa",
        population: 3155070,
    },
    {
        code: "ks",
        name: "Kansas",
        population: 2913314,
    },
    {
        code: "ky",
        name: "Kentucky",
        population: 4467673,
    },
    {
        code: "la",
        name: "Louisiana",
        population: 4648794,
    },
    {
        code: "me",
        name: "Maine",
        population: 1344212,
    },
    {
        code: "md",
        name: "Maryland",
        population: 6045680,
    },
    {
        code: "ma",
        name: "Massachusetts",
        population: 6892503,
    },
    {
        code: "mi",
        name: "Michigan",
        population: 9986857,
    },
    {
        code: "mn",
        name: "Minnesota",
        population: 5639632,
    },
    {
        code: "ms",
        name: "Mississippi",
        population: 2976149,
    },
    {
        code: "mo",
        name: "Missouri",
        population: 6137428,
    },
    {
        code: "mt",
        name: "Montana",
        population: 1068778,
    },
    {
        code: "ne",
        name: "Nebraska",
        population: 1934408,
    },
    {
        code: "nv",
        name: "Nevada",
        population: 3080156,
    },
    {
        code: "nh",
        name: "New Hampshire",
        population: 1359711,
    },
    {
        code: "nj",
        name: "New Jersey",
        population: 8882190,
    },
    {
        code: "nm",
        name: "New Mexico",
        population: 2096829,
    },
    {
        code: "ny",
        name: "New York",
        population: 19453561,
    },
    {
        code: "nc",
        name: "North Carolina",
        population: 10488084,
    },
    {
        code: "nd",
        name: "North Dakota",
        population: 762062,
    },
    {
        code: "oh",
        name: "Ohio",
        population: 11689100,
    },
    {
        code: "ok",
        name: "Oklahoma",
        population: 3956971,
    },
    {
        code: "or",
        name: "Oregon",
        population: 4217737,
    },
    {
        code: "pa",
        name: "Pennsylvania",
        population: 12801989,
    },
    {
        code: "ri",
        name: "Rhode Island",
        population: 1059361,
    },
    {
        code: "sc",
        name: "South Carolina",
        population: 5148714,
    },
    {
        code: "sd",
        name: "South Dakota",
        population: 884659,
    },
    {
        code: "tn",
        name: "Tennessee",
        population: 6829174,
    },
    {
        code: "tx",
        name: "Texas",
        population: 28995881,
    },
    {
        code: "ut",
        name: "Utah",
        population: 3205958,
    },
    {
        code: "vt",
        name: "Vermont",
        population: 623989,
    },
    {
        code: "va",
        name: "Virginia",
        population: 8535519,
    },
    {
        code: "wa",
        name: "Washington",
        population: 7614893,
    },
    {
        code: "wv",
        name: "West Virginia",
        population: 1792147,
    },
    {
        code: "wi",
        name: "Wisconsin",
        population: 5822434,
    },
    {
        code: "wy",
        name: "Wyoming",
        population: 578759,
    },
];
