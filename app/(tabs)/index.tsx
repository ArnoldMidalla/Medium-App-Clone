import { Link } from "expo-router";
import { Bell } from "lucide-react-native";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import ArticlesMap from "../Components/ArticlesMap";

const fakeData = [
  {
    id: 1001,
    title: "Why You Should Be Writing Your Code in Assembly: A Modern Revival",
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
  },
  {
    id: 1002,
    title: "The Silent Revolution: How Micro-Habits Beat Massive Goals",
    author: "Marcus Chen",
    publication: "In Personal Growth",
    date: "Sep 28",
    views: 145300,
    comments: 1205,
    subtitle:
      "Stop aiming for life-changing events. True, sustainable growth comes from the smallest, most consistent daily actions.",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImg:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1003,
    title: "5 Coffee Brewing Mistakes That Are Ruining Your Morning",
    author: "Aisha Khan",
    publication: "In Food & Drink",
    date: "Oct 31",
    views: 48900,
    comments: 351,
    subtitle:
      "From water temperature to grind consistency, small errors can destroy your expensive beans. Time to elevate your home brew.",
    image:
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImg:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1004,
    title: "Is the Metaverse Already Dead? What the Data Really Says",
    author: "The Tech Analyst",
    publication: "In FutureScape",
    date: "Aug 01",
    views: 88600,
    comments: 910,
    subtitle:
      "Monthly active users are dropping faster than anticipated. We analyze the investment vs. the adoption rate.",
    image:
      "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8fDA%3D",
    authorImg:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1005,
    title: "My Cat Taught Me Everything I Need to Know About Time Management",
    author: "Jeremy Fisher",
    publication: "In Life Lessons",
    date: "Dec 05, 2024",
    views: 12000,
    comments: 155,
    subtitle:
      "The secret to productivity isn't discipline—it's strategic napping and ruthless prioritization of sunbeams.",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImg:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1006,
    title:
      "Rust vs. Go: Which Language Will Dominate Backend Development in 2026?",
    author: "Lena Popova",
    publication: "In High-Performance Code",
    date: "May 19",
    views: 67400,
    comments: 599,
    subtitle:
      "A deep dive comparing memory safety, concurrency models, and community adoption for the two fastest-growing languages.",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImg:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1007,
    title:
      "Investing in 'Digital Land': A Scammer's Paradise or the Next Big Thing?",
    author: "Financial Frontier",
    publication: "In Cryptocurrency",
    date: "Jul 11",
    views: 92200,
    comments: 801,
    subtitle:
      "Before you drop thousands on a virtual plot, understand the highly volatile and unregulated nature of virtual real estate.",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImg:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1008,
    title: "The Power of a Blank Page: Overcoming Creative Paralysis",
    author: "Samantha Ray",
    publication: "In Writing Tips",
    date: "Oct 04",
    views: 33700,
    comments: 290,
    subtitle:
      "Learn three simple techniques to silence the inner critic and start producing content, even when inspiration is low.",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImg:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1009,
    title:
      "The Untold Story of the First Email Spam and Its Unintended Consequences",
    author: "Historical Hacking",
    publication: "In Internet History",
    date: "Apr 22",
    views: 19800,
    comments: 412,
    subtitle:
      "A single marketing message sent in 1978 changed the internet forever, paving the way for phishing and modern junk mail.",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImg:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1010,
    title:
      "How a Single Line of CSS Can Dramatically Boost Your Site's Performance",
    author: "WebDev Master",
    publication: "In Frontend Focus",
    date: "Sep 07",
    views: 55000,
    comments: 450,
    subtitle:
      "The little-known `content-visibility` property might be the easiest way to achieve near-instantaneous page loads.",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImg:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Featured() {
  return (
    <View className="flex-1">
      <ScrollView className="flex-1">
        {fakeData.map((fake) => (
          <ArticlesMap
            key={fake.id}
            title={fake.title}
            subtitle={fake.subtitle}
            author={fake.author}
            date={fake.date}
            views={fake.views}
            comments={fake.comments}
            image={fake.image}
            authorImg={fake.authorImg}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function ForYou() {
  return (
    <View className="">
      <Text>ForYou</Text>
    </View>
  );
}

const renderScene = SceneMap({
  first: Featured,
  second: ForYou,
});

const routes = [
  { key: "first", title: "Featured" },
  { key: "second", title: "For you" },
];

// the header title part
const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "white" }}
    style={{ backgroundColor: "black", width: 200 }}
  />
);

export default function index() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView className="bg-black flex-1">
      <View className="px-6 py-10 flex-row justify-between items-center">
        <Image
          source={require("@/assets/images/Medium-Wordmark-White.png")}
          // className="h-6 w-full"
          className="w-32 h-8 opacity-85"
          resizeMode="contain"
        />
        <Link href={"/Others/notifications"} asChild>
          <Bell color="#a6a6a6" />
        </Link>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </SafeAreaView>
  );
}
