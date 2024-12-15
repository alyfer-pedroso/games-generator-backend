import { ResErrorModel } from "./../../data/model";

export class ResError implements ResErrorModel {
  constructor(public message: string, public error: unknown) {
    this.message = message;
    this.error = {
      txt: error,
    };
  }
}
