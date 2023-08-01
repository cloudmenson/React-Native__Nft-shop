import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";
import { CircleButton, RectButton } from "../components/Button";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        margin: SIZES.base,
        marginBottom: SIZES.extraLarge,
        borderRadius: SIZES.font,
        backgroundColor: COLORS.white,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          resizeMode="cover"
          source={data.image}
          style={{
            width: "100%",
            height: "105%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} top={15} right={15} />
      </View>

      <SubInfo />

      <View style={{ padding: SIZES.font, width: "100%" }}>
        <NFTTitle
          title={data.name}
          titleSize={SIZES.large}
          subtitle={data.creator}
          subtitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export { NFTCard };
