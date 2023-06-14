import { Campus } from "types/commonTypes";

const CAMPUS = {
  JAMSIL: { id: 1, name: "잠실" } as const,
  SEOULLEUNG: { id: 2, name: "선릉" } as const,
};

export const getCampusId = (campusName: Campus) =>
  campusName === CAMPUS.JAMSIL.name ? CAMPUS.JAMSIL.id : CAMPUS.SEOULLEUNG.id;

export const getOtherCampus = (currentCampus: Campus) =>
  currentCampus === CAMPUS.JAMSIL.name
    ? CAMPUS.SEOULLEUNG.name
    : CAMPUS.JAMSIL.name;
export default CAMPUS;
