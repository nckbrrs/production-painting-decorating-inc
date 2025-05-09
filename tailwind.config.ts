import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { withUt } from "uploadthing/tw";

export default withUt({
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)", ...fontFamily.sans]
			},
			colors: {
				black: "#212121",
				bone: "#f9f7f3",
				destructive: "hsl(0 100% 50%)",
				"destructive-foreground": "hsl(210 40% 98%)"
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"33%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				loop: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" }
				}
			},
			animation: {
				fadeIn: "fadeIn 1s ease-in",
				infiniteSliderLoop: "loop 20s linear infinite"
			},
			backgroundImage: {
				fadeToBoneOnSides:
					"linear-gradient(90deg, var(--bone), transparent 30%, transparent 70%, var(--bone))"
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
}) satisfies Config;
