import { HslColor } from "../../../src/lib/hslColor";

describe('HslColor class', () => {
    it('can create an instance of an HSL color from an hex color', () => {
        const color = HslColor.fromHex('#1F2A6B')
        expect(color.h).toBe(231)
        expect(color.s).toBe(55)
        expect(color.l).toBe(27)
        expect(color.toString()).toBe('hsl(231,55%,27%)')
    })
})