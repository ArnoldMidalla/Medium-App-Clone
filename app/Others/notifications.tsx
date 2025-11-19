import { useRouter } from "expo-router";
import { ChevronLeft, Ellipsis, Play } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notifications() {
  const router = useRouter();
  function backBtn() {
    router.back();
  }
  return (
    <SafeAreaView className="bg-black flex-1">
      <View className="pt-5 pb-3 flex-row items-center justify-between mx-4">
        <TouchableOpacity
          className="rounded-lg w-12 h-12 flex justify-center items-center"
          onPress={backBtn}
        >
          <ChevronLeft color={"#7e7e7e"} size={30} />
        </TouchableOpacity>
        <Text className="text-white font-dmsansBold text-xl text-center">Notifications</Text>
        <TouchableOpacity
          className="rounded-lg w-12 h-12 flex justify-center items-center"
          // onPress={backBtn}
        >
          {/* <ChevronLeft color={"#7e7e7e"} size={30} /> */}
        </TouchableOpacity>
      </View>
      <Text className="text-white text-center font-dmsans py-16">There are no notifications here at the moment</Text>
    </SafeAreaView>
  );
}
