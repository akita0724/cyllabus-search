import usearch, { Index } from 'npm:usearch';


const createIndex = (vectors: number[][]): Index => {
  const index = new usearch.Index({
    metric: usearch.MetricKind.Cos,
    dimensions: vectors[0].length,
    connectivity: 16,
    quantization: usearch.ScalarKind.F32,
    expansion_add: 32,
    expansion_search: 128,
    multi: false,
  })

  vectors.map((vector, i) => {
    index.add(BigInt(i), new Float32Array(vector));
  })

  return index
}

const readIndex = (indexName: string, dimensions: number): Index => {
  const index = new usearch.Index({
    metric: usearch.MetricKind.Cos,
    dimensions,
    connectivity: 16,
    quantization: usearch.ScalarKind.F32,
    expansion_add: 32,
    expansion_search: 128,
    multi: false,
  })
  index.load(indexName);
  return index
}

export { createIndex, readIndex }