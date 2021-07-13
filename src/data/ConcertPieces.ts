const copernicusPdf =
  require("assets/scores/Solo/Copernicus-Etudes.pdf").default;

const jupiter =
  require("assets/audio/concert-music/Solo/Copernicus/Jupiter.mp3").default;
const neptune =
  require("assets/audio/concert-music/Solo/Copernicus/Neptune.mp3").default;
const uranus =
  require("assets/audio/concert-music/Solo/Copernicus/Uranus.mp3").default;
const mars =
  require("assets/audio/concert-music/Solo/Copernicus/Mars.mp3").default;
const mercury =
  require("assets/audio/concert-music/Solo/Copernicus/Mercury.mp3").default;
const pluto =
  require("assets/audio/concert-music/Solo/Copernicus/Pluto.mp3").default;
const saturn =
  require("assets/audio/concert-music/Solo/Copernicus/Saturn.mp3").default;
const venus =
  require("assets/audio/concert-music/Solo/Copernicus/Venus.mp3").default;
const earth =
  require("assets/audio/concert-music/Solo/Copernicus/Earth.mp3").default;

export const concertPieces = [
  {
    nexTitle: "Solo Music",
    tabName: "Solo",
    playList: ["Copernicus Etudes", "Three Pieces for Clarinet"],

    allPieces: [
      {
        cover: true,
        title: "Concert Music",
        key: "",
        year: "",
        description: "",
        movements: [""],
        instrumentation: [""],
        scoreSample: "",
        duration: "",
      },
    ],
  },
  {
    nexTitle: "Vocal Music",
    tabName: "Vocal",
    playList: ["I wonder", "Wander"],
    allPieces: [
      {
        title: "Copernicus Etudes",
        key: "copernicus",
        year: "2012-2020",
        description:
          "These Piano Etudes are a collection of works that I have written, revised, and added to over the last decade or so. sometime in 2020 I think I was finally happy enough with them to call them finished. Each piece explores different principles of modern compositional practices and ideas while loosely tying into some kind of theme around one of the planet's (or dwarf planets - sorry, Pluto) geology, features, or position in the solar system.",
        movements: [
          { name: "Jupiter", audio: jupiter, initialTime: "3:45" },
          { name: "Neptune", audio: neptune, initialTime: "3:45" },
          { name: "Uranus", audio: uranus, initialTime: "3:45" },
          { name: "Mars", audio: mars, initialTime: "3:45" },
          { name: "Mercury", audio: mercury, initialTime: "3:45" },
          { name: "Pluto", audio: pluto, initialTime: "3:45" },
          { name: "Saturn", audio: saturn, initialTime: "3:45" },
          { name: "Venus", audio: venus, initialTime: "3:45" },
          { name: "Earth", audio: earth, initialTime: "3:45" },
        ],
        instrumentation: ["Solo Piano"],
        scoreSample: copernicusPdf,
        duration: "28'",
      },
      {
        title: "Three Pieces for Clarinet",
        key: "3-pieces-clarinet-piano",
        year: "2008",
        description:
          "This is a piece that I wrote for my undergraduate composition recital. It was my first time writing for clarinet and is both short and incredibly conservative. At the time I had just started studying modern music.",
        movements: [
          { name: "Morning", audio: "", initialTime: "3:45" },
          { name: "Afternoon", audio: "", initialTime: "3:45" },
          { name: "Night", audio: "", initialTime: "3:45" },
        ],
        instrumentation: ["Solo Piano", "Bb Clarinet"],
        scoreSample: "",
        duration: "28'",
      },
    ],
  },
  {
    nexTitle: "Orchestral Music",
    tabName: "Orchestral",
    playList: ["I wonder", "3 Christmas Songs"],
    allPieces: [
      {
        title: "I wonder as I wander",
        key: "copernicus",
        year: "2020",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        movements: [
          "First",
          "Second",
          "Third",
          "Fourth",
          "Fifth",
          "Sixth",
          "Seventh",
          "Eighth",
          "Ninth",
        ],
        instrumentation: ["Solo Piano"],
        scoreSample: "",
        duration: "28 minutes",
      },
      {
        title: "3 Christmas songs",
        key: "3-pieces-clarinet-piano",
        year: "2008",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        movements: ["First", "Second", "Third"],
        instrumentation: ["Solo Piano", "Bb Clarinet"],
        scoreSample: "",
        duration: "28 minutes",
      },
    ],
  },
  {
    nexTitle: "Chamber Music",
    tabName: "Chamber",
    playList: ["Dialogues", "Star-Crossed"],
    allPieces: [
      {
        title: "Cycle - 1. Metamorphosis in Air",
        key: "metamorph",
        year: "2020",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        movements: ["First", "Second", "Third", "Fourth"],
        instrumentation: [
          "3333",
          "4331",
          "Timpani",
          "Piano",
          "Harp",
          "Strings",
        ],
        scoreSample: "",
        duration: "28 minutes",
      },
      {
        title: "Terminal Light",
        key: "terminal-night",
        year: "2008",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        movements: ["First", "Second", "Third"],
        instrumentation: ["Solo Piano", "Bb Clarinet"],
        scoreSample: "",
        duration: "6 minutes",
      },
    ],
  },
  {
    nexTitle: "Choral Music",
    tabName: "Choral",
    playList: ["There Will Come Soft Rains", "Homeward Bound"],
    allPieces: [
      {
        title: "Dialogues",
        key: "dalogue",
        year: "2017",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        movements: ["First", "Second", "Third", "Fourth"],
        instrumentation: [""],
        scoreSample: "",
        duration: "28 minutes",
      },
      {
        title: "Star-crossed",
        key: "star-crossed",
        year: "2008",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        movements: ["First", "Second", "Third"],
        instrumentation: ["Solo Piano", "Bb Clarinet"],
        scoreSample: "",
        duration: "6 minutes",
      },
    ],
  },
  {
    nexTitle: "",
    playList: [""],
    allPieces: [
      {
        title: "There Will Come Soft Rains",
        key: "soft-rains",
        year: "2017",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        movements: ["First"],
        instrumentation: [""],
        scoreSample: "",
        duration: "28 minutes",
      },
      {
        title: "Homeward Bound",
        key: "star-crossed",
        year: "2008",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        movements: ["First", "Second", "Third"],
        instrumentation: ["Solo Piano", "Bb Clarinet"],
        scoreSample: "",
        duration: "6 minutes",
      },
    ],
  },
];
