import { Tabs } from "expo-router";
import { Bookmark, Home, Search, User } from "lucide-react-native";
import React from "react";
import { Image, View } from "react-native";

function TabIcon({ focused, icon: Icon }: any) {
  return (
    <View className="items-center justify-center">
      <Icon
        color={focused ? "#ffffff" : "#a6a6a6"}
        fill={focused ? "white" : "#212529"}
        // size={focused ? 26 : 22}
        // fill={Icon === Circle && "#a6a6a6"}
        strokeWidth={1.6}
      />
    </View>
  );
}

function TabIcon2({ focused, image }: any) {
  return (
    <View className="items-center justify-center">
      <Image
        source={{ uri: image }}
        className={`size-8 rounded-full ${focused && "border-2 border-[#a6a6a6]"}`}
      />
    </View>
  );
}

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#000000",
          height: 90,
          position: "absolute",
          overflow: "hidden",
          paddingHorizontal: 10,
          borderTopWidth: 0,
        },
        tabBarIconStyle: {
          marginTop: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={Home} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={User} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={Search} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={Bookmark} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon2
              focused={focused}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7N5xpGsqseTgSZjFhsIBfbuKnkoZuJFjfRA&s"
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
