import { Campus } from "types/common";

export const CAMPUS = {
  JAMSIL: { id: 1, name: "잠실" },
  SEOULLEUNG: { id: 2, name: "선릉" },
} as const;

export const getCampusId = (campusName: Campus) =>
  campusName === CAMPUS.JAMSIL.name ? CAMPUS.JAMSIL.id : CAMPUS.SEOULLEUNG.id;

export const getOtherCampus = (currentCampus: Campus) =>
  currentCampus === CAMPUS.JAMSIL.name
    ? CAMPUS.SEOULLEUNG.name
    : CAMPUS.JAMSIL.name;

export const CAMPUS_AREA_CENTER_POSITION = {
  [CAMPUS.JAMSIL.name]: {
    lat: 37.51520119987365,
    lng: 127.1030398680359,
  },
  [CAMPUS.SEOULLEUNG.name]: {
    lat: 37.5054936224827,
    lng: 127.050863180985,
  },
};

export const CAMPUS_POSITION = {
  [CAMPUS.JAMSIL.name]: {
    lat: 37.5152535228382,
    lng: 127.103068896795,
  },
  [CAMPUS.SEOULLEUNG.name]: {
    lat: 37.5054936224827,
    lng: 127.050863180985,
  },
};
