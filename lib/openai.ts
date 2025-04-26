// import OpenAI from "https://deno.land/x/openai@v4.69.0/mod.ts"

// const openai = new OpenAI({
//   apiKey: Deno.env.get("OPENAI_API_KEY"),
// })

// const embedding = async (text: string, dimensions: number = 1536) => {
//   const response = await openai.embeddings.create({
//     model: "text-embedding-3-large",
//     input: text,
//     dimensions: dimensions,
//   })

//   if (response.data.length > 0) {
//     console.log('ok')
//     return response.data[0].embedding
//   } else {
//     throw new Error("No embedding found in the response")
//   }
// }

// export { embedding }  

import { GoogleGenAI } from 'npm:@google/genai';
const ai = new GoogleGenAI({ apiKey: Deno.env.get('GEMINI_API_KEY') });

export const embedding = async (text: string, dimentions: number = 100): Promise<number[] | undefined> => {
  const result = await ai.models.embedContent({
    model: "text-embedding-004",
    contents: text,
    config: { outputDimensionality: dimentions },
  });
  if (!result.embeddings || result.embeddings.length === 0) {
    return undefined
  }
  return result.embeddings[0].values;
}
