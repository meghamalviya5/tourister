import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
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
    avatar: "",
    website: "https://github.com/meghamalviya5",
    // bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "62bb1bb8-1374-11ee-be56-0242ac120002",
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubhamsoni123",
    // bookmarks: [],
    bio: "TRAVELLING - IT LEAVES YOU SPEECHLESS, THEN TURNS YOU INTO A STORYTELLER",
    avatar: "",
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
    // bookmarks: [],
    bio: "Life is either a daring adventure or nothing",
    avatar: "",
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
    // bookmarks: [],
    bio: "Time Files. It's up to you to be the navigator",
    avatar: "https://robohash.org/doloremquesintcorrupti.png",
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
    // bookmarks: [],
    bio: "To travel is to take a journey into yourself",
    avatar: "https://robohash.org/hicveldicta.png",
    website: "https://github.com/meghamalviya5",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
