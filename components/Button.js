import { TouchableOpacity, Image, Text } from "react-native";

import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";

const CircleButton = ({ imgUrl, handlePress, ...props }) => {
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
        alt="Image"
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export { CircleButton };

const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        padding: SIZES.small,
        minWidth: minWidth,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        ...props,
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: fontSize,
          textAlign: "center",
          fontFamily: FONTS.semiBold,
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

export { RectButton };
