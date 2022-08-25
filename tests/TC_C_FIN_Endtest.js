import { Selector } from 'testcafe';

fixture `End to End`

    .page `https://fi-uat.rsdelivers.com/cart`

    .meta({author: 'James Elrick', creationDate: '24/08/2022'});

  test('end to end Finland', async t => {
    
    await t

    .maximizeWindow()
    .wait(5000)

    //click add products
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.empty-basket-component_empty-basket-container__1PmWg > div.empty-basket-component_quick-add-card-container__3dn5v > div > div.empty-basket-component_buttons__1Tco3 > button:nth-child(1)'))
    //type 222222
    .typeText('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__2L8bw > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__3mM2a > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-footer__3tYmT.ps > div.quick-order-component_modal-contents-add-by-stock__1A0R4 > div:nth-child(2) > div.text-component-module_text-component__LnRMg.quick-order-component_product-stock-no__1fN57 > div > input', '222222')
    .wait(1000)
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__2L8bw > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__3mM2a > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-footer__3tYmT.ps > div.quick-order-component_modal-contents-add-by-stock__1A0R4 > div:nth-child(2) > div.number-component-module_number-component__12AC_.quick-order-component_qty__1a6Fp > div > input'))
    //add to basket
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__2L8bw > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__3mM2a > div.modal-component-module_footer__1XXnz.modal-component-module_sidebar-footer__3Lp5p > div > div > button.button-component-module_button-component__2jBKH.button-component-module_primary__1qgaJ.button-component-module_default__2A30a.quick-order-component_add-button__15ZwR'))
    //view basket
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__2L8bw > div > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_small__2Vhae.modal-component-module_slidedown__tzmxM.quick-order-component_added-items-container__87qQq > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.quick-order-component_modal-content__2VQj_ > div > button.button-component-module_button-component__2jBKH.button-component-module_primary__1qgaJ.button-component-module_default__2A30a'))
    .wait(4000)
    //click purchase
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__1j6Rc > div.basket-content-component_checkout-area__POgWx > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.summary-component_summary-container__1UsgF.card-component-module_white__2avgM > div > div.summary-component_checkout__BOGfr > button'))
    
    .wait(4000)

    //GUEST
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__1j6Rc > div.basket-content-component_checkout-area__POgWx > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.summary-component_summary-container__1UsgF.card-component-module_white__2avgM > div > div.sign-in-modal-component_sign-in-modal-container-wrapper__UahxF > div > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_small__2Vhae.modal-component-module_slidedown__tzmxM.sign-in-modal-component_sign-in-modal-container__2ScDv > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.sign-in-modal-component_modal-content__2PFbR > button:nth-child(8)'))

    //name
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.contact-details-component_contact-details-container__1ZwYH.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.contact-details-component_details__loAh1 > div:nth-child(1) > div > div > input', 'testName')
    //last
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.contact-details-component_contact-details-container__1ZwYH.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.contact-details-component_details__loAh1 > div:nth-child(2) > div > div > input', 'testNameLast')
    //email
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.contact-details-component_contact-details-container__1ZwYH.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.contact-details-component_details__loAh1 > div:nth-child(3) > div > div > input', 'RPlan.BSupport@rs-components.com')
    //phone
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.contact-details-component_contact-details-container__1ZwYH.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.contact-details-component_details__loAh1 > div:nth-child(4) > div > div > input', '0123456789')

    .wait(1000)
    //save
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.contact-details-component_contact-details-container__1ZwYH.card-component-module_padding__51wm7.card-component-module_white__2avgM > button'))

    .wait(2000)
    //COMP NAME
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div > div:nth-child(3) > div > div > input', 'RS COMP TEST')
    //COMP ADD
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div > div:nth-child(4) > div > div > input', 'TEST STREET')
    //POSTCODE
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div > div:nth-child(7) > div > div > div > input', '12345')
    //CITY
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div > div:nth-child(8) > div > div > input', 'testCity')
    //save
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > button'))

    //accept tnc
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.purchase-component_payment-type-card__3TYDh.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.purchase-component_payment-btn-area__31CK1 > div > div > label > span > span'),{offsetX: 4})

    .wait(1000)

    //next
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.purchase-component_payment-type-card__3TYDh.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.purchase-component_payment-btn-area__31CK1 > button'))


    //PAYMENT GATEWAY THINGS
    .wait(4000)
    //SELECT VISA
    .click(Selector('body > div > div.content.inner-page-wrapper > div:nth-child(3) > span'),{offsetX: 10, offsetY: 40})
    .wait(4000)
    //number
    .typeText('#cardNumber', '4153013999700024')
    //ex date
    .typeText('#expiry', '11/2023')
    //safe#
    .typeText('#cvv', '024')

    .wait(2000)

    //send it
    .click(Selector('#btn-row > div:nth-child(1) > button'))

    .wait(20000)
});