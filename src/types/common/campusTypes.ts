import { CAMPUS } from "constants/campus";

export type CampusId = typeof CAMPUS.JAMSIL.id | typeof CAMPUS.SEOULLEUNG.id;
export type Campus = typeof CAMPUS.JAMSIL.name | typeof CAMPUS.SEOULLEUNG.name;
