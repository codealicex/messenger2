"use client";

import { Message } from "../typings";
import useSWR from "swr";
import fetcher from "../utils/fetchMessages";
import MessageComponent from "./MessageComponent";
import { useEffect } from "react";
import { clientPusher } from "../pusher";

type Props = {
    initialMessages: Message[]
}

export default function MessageList({ initialMessages }: Props) {
    const { data: messages, error, mutate } = useSWR('/api/getMessages', fetcher);

    useEffect(() => {
        const channel = clientPusher.subscribe('messages');
        channel.bind('new-message', async (data: Message) => {

            //if we send the msg, no need to update cache
            if (messages?.find(msg => msg.id === data.id)) return;

            if (!messages) {
                mutate(fetcher);
            } else {
                mutate(fetcher, {
                    optimisticData: [data, ...messages!],
                    rollbackOnError: true
                });
            }

        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
        
    }, [messages, mutate, clientPusher]);

    return (
        <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
            {
                // This line from tutorial BUT it causes https://nextjs.org/docs/messages/react-hydration-error
                // (messages || initialMessages).map(msg => <MessageComponent key={msg.id} msg={msg} />)
                messages?.map(msg => <MessageComponent key={msg.id} msg={msg} />)
            }
        </div>
    );
}