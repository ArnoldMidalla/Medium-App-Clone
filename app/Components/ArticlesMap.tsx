import { Link } from "expo-router";
import { Heart, MessageCircle, Sparkle } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ArticleProps {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  views: number;
  comments: number;
  image: string;
  authorImg: string;
}

export default function ArticlesMap({
  title,
  subtitle,
  author,
  date,
  views,
  comments,
  image,
  authorImg,
}: ArticleProps) {
  return (
    <View className="pt-8">
      <Link href={"/articlesPage/page"} asChild>
        <TouchableOpacity className="w-full px-4 mb-8 rounded-lg flex-row flex-1 justify-between items-center">
          <View className="max-w-60 flex flex-col gap-3">
            <View className="flex-row gap-3 items-center">
              <Image
                source={{ uri: authorImg }}
                className="rounded-full size-8"
              />
              <Text className="text-white text-sm font-medium font-dmsansMedium">
                {author}
              </Text>
            </View>
            <Text className="text-xl text-white leading-6 font-dmsansBold tracking-tight line-clamp-2">
              {title}
            </Text>
            <Text className="text-white line-clamp-2 font-dmsansMedium opacity-70">
              {subtitle}
            </Text>
            <View className="opacity-80 flex-row items-center gap-4">
              <View className="flex-row items-center gap-1">
                <Sparkle color={"#fdbe12"} size={18} fill={"#fdbe12"} />
                <Text className="font-dmsansMedium text-white text-sm">
                  {date}
                </Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Heart color={"#7e7e7e"} size={18} fill={"#7e7e7e"} />
                <Text className="font-dmsansMedium text-white text-sm">
                  {views}
                </Text>
              </View>
              <View className="flex-row items-center gap-1">
                <MessageCircle color={"#7e7e7e"} size={18} fill={"#7e7e7e"} />
                <Text className="font-dmsansMedium text-white text-sm">
                  {comments}
                </Text>
              </View>
            </View>
          </View>
          <Image
            source={{ uri: image }}
            className="h-24 w-32 object-cover rounded"
          />
        </TouchableOpacity>
      </Link>
      <View className="bg-gray-600 h-[1px] w-full mr-6 rounded-full"></View>
    </View>
  );
}
