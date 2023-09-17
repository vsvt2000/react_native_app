import { StyleProp, ViewStyle } from "react-native";

export type ClinicButtonProps = {
  onPress: () => void;
  style: StyleProp<ViewStyle>;
  disabled: boolean;
};
