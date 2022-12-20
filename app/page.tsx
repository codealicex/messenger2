import { Message } from "../typings";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

export default async function HomePage() {
  // const data = await fetch(`${process.env.URL}/api/getMessages`).then(res => res.json());
  // // console.log(data);
  // const messages: Message[] = data.messages;
  const messages: Message[] = [];

  return (
    <main>
      <MessageList initialMessages={messages} />
      <ChatInput />
    </main>
  )
}