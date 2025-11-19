import { Link, useRouter } from "expo-router";
import { Bookmark, ChevronLeft, Ellipsis, Heart, MessageCircle, Play, Share2, ShieldCheck } from "lucide-react-native";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const router = useRouter();
  function backBtn() {
    router.back();
  }
    function formatToK(num: number) {
    if (num < 1000) return num.toString();
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return (
    <SafeAreaView className="bg-black  flex-1 flex-col">
      <View className="pt-5 pb-3 flex-row items-center justify-between mx-4">
        <TouchableOpacity
          className="rounded-lg w-12 h-12 flex justify-center items-center"
          onPress={backBtn}
        >
          <ChevronLeft color={"#7e7e7e"} size={30} />
        </TouchableOpacity>
        <View className="flex-row gap-4">
          <TouchableOpacity className="rounded-lg w-12 h-12 flex justify-center items-center">
            <Play color={"#7e7e7e"} size={22} />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-lg w-12 h-12 flex justify-center items-center">
            <Ellipsis color={"#7e7e7e"} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="mx-4 flex-1 flex-col gap-12">
        <View className="flex-row items-center justify-between">
          <Text className="font-dmsansBold text-2xl text-white">
            Responses (782)
          </Text>
          <ShieldCheck color={"white"} size={18} />
        </View>
        <View className="flex-row flex-1 gap-4">
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7N5xpGsqseTgSZjFhsIBfbuKnkoZuJFjfRA&s",
            }}
            className="size-12 rounded-full"
          />
          <View className="flex-col flex-1 gap-3">
            <Text className="text-white font-dmsansMedium text-lg">
              Denzel washington
            </Text>
            <TextInput
              className="bg-grey-900 rounded-lg px-5 py-3.5 font-dmsans"
              placeholder="What are your thoughts?"
              placeholderTextColor={"#6b6b6b"}
            />
          </View>
        </View>
      </View>
      <View className="flex-row items-center mx-4 justify-between mb-7 mt-5">
        <View className="flex-row gap-2 items-center">
          <Heart color={"#7e7e7e"} size={22} />
          <Text className="text-white font-dmsansMedium opacity-80">
            {formatToK(25100)}
          </Text>
        </View>
        <Link href={"/commentsPage/page"} asChild>
          <TouchableOpacity className="flex-row gap-2 items-center">
            <MessageCircle color={"#7e7e7e"} size={22} />
            <Text className="text-white font-dmsansMedium opacity-80">
              {formatToK(782)}
            </Text>
          </TouchableOpacity>
        </Link>
        <Bookmark color={"#7e7e7e"} size={22} />
        <Share2 color={"#7e7e7e"} size={22} />
      </View>
    </SafeAreaView>
  );
}
