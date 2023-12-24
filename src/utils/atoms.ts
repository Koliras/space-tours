import { atom } from "recoil";
import { Tour } from "../types/Tour";

export const favoriteToursIds$ = atom({
  key: 'favoriteToursIds',
  default: [] as string[],
})

export const tours$ = atom({
  key: 'tours',
  default: [] as Tour[],
})
