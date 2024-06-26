import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

export const GoogleIcon = (props) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fill="none">
      <Path
        d="M44.5 20H24v8.5h11.7c-1.6 4.8-6 8.5-11.7 8.5-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l6-6C33.3 5.2 28.9 3.5 24 3.5 12.4 3.5 3.5 12.4 3.5 24S12.4 44.5 24 44.5c10.5 0 19.2-7.4 21-17.5H44.5V20z"
        fill="#4285F4"
      />
      <Path
        d="M6.8 14.7l6.5 4.7C15.1 16.1 18.4 14 24 14c3.1 0 5.8 1.1 7.9 3l6-6C33.3 5.2 28.9 3.5 24 3.5 15.4 3.5 8.1 8.8 6.8 14.7z"
        fill="#34A853"
      />
      <Path
        d="M24 44.5c5.9 0 10.8-2 14.5-5.3l-6.8-5.5c-2 1.4-4.5 2.3-7.7 2.3-5.6 0-10.1-3.7-11.7-8.5L6.8 33.3c2.2 6 8.3 11.2 17.2 11.2z"
        fill="#FBBC05"
      />
      <Path
        d="M44.5 20H24v8.5h11.7c-.8 2.4-2.3 4.5-4.3 6l6.8 5.5C38.8 36.9 44.5 30.5 44.5 20z"
        fill="#EA4335"
      />
    </G>
  </Svg>
);