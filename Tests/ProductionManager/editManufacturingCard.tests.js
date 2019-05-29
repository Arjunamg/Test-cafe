import { Selector, t } from 'testcafe';

export default {
    editManufacturingCard: async (name) => {
        await t
            .click(Selector('td').withText(name))
            .click(Selector('.has-text-centered.check-box'))
            .click(Selector('.fas.fa-check'))
    },
}