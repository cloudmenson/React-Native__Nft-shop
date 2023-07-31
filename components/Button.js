import { TouchableOpacity, Image } from "react-native";

import { assets, COLORS, SHADOWS, SIZES } from "../constants";

const Button = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        position: "absolute",
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
    >
      <Image
        alt="Heart"
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export { Button };
