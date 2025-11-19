import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ArticleMapProps {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  views: number;
  comments: number;
}

export default function ArticlesMap({
  title,
  subtitle,
  author,
  date,
  views,
  comments,
}: ArticleMapProps) {
  return (
    <Link href={"/(tabs)"} asChild>
    <TouchableOpacity className="w-full p-4 mb-3 rounded-lg">
      <Text className="text-white text-lg font-bold">{title}</Text>
      <Text className="text-gray-400 text-sm mt-1">{subtitle}</Text>
      <Text className="text-gray-500 text-xs mt-2">
        {author} • {date} • {views.toLocaleString()} views • {comments} comments
      </Text>
    </TouchableOpacity>
    </Link>
  );
}
