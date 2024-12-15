import fs from "fs";
import { SaveAnyFileModel } from "../../model";

/**
 * Saves a file to disk.
 * @param {{ file_path: string, file_buffer: Buffer }} obj
 * @param {string} obj.file_path - The path to save the file to.
 * @param {Buffer} obj.file_buffer - The buffer of the file to save.
 * @returns {Promise<string>} - Resolves with the file path of the saved file. Rejects with an error.
 */
export const SaveAnyFile = ({ file_path, file_buffer }: SaveAnyFileModel): Promise<string> => {
  return new Promise((resolve, reject) => {
    // write file to disk
    fs.writeFile(file_path, file_buffer, (err) => {
      if (err) return reject(err);
      resolve(file_path);
    });
  });
};
