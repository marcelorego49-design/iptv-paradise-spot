import { createServerFn } from "@tanstack/react-start";
import fs from "fs";
import path from "path";

export const getProjectZip = createServerFn({ method: "GET" })
  .handler(async () => {
    try {
      const filePath = path.resolve(process.cwd(), "public/project-essential.zip");
      
      if (!fs.existsSync(filePath)) {
        throw new Error("Arquivo ZIP não encontrado no servidor.");
      }

      const buffer = fs.readFileSync(filePath);
      const base64 = buffer.toString("base64");

      return {
        base64,
        filename: "leao-play-essencial.zip",
        contentType: "application/zip"
      };
    } catch (error) {
      console.error("Erro na Server Function getProjectZip:", error);
      throw error;
    }
  });
