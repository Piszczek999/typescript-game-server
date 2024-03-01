export function broadcastMessage(senderId: string, users: [], message: string) {
  const messageData = JSON.stringify({
    event: "CHAT_MESSAGE",
    userId: senderId,
    message,
  });
  // users.forEach((userData, userId) => {
  //   if (userId !== senderId) {
  //     server.send(messageData, PORT, "0.0.0.0");
  //   }
  // });
}
