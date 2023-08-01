import { View, Text, Image, TextInput } from "react-native";

import { assets, COLORS, SHADOWS, SIZES } from "../constants";

const HomeTitle = () => {
  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image  source={assets.logo} />
      </View>
    </View>
  );
};

export { HomeTitle };
