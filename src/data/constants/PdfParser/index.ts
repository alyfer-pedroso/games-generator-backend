import pdf from "pdf-parse";

/**
 * Parse a PDF file and extract the text from it.
 * @param pathOrBuffer - The path to the PDF file or the Buffer containing the PDF data.
 * @returns A Promise that resolves with the extracted text or rejects with an error.
 */
export const PdfParser = (pathOrBuffer: Buffer | string): Promise<any> => {
  return new Promise((resolve, reject) => {
    pdf(pathOrBuffer)
      .then((data: any) => {
        resolve(data.text);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};
