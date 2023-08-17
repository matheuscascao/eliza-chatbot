import axios from "axios";
import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.API_KEY,
  dangerouslyAllowBrowser: true
});

export const queryChatGPT = async (prompt: string) => {
  try {
    console.log(process.env.API_KEY)
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });
  
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error querying ChatGPT API:", error);
    throw error;
  }
};
