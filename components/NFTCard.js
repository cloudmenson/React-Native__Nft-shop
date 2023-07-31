import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { assets, COLORS, SHADOWS, SIZES } from "../constants";

import { Button } from "../components/Button";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

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

        <Button imgUrl={assets.heart} top={15} right={15} />
      </View>

      <SubInfo />
    </View>
  );
};

export { NFTCard };
