export type Campus = "잠실" | "선릉";

const CAMPUS = {
  JAMSIL: { id: 1, name: "잠실" } as const,
  SEOULLEUNG: { id: 2, name: "선릉" } as const,
};

export const getCampusId = (campusName: Campus) =>
  campusName === CAMPUS.JAMSIL.name ? CAMPUS.JAMSIL.id : CAMPUS.SEOULLEUNG.id;

export default CAMPUS;
