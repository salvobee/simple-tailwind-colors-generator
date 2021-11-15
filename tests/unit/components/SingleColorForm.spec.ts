import { mount } from '@vue/test-utils'
import SingleColorForm from '../../../src/components/SingleColorForm.vue'

describe('SingleColorForm', () => {
    it('can display tailwind color object from a single hex color', async () => {
        const wrapper = mount(SingleColorForm)

        const colorInput = wrapper.find('[data-user-color]')
        await colorInput.setValue('1F2A6B')

        const generateButton = wrapper.find('#generate-button')
        await generateButton.trigger('click')

        const generatedShades = wrapper.find('[data-generated-shades]').element as HTMLInputElement

        expect(generatedShades.value).toEqual("{\n" +
            "    100: \"hsl(231,55%,87%)\",\n" +
            "    200: \"hsl(231,55%,77%)\",\n" +
            "    300: \"hsl(231,55%,67%)\",\n" +
            "    400: \"hsl(231,55%,57%)\",\n" +
            "    500: \"hsl(231,55%,47%)\",\n" +
            "    600: \"hsl(231,55%,37%)\",\n" +
            "    700: \"hsl(231,55%,27%)\",\n" +
            "    800: \"hsl(231,55%,17%)\",\n" +
            "    900: \"hsl(231,55%,7%)\",\n" +
            "    DEFAULT: \"hsl(231,55%,27%)\"\n" +
            "}"
        )

        expect(wrapper.find('.error-invalid-color').exists()).toBe(false)
    })

    it('can display an error when an invalid color is provided', async () => {
        const wrapper = mount(SingleColorForm)

        expect(wrapper.find('.error-invalid-color').exists()).toBe(false)

        const foundInput = wrapper.find('[data-user-color]')
        await foundInput.setValue('Invalid Color')

        const generateButton = wrapper.find('#generate-button')
        await generateButton.trigger('click')

        expect(wrapper.find('.error-invalid-color').exists()).toBe(true)
    })
})