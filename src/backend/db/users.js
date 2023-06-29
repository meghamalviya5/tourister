// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import girl from "../../assets/girl.png";
import woman from "../../assets/woman.png";
import womanCam from "../../assets/woman-cam.png";
import travellerMap from "../../assets/traveller-map.png";
import adventurer from "../../assets/adventurer.png";
// import traveller from "../../assets/traveller.png";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "62bb182a-1374-11ee-be56-0242ac120002",
    firstName: "Megha",
    lastName: "Malviya",
    username: "meghamalviya",
    password: "meghamalviya123",
    bio: "NEVER. STOP. EXPLORING",
    avatar: girl,
    website: "https://github.com/meghamalviya5",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "62bb1bb8-1374-11ee-be56-0242ac120002",
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubhamsoni123",
    bio: "TRAVELLING - IT LEAVES YOU SPEECHLESS, THEN TURNS YOU INTO A STORYTELLER",
    avatar: travellerMap,
    website: "https://github.com/meghamalviya5",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "62bb1d52-1374-11ee-be56-0242ac120002",
    firstName: "Terrill",
    lastName: "Hills",
    username: "rshawe2",
    password: "OWsTbMUgFc",
    bio: "Life is either a daring adventure or nothing",
    avatar: woman,
    website: "https://github.com/meghamalviya5",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "62bb2162-1374-11ee-be56-0242ac120002",
    firstName: "Sheldon",
    lastName: "Quigley",
    username: "hbingley1",
    password: "CQutx25i8r",
    bio: "Time Files. It's up to you to be the navigator",
    avatar: adventurer,
    website: "https://github.com/meghamalviya5",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "62bb22c0-1374-11ee-be56-0242ac120002",
    firstName: "Terry",
    lastName: "Medhurst",
    username: "atuny0",
    password: "9uQFF1Lh",
    bio: "To travel is to take a journey into yourself",
    avatar: womanCam,
    website: "https://github.com/meghamalviya5",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
