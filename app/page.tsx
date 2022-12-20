import { Message } from "../typings";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

const url = process.env.URL || "http://localhost:3000";

export default async function HomePage() {
  const data = await fetch(`${url}/api/getMessages`).then(res => res.json());
  // // console.log(data);
  const messages: Message[] = data.messages;
  // const messages: Message[] = [];

  return (
    <main>
      <MessageList initialMessages={messages} />
      <ChatInput />
    </main>
  )
}