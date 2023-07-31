import { View, Text, Image } from "react-native";

import { assets, SIZES, COLORS, SHADOWS, FONTS } from "../constants";

export const NFTTitle = () => {
  return (
    <View>
      <Text>NFTTitle</Text>
    </View>
  );
};

export const EthPrice = () => {
  return (
    <View>
      <Text>EthPrice</Text>
    </View>
  );
};

export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        marginLeft: index === 0 ? 0 : -SIZES.font,
        width: 48,
        height: 48,
      }}
    />
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
        )
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "50%",
        backgroundColor: COLORS.white,
        elevation: 1,
        ...SHADOWS.light,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending In
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        12h 30m
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        padding: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
