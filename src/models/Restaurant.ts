import firebase from "firebase/app";
import { Dish } from "./Dish";

export interface Restaurant {
  id: string;
  name: string;
  img: string;
  dishes?: Dish[];
  chef?: string;
  openTime: string;
  closeTime: string;
  dateAdded: firebase.firestore.Timestamp;
  favorites: number;
}
