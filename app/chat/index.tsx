import { ChannelList } from "stream-chat-expo";
import { useState } from "react";
import { Channel as ChannelType } from "stream-chat";
import { useRouter } from 'expo-router';

export default function ChatScreen() {
  const router = useRouter();

  const isPublic = { type: 'livestream' };

  const [channel, setChannel] = useState<ChannelType>();
    return (
        <ChannelList onSelect={(channel) => router.push(`/chat/channel/${channel.id}`)} />
    )
}