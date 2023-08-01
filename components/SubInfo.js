import { View, Text, Image } from "react-native";

import { assets, SIZES, COLORS, SHADOWS, FONTS } from "../constants";

export const NFTTitle = ({ title, titleSize, subtitle, subtitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: titleSize,
          color: COLORS.primary,
          fontFamily: FONTS.semiBold,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          paddingTop: 5,
          fontSize: subtitleSize,
          color: COLORS.primary,
          fontFamily: FONTS.regular,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ marginRight: 2, width: 20, height: 20 }}
      />
      <Text
        style={{
          color: COLORS.primary,
          fontSize: SIZES.font,
          fontFamily: FONTS.medium,
        }}
      >
        {price}
      </Text>
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
