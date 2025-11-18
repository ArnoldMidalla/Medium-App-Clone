import { Link } from "expo-router";
import { Bell } from "lucide-react-native";
import React from "react";
import { Image, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap } from 'react-native-tab-view';

function Featured() {
  return <View>Featured</View>;
}

function ForYou() {
  return <View>ForYou</View>;
}

const renderScene = SceneMap({
  first: Featured,
  second: ForYou,
});

const routes = [
  { key: "first", title: "First" },
  { key: "second", title: "Second" },
];

const index = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView className="bg-black">
      <View className="px-4 pt-4 flex-row justify-between items-center">
        <Image
          source={require("@/assets/images/Medium-Wordmark-White.png")}
          // className="h-6 w-full"
          className="w-24 h-6"
          resizeMode="contain"
        />
        <Link href={"/Others/notifications"} asChild>
          <Bell color="white" />
        </Link>
      </View>
      <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    </SafeAreaView>
  );
};

export default index;
