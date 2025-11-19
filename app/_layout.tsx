import { Stack } from "expo-router";

import "./globals.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Others/notifications" options={{ headerShown: false }} />
      <Stack.Screen name="articlesPage/page" options={{ headerShown: false }} />
      <Stack.Screen name="profilePage/page" options={{ headerShown: false }} />
    </Stack>
  );
}