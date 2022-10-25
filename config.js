export default {
  prefixes: ['awesomepokedex://'],
  AS_KEYS: {PROFILES: '@Profiles'},
  SCREENS: {
    TITLE_SCREEN: {
      TitleScreen: 'TitleScreen',
      MainScreen: 'MainScreen',
      NewProfileScreen: 'NewProfile',
      QRScanScreen: 'QRScanScreen',
    },
    PROFILE_SCREEN: {
      DetailedProfileScreen: 'DetailedProfile',
      Pokedex: 'Pokedex',
      Teams: 'Teams',
      Maps: 'Maps',
    },
  },
  BACKGROUNDS_IMAGES: {
    MapImage:
      'https://pbs.twimg.com/media/DbEru1uUMAAoTex?format=png&name=medium',
    PokedexLandscape: 'https://images7.alphacoders.com/662/662102.png',
    PokedexPortrait:
      'https://i.pinimg.com/originals/f3/49/55/f349552c26a36513e1b142f3c51ad93c.jpg',
  },
  CHARACTERS_IMAGES: {
    boy: 'https://i.ibb.co/2cfxkTq/boy.png',
    girl: 'https://i.ibb.co/nrGN2X2/girl.png',
    oak: 'https://i.ibb.co/k8kRQYH/oak.png',
    oakB: 'https://i.ibb.co/HThH6cQ/oakB.png',
  },
  REGIONS: [
    {
      name: 'kanto',
      badges: [
        'https://i.ibb.co/qNbbKZ9/1.png',
        'https://i.ibb.co/3y0ft90/2.png',
        'https://i.ibb.co/RgKqxDX/3.png',
        'https://i.ibb.co/Z28QmRs/4.png',
        'https://i.ibb.co/XbFvfXW/5.png',
        'https://i.ibb.co/c6VcHcg/6.png',
        'https://i.ibb.co/SQ8MZYZ/7.png',
        'https://i.ibb.co/qYgxpWh/8.png',
      ],
    },
    {
      name: 'johto',
      badges: [
        'https://i.ibb.co/DG83myH/1.png',
        'https://i.ibb.co/Khhn5Ny/2.png',
        'https://i.ibb.co/Yf0mZDF/3.png',
        'https://i.ibb.co/B2n9zBP/4.png',
        'https://i.ibb.co/W0VMmRp/5.png',
        'https://i.ibb.co/nkpvtX8/6.png',
        'https://i.ibb.co/yR74tVZ/7.png',
        'https://i.ibb.co/mStTFY5/8.png',
      ],
    },
    {
      name: 'hoenn',
      badges: [
        'https://i.ibb.co/tbBQbyy/1.png',
        'https://i.ibb.co/SB48Kwc/2.png',
        'https://i.ibb.co/Y24YR06/3.png',
        'https://i.ibb.co/NjcshCX/4.png',
        'https://i.ibb.co/j3PZWSy/5.png',
        'https://i.ibb.co/gg4qpbQ/6.png',
        'https://i.ibb.co/phr90tn/7.png',
        'https://i.ibb.co/bN9rCj7/8.png',
      ],
    },
    {
      name: 'sinnoh',
      badges: [
        'https://i.ibb.co/XJ2qVfD/1.png',
        'https://i.ibb.co/sjcgmxS/2.png',
        'https://i.ibb.co/GT4yyp1/3.png',
        'https://i.ibb.co/4fzjBtg/4.png',
        'https://i.ibb.co/tBBL6t9/5.png',
        'https://i.ibb.co/5shCx5M/6.png',
        'https://i.ibb.co/XSjttRf/7.png',
        'https://i.ibb.co/PNmdC5N/8.png',
      ],
    },
    {
      name: 'unova',
      badges: [
        'https://i.ibb.co/YTRPDGf/1.png',
        'https://i.ibb.co/d6GVZJt/2.png',
        'https://i.ibb.co/ZxdMgKx/3.png',
        'https://i.ibb.co/swqw52K/4.png',
        'https://i.ibb.co/jfm1vPh/5.png',
        'https://i.ibb.co/s5DsHxD/6.png',
        'https://i.ibb.co/ChY2gcf/7.png',
        'https://i.ibb.co/K5ZBr2h/8.png',
      ],
    },
    {
      name: 'kalos',
      badges: [
        'https://i.ibb.co/6N4KMTw/1.png',
        'https://i.ibb.co/dgXWNhY/2.png',
        'https://i.ibb.co/FmCGDB7/3.png',
        'https://i.ibb.co/HzRCqF7/4.png',
        'https://i.ibb.co/949bfyp/5.png',
        'https://i.ibb.co/hDx846M/6.png',
        'https://i.ibb.co/5cJS0kt/7.png',
        'https://i.ibb.co/2ZbV5Vj/8.png',
      ],
    },
    {
      name: 'alola',
      badges: [
        'https://i.ibb.co/yVKfPYc/1.png',
        'https://i.ibb.co/bQH5fYh/2.png',
        'https://i.ibb.co/L9s4qW6/3.png',
        'https://i.ibb.co/w60m42L/4.png',
        'https://i.ibb.co/s9XfHd4/5.png',
        'https://i.ibb.co/sP6Z5q4/6.png',
        'https://i.ibb.co/VmhNhhC/7.png',
        'https://i.ibb.co/tq13s7t/8.png',
      ],
    },
    {
      name: 'galar',
      badges: [
        'https://i.ibb.co/mTffvtF/1.png',
        'https://i.ibb.co/ZdSxG2q/2.png',
        'https://i.ibb.co/kGcXRHf/3.png',
        'https://i.ibb.co/dGLQFP4/4.png',
        'https://i.ibb.co/7bj9jrd/5.png',
        'https://i.ibb.co/dPk2Fdk/6.png',
        'https://i.ibb.co/99BJxnt/7.png',
        'https://i.ibb.co/N6RpMPz/8.png',
      ],
    },
  ],
  NUMBER_ACCOUNTS: 3,
  DIALOGS: {
    Oak: {
      welcome: 'Hello there! Welcome to the world of Pokémon! My name is Oak!',
      ask_name: 'First, what is your name?',
      confirm_name: 'Right! So your name is',
      ask_sex: 'Are You a Boy? Or Are You a Girl?',
      confirm_sex: 'Okay so u are a',
      ask_age: 'And how old are you?',
      ask_region: 'Well please, select a region to explore',
      ask_badges: 'Select a number of badges u want',
      badges_validation: 'Hey! u cant have more than 8 badges',
      profile_validation_error: 'You have unfilled fields',
      profile_validation_done: 'This is your trainer card',
      review_profile: 'Something u missing?',
      profileTransfer:
        'Hey, it seems that you come from far away, are you ready?',
    },
  },
  InitialStates: {
    Profile: {
      id: '',
      name: '',
      age: '',
      region: '',
      isGirl: false,
      badges: '',
      teams: [],
    },
  },
  PokedexApi: {
    cacheLimit: 100 * 1000, // 100s
    timeout: 5 * 1000, // 5s
  },
};
