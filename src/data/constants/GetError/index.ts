import { ResError } from "../../../classes";

/**
 * Return an instance of ResError. If the given `err` is an instance of ResError, return it.
 * Otherwise, create a new ResError instance with the given `err` and `message` as the error
 * message and the error description, respectively.
 *
 * @param err The error to process.
 * @param message The description of the error.
 * @returns A ResError instance.
 */
export const GetError = (err: any, message: string) => {
  if (err instanceof ResError) {
    return err;
  }
  return new ResError(message ?? null, err?.message ?? err);
};
