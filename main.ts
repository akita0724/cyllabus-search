import * as CSV from "https://deno.land/std@0.170.0/encoding/csv.ts";
import { embedding } from "./lib/openai.ts";
import { createIndex, readIndex } from "./lib/vector.ts";

const path = new URL(import.meta.resolve("./data.csv"));
const text = await Deno.readTextFile(path);
const data = CSV.parse(text)

const dimention = 512;

const init = async (indexName: string) => {
  const vectors = (await Promise.all(data.map(async (item): Promise<number[] | undefined> => {
    const [field, title, description] = item
    const vector = await embedding(
      `
      ${title}(${field}) 
      ${description}
      `,
      dimention)

    return vector
  }))).filter((item) => item !== undefined) as number[][]

  const index = createIndex(vectors)

  index.save(indexName)
}

const search = async (text: string, indexName: string) => {
  const vector = await embedding(text, dimention)

  const index = readIndex(indexName, dimention)

  if (!vector) {
    throw new Error("Vector is undefined");
  }
  const result = index.search(new Float32Array(vector), 3)

  result.keys.forEach((key, i) => {
    if (key)
      console.log(data[Number(key)][1], result.distances[i]);
  })
}

// init('test.index');
// init('title.index')