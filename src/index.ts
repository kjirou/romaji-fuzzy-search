export type Foo = number
const fn = async (value: Foo): Promise<void> => {
  console.log(value)
}
(async () => {
  await fn(1)
})()
