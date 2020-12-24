/// <reference types="Cypress" />
/* eslint-disable */

describe("Layout projection", () => {
    it("Correctly projects DOM elements", () => {
        cy.visit("cypress/tests/index.html")
            .wait(50)
            .get("#test")
            .should(($test) => {
                const element = $test[0]
                const {
                    left,
                    top,
                    bottom,
                    right,
                } = element.getBoundingClientRect()

                expect(left).to.equal(200)
                expect(top).to.equal(200)
                expect(right).to.equal(400)
                expect(bottom).to.equal(500)
            })
            .get("#absolute-child")
            .should(($test) => {
                const element = $test[0]
                const {
                    left,
                    top,
                    bottom,
                    right,
                } = element.getBoundingClientRect()

                expect(left).to.equal(200)
                expect(top).to.equal(300)
                expect(right).to.equal(800)
                expect(bottom).to.equal(330)
            })
            .get("#relative-child")
            .should(($test) => {
                const element = $test[0]
                const {
                    left,
                    top,
                    bottom,
                    right,
                } = element.getBoundingClientRect()

                expect(left).to.equal(210)
                expect(top).to.equal(210)
                expect(right).to.equal(310)
                expect(bottom).to.equal(310)
            })
    })
})
