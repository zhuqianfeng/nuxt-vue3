//get /api/video
import video from "@/database/video"
export default defineEventHandler((event)=>{
  return video
})