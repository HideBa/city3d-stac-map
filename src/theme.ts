import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body": {
      fontFamily: "body",
    },
    // Custom scrollbar for dark theme
    "::-webkit-scrollbar": {
      width: "6px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: "rgba(255,255,255,0.15)",
      borderRadius: "3px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "rgba(255,255,255,0.25)",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: '"DM Sans Variable", "DM Sans", sans-serif' },
        body: { value: '"DM Sans Variable", "DM Sans", sans-serif' },
        mono: { value: '"JetBrains Mono", "Fira Code", monospace' },
      },
      colors: {
        accent: {
          50: { value: "#FFF7ED" },
          100: { value: "#FFEDD5" },
          200: { value: "#FED7AA" },
          300: { value: "#FDBA74" },
          400: { value: "#FB923C" },
          500: { value: "#F97316" },
          600: { value: "#EA580C" },
          700: { value: "#C2410C" },
          800: { value: "#9A3412" },
          900: { value: "#7C2D12" },
          950: { value: "#431407" },
        },
        navy: {
          50: { value: "#E6EDF3" },
          100: { value: "#C9D5E0" },
          200: { value: "#8B9EB2" },
          300: { value: "#7D8590" },
          400: { value: "#545D68" },
          500: { value: "#30363D" },
          600: { value: "#21262D" },
          700: { value: "#1C2333" },
          800: { value: "#161B22" },
          900: { value: "#0D1117" },
          950: { value: "#010409" },
        },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: "{colors.white}", _dark: "{colors.navy.900}" },
          },
          muted: {
            value: {
              _light: "{colors.gray.50}",
              _dark: "rgba(22, 27, 34, 0.85)",
            },
          },
          subtle: {
            value: {
              _light: "{colors.gray.100}",
              _dark: "rgba(28, 35, 51, 0.7)",
            },
          },
          emphasized: {
            value: {
              _light: "{colors.gray.200}",
              _dark: "{colors.navy.600}",
            },
          },
          panel: {
            value: {
              _light: "rgba(255, 255, 255, 0.9)",
              _dark: "rgba(22, 27, 34, 0.82)",
            },
          },
        },
        fg: {
          DEFAULT: {
            value: {
              _light: "{colors.gray.900}",
              _dark: "{colors.navy.50}",
            },
          },
          muted: {
            value: {
              _light: "{colors.gray.600}",
              _dark: "{colors.navy.300}",
            },
          },
          subtle: {
            value: {
              _light: "{colors.gray.400}",
              _dark: "{colors.navy.400}",
            },
          },
        },
        border: {
          DEFAULT: {
            value: {
              _light: "{colors.gray.200}",
              _dark: "rgba(255, 255, 255, 0.08)",
            },
          },
          subtle: {
            value: {
              _light: "{colors.gray.100}",
              _dark: "rgba(255, 255, 255, 0.06)",
            },
          },
          emphasized: {
            value: {
              _light: "{colors.gray.300}",
              _dark: "rgba(255, 255, 255, 0.12)",
            },
          },
        },
        colorPalette: {
          solid: {
            value: {
              _light: "{colors.accent.500}",
              _dark: "{colors.accent.500}",
            },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
