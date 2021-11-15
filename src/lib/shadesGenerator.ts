import {HslColor} from "./hslColor";

export const generateVariants = (hexColor: string): Object => {
  const defaultShade = HslColor.fromHex(hexColor)

  let variants: any = {}

  for (let i = 100; i <= 900; i += 100) {
    const currentIterationOffset = i === 900 ? 0 : (900 - i) / 10
    const calculatedLuminosity = currentIterationOffset + defaultShade.l % 10
    variants[i] = new HslColor(defaultShade.h, defaultShade.s, calculatedLuminosity).toString()
  }

  variants = { ...variants, DEFAULT: defaultShade.toString() }

  return variants
}