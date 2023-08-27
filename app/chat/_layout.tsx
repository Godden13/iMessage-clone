import { Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat } from 'stream-chat-expo';

const API_KEY = 'pqazq2amuu7t';
const client = StreamChat.getInstance(API_KEY);

export default function ChatLayout() {

    useEffect(() => {
        // connect the user
        const connectUser = async () => {
          await client.connectUser(
            {
              id: "chia",
              name: "chia",
              image: 'https://i.imgur.com/fR9Jz14.png',
            },
            client.devToken('chia')
          );
    
          const channel = client.channel('livestream', 'public', {
            name: 'Public',
            // image: 'https://i.imgur.com/fR9Jz14.png',
          });
          await channel.create();
        };
    
        connectUser();
    
        return () => {
          client.disconnectUser();
        };
      }, []);

    return (
    <OverlayProvider>
        <Chat client={client}>
    <Stack> 
        <Stack.Screen name="index" options={{title: "Messages"}} />   
    </Stack>
    </Chat>
    </OverlayProvider>
    )
}