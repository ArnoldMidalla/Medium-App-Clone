import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const router = useRouter();
  // function backBtn() {
  //   router.back();
  // }
  return (
    <SafeAreaView className="bg-black flex-1">
      <View className="pt-5 pb-3 flex-row items-center justify-between mx-4">
        <TouchableOpacity
          className="rounded-lg w-12 h-12 flex justify-center items-center"
          // onPress={backBtn}
          onPress={() => router.back()}
        >
          <ChevronLeft color={"#7e7e7e"} size={30} />
        </TouchableOpacity>
        {/* <View className="flex-row gap-4">
          <TouchableOpacity className="rounded-lg w-12 h-12 flex justify-center items-center">
            <Play color={"#7e7e7e"} size={22} />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-lg w-12 h-12 flex justify-center items-center">
            <Ellipsis color={"#7e7e7e"} />
          </TouchableOpacity>
        </View> */}
      </View>
      <View>
        <TextInput
          placeholder="Search for an article"
          className="px-4 py-2 font-dmsans bg-grey-900"
        />
        {/* <SearchBar/> */}
      </View>
    </SafeAreaView>
  );
}
