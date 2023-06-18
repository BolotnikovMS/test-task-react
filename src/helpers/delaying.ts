export const delaying = (ms: number) => {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  )
}
