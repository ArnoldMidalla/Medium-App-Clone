import { useRouter } from "expo-router";
import { View } from "lucide-react-native";
import React from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const page = () => {
  const router = useRouter();
  function backBtn() {
    router.back();
  }
  return (
    <SafeAreaView className="bg-black flex-1 flex-col px-4 gap-4">
      <View className="pt-5 pb-4 flex-row flex-1 items-center justify-between">
        <TouchableOpacity
          className="rounded-lg w-12 h-12 flex justify-center items-center bg-grey-900"
          onPress={backBtn}
        >
          <Text className="font-dmsansMedium text-white">Close</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        className="font-dmsansBold text-2xl text-white mt-4"
        placeholder="My New Post Title"
        placeholderTextColor={"#6b6b6b"}
      />
      <TextInput
        className="font-dmsansMedium h-96 text-white"
        multiline={true}
        textAlignVertical="top"
        returnKeyType="default"
        placeholder="My New Post Content"
        placeholderTextColor={"#6b6b6b"}
      />
    </SafeAreaView>
  );
};

export default page;
