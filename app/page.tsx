import { Message } from "../typings";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import { unstable_getServerSession } from "next-auth/next";
import Providers from "./providers";

const url = process.env.URL || "http://localhost:3000";

export default async function HomePage() {
  const data = await fetch(`${url}/api/getMessages`).then(res => res.json());
  // // console.log(data);
  const messages: Message[] = data.messages;
  // const messages: Message[] = [];

  const session = await unstable_getServerSession();

  return (
    <Providers session={session}>
      <main>
        <MessageList initialMessages={messages} />
        <ChatInput session={session} />
      </main>
    </Providers>

  )
}