// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import {
  faHeart as faHeartSolid,
  faBookmark as faBookmarkSolid,
  faEdit,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faHeartLight,
  faBookmark as faBookmarkLight,
  faSmile,
} from "@fortawesome/free-regular-svg-icons";

library.add(
  faHeartSolid,
  faHeartLight,
  faBookmarkSolid,
  faBookmarkLight,
  faEdit,
  faTrashCan,
  faSmile
  // more icons go here
);
