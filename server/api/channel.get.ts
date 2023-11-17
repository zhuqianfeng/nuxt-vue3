// get请求   /api/channel 
export default defineEventHandler( async(event) => {
  console.log('event1112',event.context);
  await wait(2000)
  return [{
    id: 1,
    name: "首页"
  }]
})


function wait(ms: number ) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
