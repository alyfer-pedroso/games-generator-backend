import { Request, Response } from "express";
import OpenAI from "openai";

import { ResSuccessful } from "../../../classes";
import { GetError, GetBase64File, PdfParser, IsEmpty } from "../../constants";
import { GenGamesPrompt } from "./prompts";

/**
 * Gera uma avaliação baseado em um PDF.
 * @param req - Contém o PDF em base64, o tipo de arquivo e o tamanho da avaliação.
 * @param res - Retorna a avaliação gerada no formato JSON.
 */
export const GenerateGame = async (req: Request, res: Response) => {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY ?? "" });

  try {
    const { base64_pdf, file_type } = req.body;

    IsEmpty([base64_pdf, file_type]);

    if (file_type !== "pdf") throw new Error("Tipo de arquivo inválido! Apenas arquivos PDF são permitidos.");

    const { file_buffer } = await GetBase64File(base64_pdf, null, null, file_type);
    const pdfContent = await PdfParser(file_buffer);

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: GenGamesPrompt() },
        { role: "user", content: pdfContent },
      ],
    });

    return res.status(200).json(
      new ResSuccessful("Avaliação gerada com sucesso!", {
        assessment: JSON.parse(completion.choices[0].message.content),
      })
    );
  } catch (error) {
    res.status(400).json(GetError(error, "Ocorreu um erro ao gerar a avaliação!"));
  }
};
