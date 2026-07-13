import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#591f1f",
          color: "#b08d57",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 1,
          lineHeight: 1.15,
        }}
      >
        <div>TH</div>
        <div>SP</div>
      </div>
    ),
    { ...size },
  );
}
