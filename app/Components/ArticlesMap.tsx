import { Link } from "expo-router";
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
          <View className="max-w-60 flex flex-col gap-4">
            <View className="flex-row gap-3 items-center">
              <Image
                source={{ uri: authorImg }}
                className="rounded-full size-8"
              />
              <Text className="text-white font-medium text-sm">{author}</Text>
            </View>
            <Text className="text-lg font-bold text-white leading-6">
              {title}
            </Text>
          </View>
          <Image
            source={{ uri: image }}
            className="h-16 w-24 object-cover rounded"
          />
        </TouchableOpacity>
      </Link>
      <View className="bg-gray-600 h-[1px] w-full mr-6 rounded-full"></View>
    </View>
  );
}
