
const sentence = "hello there from lighthouse labs";

let hold = 0
for (const char of sentence)
  setTimeout(() => {
    process.stdout.write(char)
  }, hold += 50)

setTimeout(()=>{
  console.log('')}, hold)
