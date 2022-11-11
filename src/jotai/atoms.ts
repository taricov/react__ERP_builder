import { atom, PrimitiveAtom } from "jotai";

export const darkModeAtom = atom(localStorage.getItem("darkMode") ?? true);
