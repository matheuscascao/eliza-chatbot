/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import SentMessage from "./sentMessage";
import ReceivedMessage from "./receivedMessage";
import { useState } from "react";
import { queryChatGPT } from "@/chatgpt";

interface Message {
  message: string;
  type: "sent" | "received";
}

export default function Home() {
  const [mensagens, setMensagens] = useState<Message[]>([
 
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full cellphone-dimensions">
        <div className="flex w-full whatsapp-background-color h-auto px-5 py-3 align-middle justify-items-center">
          <img src="eliza-pfp.png" className="w-10 h-10 rounded-full" />
          <a className="font-sans font-medium text-white text-center flex items-center justify-center pl-4 text-base">
            Eliza Chatbot
          </a>
        </div>

        <div className="flex flex-col whatsapp-bg bg-slate-100 h-4/5 pb-6">
          <div className="flex-grow overflow-y-scroll	px-7 pt-1">
            {mensagens.map((message) => {
              if (message.type === "sent") {
                return (
                  <SentMessage
                    message={message.message}
                    key={message.message}
                  />
                );
              } else {
                return (
                  <ReceivedMessage
                    message={message.message}
                    key={message.message}
                  />
                );
              }
            })}
          </div>

          <form
            className="flex w-full px-7 pt-5 items-center"
            onSubmit={async (e) => {
              e.preventDefault();
              if (input === "") return;
              var data = input;
              setLoading(true);
              setMensagens((e)=>[...e, { message: input, type: "sent" }]);
              setInput("");
              var x = await queryChatGPT(`
              As Elizabot, a psychoanalyst, you are about to provide insightful responses to inquiries from various patients seeking guidance and understanding. Your empathetic and thoughtful approach will help them navigate their emotions and challenges.
              Make the response with the following format:
              {
                "response": ""
              }
              ${data}
              `);
              var message = JSON.parse(x ?? "").response;
              setMensagens((e)=>[
                ...e,
                { message: message, type: "received" },
              ]);
              setLoading(false);
            }}
          >
            <input
              type="text"
              placeholder="Chat with Eliza"
              className="bg-white rounded-full px-6 py-3 font-normal text-gray-600 w-full outline-none"
              value={loading ? "..." : input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="flex h-10 w-12 whatsapp-background-color ml-3 rounded-full"
              onClick={async (e) => {}}
            ></button>
          </form>
        </div>
      </div>
    </main>
  );
}
