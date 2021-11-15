import * as generator from "../../../src/lib/shadesGenerator";

describe('useShadesGenerator', () => {
    it('can generate tailwind variants from an hexadecimal value', () => {
        const variants = generator.generateVariants('#1F2A6B')
        expect(variants).toStrictEqual({
            DEFAULT: 'hsl(231,55%,27%)',
            900: 'hsl(231,55%,7%)',
            800: 'hsl(231,55%,17%)',
            700: 'hsl(231,55%,27%)',
            600: 'hsl(231,55%,37%)',
            500: 'hsl(231,55%,47%)',
            400: 'hsl(231,55%,57%)',
            300: 'hsl(231,55%,67%)',
            200: 'hsl(231,55%,77%)',
            100: 'hsl(231,55%,87%)',
        })

    })
})