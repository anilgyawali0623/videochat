import { StreamChat } from "stream-chat";
import "dotenv/config";
const apiKey = process.env.STEAM_API_KEY;
const apiSecret = process.env.STEAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or Secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);
//  its just getting userdata and saving in the stream
export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUser([userData]);
    return userData;
  } catch (error) {
    console.log("error creating stream user", error);
  }
};
export const generateToken= async(userId)=>{
    //  todo
}