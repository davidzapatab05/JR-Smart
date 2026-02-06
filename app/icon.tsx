import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "JR-Smart Service"
export const size = {
    width: 512,
    height: 512,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 240,
                    background: "#001A4D",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0033CC",
                    borderRadius: "128px",
                    border: "20px solid #E5E7EB",
                }}
            >
                <svg
                    width="400"
                    height="400"
                    viewBox="0 0 100 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M60 0 L15 55 L45 55 L10 120 L80 45 L50 45 L90 0 Z"
                        fill="#E5E7EB"
                    />
                </svg>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
