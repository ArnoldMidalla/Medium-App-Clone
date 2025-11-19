import { useRouter } from "expo-router";
import { ChevronLeft, Settings } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  const router = useRouter();
  function backBtn() {
    router.back();
  }
  return (
    <SafeAreaView className="flex-1 bg-black px-4">
      <View className="pt-5 pb-3 flex-row items-center justify-between">
        <TouchableOpacity
          className="rounded-lg w-12 h-12 flex justify-center items-center"
          onPress={backBtn}
        >
          <ChevronLeft color={"#7e7e7e"} size={30} />
        </TouchableOpacity>

        <TouchableOpacity className="rounded-lg w-12 h-12 flex justify-center items-center">
          <Settings color={"#7e7e7e"} size={22} />
        </TouchableOpacity>
      </View>
      <View className="flex-row flex-1 gap-4">
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7N5xpGsqseTgSZjFhsIBfbuKnkoZuJFjfRA&s",
          }}
          className="size-24 rounded-full"
        />
        <View className="flex-col flex-1 gap-3">
          <Text className="text-white font-dmsansBold text-xl">
            Denzel washington
          </Text>
          <View className="flex-row gap-4">
            <Text className="text-white font-dmsansMedium opacity-80">
              0 followers
            </Text>
            <Text className="text-white font-dmsansMedium opacity-80">
              2 following
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row gap-4 flex-1">
        <TouchableOpacity className="bg-white py-3 h-14 flex-row items-center justify-center rounded-full flex-1">
          <Text className="text-center font-dmsansBold">View stats</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-3 border border-white h-14 flex-row items-center justify-center rounded-full flex-1">
          <Text className="text-white text-center font-dmsansBold">
            Edit your profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default profile;
