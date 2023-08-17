import axios from "axios";
import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

const CHATGPT_API_URL = ""; // Replace this with the actual API URL

export const queryChatGPT = async (prompt: string) => {
  try {
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
