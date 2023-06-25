import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Megha",
    lastName: "Malviya",
    username: "meghamalviya",
    password: "meghamalviya123",
    bio: "",
    avatar: "",
    website: "",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubhamsoni123",
    bookmarks: [],
    bio: "",
    avatar: "",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Terrill",
    lastName: "Hills",
    username: "rshawe2",
    password: "OWsTbMUgFc",
    bookmarks: [],
    bio: "",
    avatar: "",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sheldon",
    lastName: "Quigley",
    username: "hbingley1",
    password: "CQutx25i8r",
    bookmarks: [],
    bio: "",
    avatar: "https://robohash.org/doloremquesintcorrupti.png",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Terry",
    lastName: "Medhurst",
    username: "atuny0",
    password: "9uQFF1Lh",
    bookmarks: [],
    bio: "",
    avatar: "https://robohash.org/hicveldicta.png",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
