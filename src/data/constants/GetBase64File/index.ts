import path from "path";
import { SaveAnyFileModel } from "../../model";

/**
 * Function to convert any base64 file into your original format
 * @param base_64_string String in base64 wich represents a file
 * @param output_dir Directory where the file will be saved
 * @param filename Name of the file without the extension
 * @param file_extension Extension of the file (in case it's not informed in base_64_string)
 * @returns Promise<string> return the full path of the saved file
 */
export const GetBase64File = (base_64_string: string, output_dir?: string, filename?: string, file_extension?: string): Promise<SaveAnyFileModel> => {
  return new Promise((resolve, reject) => {
    let base64Data: string; // base64 string
    let mimeType: string; // mime type of the files, ex: 'application/pdf' or 'image/png'

    // regular expression to get mime tyoe and base64 string
    const matches = base_64_string.replace(/\s/g, "").match(/^data:(.+);base64,(.+)$/);

    if (matches && matches.length === 3) {
      mimeType = matches[1];
      base64Data = matches[2];
    } else {
      base64Data = base_64_string;
    }

    // convert base64 string to buffer
    const fileBuffer = Buffer.from(base64Data, "base64");

    if (!mimeType && !file_extension) {
      return reject(new Error("Base64 inválido ou formato desconhecido."));
    }

    // get file extension from mime type or file extension param
    const resolvedExtension = file_extension || mimeType.split("/")[1]; // 'pdf', 'png' ...
    // complete path of the file with filename and extension
    const outputFilePath = output_dir ? path.join(output_dir, `${filename}.${resolvedExtension}`) : "";

    resolve({ file_path: outputFilePath, file_buffer: fileBuffer });
  });
};
