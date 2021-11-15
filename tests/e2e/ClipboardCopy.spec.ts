describe('Clipboard', () => {
    it('can copy color object in clipboard', () => {
        const testInputColor = '#1F2A6B'
        const expectedText = '{\n' +
            '    100: "hsl(231,55%,87%)",\n' +
            '    200: "hsl(231,55%,77%)",\n' +
            '    300: "hsl(231,55%,67%)",\n' +
            '    400: "hsl(231,55%,57%)",\n' +
            '    500: "hsl(231,55%,47%)",\n' +
            '    600: "hsl(231,55%,37%)",\n' +
            '    700: "hsl(231,55%,27%)",\n' +
            '    800: "hsl(231,55%,17%)",\n' +
            '    900: "hsl(231,55%,7%)",\n' +
            '    DEFAULT: "hsl(231,55%,27%)"\n' +
            '}'

        cy.visit('/')
        cy.get('.color-input').type(testInputColor).then(() => {
            cy.get('#generate-button').click().then(() => {
                cy.get('.clipboard-copy').click().then(() => {
                    cy.window().then(win => {
                        win.navigator.clipboard.readText().then(clipboardText => {
                            cy.wrap(clipboardText).should('eq', expectedText)
                        })
                    })
                })
            })
        })


    })
})