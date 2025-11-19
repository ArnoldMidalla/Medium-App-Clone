import { Link, useRouter } from "expo-router";
import {
  Bookmark,
  ChevronLeft,
  Ellipsis,
  Heart,
  MessageCircle,
  Play,
  Share2,
  Sparkle,
} from "lucide-react-native";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const fakeData = {
  id: 1001,
  title: "Why You Should Be Writing Your Code in Assembly",
  //   subtitle:": A Modern Revival",
  author: "Dr. Evelyn Reed",
  publication: "In Software Engineering Trends",
  date: "Nov 15",
  views: 25100,
  comments: 782,
  subtitle:
    "Performance bottlenecks are everywhere. Learn why ditching high-level abstractions can lead to blazing fast applications.",
  image:
    "https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  authorImg:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  content:
    "In the modern era of cloud computing and sprawling microservices, it's easy to forget the fundamental connection between our code and the metal it runs on. We've become reliant on sophisticated compilers and high-level languages like Python and JavaScript, celebrating rapid development and abstraction. But this comfort comes at a hidden cost: performance bottlenecks that manifest as increased latency, higher memory consumption, and ultimately, wasted compute cycles. For computationally intensive tasks—think real-time processing, cutting-edge AI, or even critical operating system components—efficiency is paramount, and we are leaving substantial speed gains on the table. The solution isn't to abandon our favorite high-level tools entirely, but to strategically incorporate Assembly Language where it matters most. Assembly allows a programmer to directly manipulate processor registers, manage memory exactly as needed, and utilize specialized instruction sets (like SIMD for parallel data operations) that compilers often fail to optimize perfectly. This level of low-level control is invaluable. By identifying the *hot spots* in your application—the $5%$ of code that consumes $95%$ of the execution time—and rewriting those small, critical routines in hand-optimized Assembly, you can unlock blazing fast performance improvements that are simply unattainable in a high-level environment. While the learning curve is steeper, the return on investment for high-performance computing is undeniable. Adopting this strategy is a modern revival of a core engineering principle: understand the machine. It’s not just about speed; it's about control, predictability, and crafting code that is truly hardware-aware. Start small, and you'll soon see why Assembly remains the gold standard for pure, unadulterated execution speed.",
};

export default function Page() {
  const router = useRouter();
  function backBtn() {
    router.back();
  }

  //   const num = fakeData.views;
  function formatToK(num: number) {
    if (num < 1000) return num.toString();
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }

  const [follow, setFollow] = useState(false);

  function changeFoll() {
    setFollow(!follow);
    // console.log(follow ? "user is following" : "user stopped");
  }

  const [liked, setLiked] = useState(false);
  function likePost() {
    setLiked(!liked);
  }

  return (
    <SafeAreaView className="bg-black flex-1 flex-col">
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
      <ScrollView>
        <View className="bg-grey-900 m-4 p-5 rounded-xl">
          <Text className="text-white font-dmsans leading-5">
            This is member-only story is on us. Upgrade to access all of medium
          </Text>
        </View>
        <View className="mx-4 flex-col gap-4">
          <View className="flex-row gap-2 border border-white px-4 py-2 rounded-full opacity-60">
            <Sparkle color={"white"} size={20} />
            <Text className="font-dmsans text-white">Member-only story</Text>
          </View>
          <Text
            className="text-white text-3xl tracking-tighter leading-8 font-dmsansBold"
            // style={{ fontFamily: "DMSans_700Bold", fontSize: 30 }}
          >
            {fakeData.title}
          </Text>
          <Text className="opacity-80 text-white font-dmsans">
            {fakeData.subtitle}
          </Text>
          <Text className="opacity-50 text-white font-dmsans">
            8 min read • Jul 28, 2025
          </Text>
          <View className="flex-row gap-4 items-center">
            <Link href={"/profilePage/page"} asChild>
              <TouchableOpacity className="flex-row items-center gap-2">
                <Image
                  source={{ uri: fakeData.authorImg }}
                  className="size-12 rounded-full"
                />
                <Text className="opacity-80 text-white font-dmsans">
                  {fakeData.author}
                </Text>
              </TouchableOpacity>
            </Link>
            <TouchableOpacity onPress={changeFoll}>
              <Text
                className={`opacity-80 py-2 px-4 border rounded-full ${
                  follow ? "text-white" : "bg-white"
                } border-white font-dmsans`}
              >
                {follow ? "Following" : "Follow"}
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: fakeData.image }}
            className="w-full h-48 rounded-xl"
          />
          <Text className="text-white font-dmsans text-center opacity-60 text-sm">
            Image by Matthew Guay
          </Text>
          <Text className="font-dmsans tracking-wide text-white opacity-80" selectable>
            {fakeData.content}
          </Text>
        </View>
      </ScrollView>
      <View className="flex-row items-center mx-4 justify-between mb-7 mt-5">
        <TouchableOpacity
          onPress={likePost}
          className="flex-row gap-2 items-center"
        >
          <Heart color={"#7e7e7e"} size={22} fill={liked?"#7e7e7e":""} />
          <Text className="text-white font-dmsansMedium opacity-80">
            {formatToK(fakeData.views)}
          </Text>
        </TouchableOpacity>
        <Link href={"/commentsPage/page"} asChild>
          <TouchableOpacity className="flex-row gap-2 items-center">
            <MessageCircle color={"#7e7e7e"} size={22} />
            <Text className="text-white font-dmsansMedium opacity-80">
              {formatToK(fakeData.comments)}
            </Text>
          </TouchableOpacity>
        </Link>
        <Bookmark color={"#7e7e7e"} size={22} />
        <Share2 color={"#7e7e7e"} size={22} />
      </View>
    </SafeAreaView>
  );
}
