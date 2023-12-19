import { atom } from "recoil";

export const favoriteTours$ = atom({
  key: 'favoriteTours',
  default: [] as string[],
})
