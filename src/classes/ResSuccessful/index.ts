import { ResSuccessfulModel } from "../../data/model";

export class ResSuccessful implements ResSuccessfulModel {
  constructor(public message: string | null, public data: unknown) {}
}
