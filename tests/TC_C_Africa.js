import { Selector } from 'testcafe';

fixture `End to End`

    .page `https://africa-uat.rsdelivers.com/cart`

    .meta({author: 'James Elrick', creationDate: '12/09/2022'});

  test('Africa TEST', async t => {
    
    await t

    .maximizeWindow()
    .wait(5000)

    //click add products
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.empty-basket-component_empty-basket-container__1PmWg > div.empty-basket-component_quick-add-card-container__3dn5v > div > div.empty-basket-component_buttons__1Tco3 > button:nth-child(1)'))
    //type 222222
    .typeText('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__2L8bw > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__3mM2a > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-footer__3tYmT.ps > div.quick-order-component_modal-contents-add-by-stock__1A0R4 > div:nth-child(2) > div.text-component-module_text-component__LnRMg.quick-order-component_product-stock-no__1fN57 > div > input', '222222')
    .wait(1000)
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__2L8bw > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__3mM2a > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-footer__3tYmT.ps > div.quick-order-component_modal-contents-add-by-stock__1A0R4 > div:nth-child(2) > div.text-component-module_text-component__LnRMg.quick-order-component_qty__1a6Fp > div > input'))
    //add to basket
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__2L8bw > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__3mM2a > div.modal-component-module_footer__1XXnz.modal-component-module_sidebar-footer__3Lp5p > div > div > button.button-component-module_button-component__2jBKH.button-component-module_primary__1qgaJ.button-component-module_default__2A30a.quick-order-component_add-button__15ZwR'))
    //view basket
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__2L8bw > div > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_small__2Vhae.modal-component-module_slidedown__tzmxM.quick-order-component_added-items-container__87qQq > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.quick-order-component_modal-content__2VQj_ > div > button.button-component-module_button-component__2jBKH.button-component-module_primary__1qgaJ.button-component-module_default__2A30a'))
    .wait(4000)
    //click purchase
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__1j6Rc > div.basket-content-component_checkout-area__POgWx > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.summary-component_summary-container__1UsgF.card-component-module_white__2avgM > div > div.summary-component_checkout__BOGfr > button'))

    //pick countries
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__1j6Rc > div.modal-component-module_modal-component__2N4JX.delivery-modal-component_delivery-modal-container__3u4zW > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_fullscreen__3L_VI.delivery-modal-component_modal__1DCMq > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.delivery-modal-component_modal-contents__2WM7H > div > div.delivery-modal-component_dropdown-container___6yN7.delivery-modal-component_left__366s3 > div > div > div.dropdown-component-module_dropdown-wrapper___ub06 > div:nth-child(1) > div'))
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__1j6Rc > div.modal-component-module_modal-component__2N4JX.delivery-modal-component_delivery-modal-container__3u4zW > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_fullscreen__3L_VI.delivery-modal-component_modal__1DCMq > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.delivery-modal-component_modal-contents__2WM7H > div > div.delivery-modal-component_dropdown-container___6yN7.delivery-modal-component_left__366s3 > div > div > div.dropdown-component-module_dropdown-wrapper___ub06 > div:nth-child(1) > div > div > div > input', 'Angola')

    //delivery
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__1j6Rc > div.modal-component-module_modal-component__2N4JX.delivery-modal-component_delivery-modal-container__3u4zW > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_fullscreen__3L_VI.delivery-modal-component_modal__1DCMq > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.delivery-modal-component_modal-contents__2WM7H > div > div.delivery-modal-component_dropdown-container___6yN7.delivery-modal-component_right__2NVaE > div > div > div.dropdown-component-module_dropdown-wrapper___ub06 > div:nth-child(1) > div > div > p'))
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__1j6Rc > div.modal-component-module_modal-component__2N4JX.delivery-modal-component_delivery-modal-container__3u4zW > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_fullscreen__3L_VI.delivery-modal-component_modal__1DCMq > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.delivery-modal-component_modal-contents__2WM7H > div > div.delivery-modal-component_dropdown-container___6yN7.delivery-modal-component_right__2NVaE > div > div > div.dropdown-component-module_dropdown-wrapper___ub06 > div:nth-child(1) > div > div > div > input', 'Angola')
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__1j6Rc > div.modal-component-module_modal-component__2N4JX.delivery-modal-component_delivery-modal-container__3u4zW > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_fullscreen__3L_VI.delivery-modal-component_modal__1DCMq > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.delivery-modal-component_modal-contents__2WM7H > div > div.delivery-modal-component_dropdown-container___6yN7.delivery-modal-component_left__366s3 > p'))
    .wait(1000)


    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__1j6Rc > div.modal-component-module_modal-component__2N4JX.delivery-modal-component_delivery-modal-container__3u4zW > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_fullscreen__3L_VI.delivery-modal-component_modal__1DCMq.delivery-modal-component_options-visible__7J8Uj > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.delivery-modal-component_modal-contents__2WM7H > div.delivery-modal-component_options__2PZwI > button'))
    .wait(1000)
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__1j6Rc > div.basket-content-component_checkout-area__POgWx > div > div > div.summary-component_checkout__BOGfr > button'))
    //to purchase page
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__1j6Rc > div.basket-content-component_checkout-area__POgWx > div > div > div.sign-in-modal-component_sign-in-modal-container-wrapper__UahxF > div > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_small__2Vhae.modal-component-module_slidedown__tzmxM.sign-in-modal-component_sign-in-modal-container__2ScDv > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.sign-in-modal-component_modal-content__2PFbR > button:nth-child(8)'))
    .wait(3000)
    //name
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.contact-details-component_contact-details-container__1ZwYH.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.contact-details-component_details__loAh1 > div:nth-child(1) > div > div > input', 'Joel')
    //last
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.contact-details-component_contact-details-container__1ZwYH.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.contact-details-component_details__loAh1 > div:nth-child(2) > div > div > input', 'Pot')
    //email
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.contact-details-component_contact-details-container__1ZwYH.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.contact-details-component_details__loAh1 > div:nth-child(3) > div > div > input', 'RPlan.BSupport@rs-components.com')
    //phone
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.contact-details-component_contact-details-container__1ZwYH.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.contact-details-component_details__loAh1 > div:nth-child(4) > div > div > input', '01234567890')
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.contact-details-component_contact-details-container__1ZwYH.card-component-module_padding__51wm7.card-component-module_white__2avgM > button'))
    //first
    //.typeText('#root > div > div.page-content-wrapper > div > div > div.request-quote-component_request-quote-content__28kh1 > div.request-quote-component_request-quote-forms__uj4tE > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div > div:nth-child(1) > div > div > input', 'Joel')
    //last
    //.typeText('#root > div > div.page-content-wrapper > div > div > div.request-quote-component_request-quote-content__28kh1 > div.request-quote-component_request-quote-forms__uj4tE > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div > div:nth-child(2) > div > div > input', 'Pot')
    //comp name
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div > div:nth-child(3) > div > div > input', 'RS Components')
    //building
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div > div:nth-child(4) > div > div > input', 'Test')
    //street
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div > div:nth-child(5) > div > input', 'Test')
    //town
    .typeText('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div > div:nth-child(6) > div > input', 'Test')
    //state
    .scrollIntoView(Selector('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div > div.dropdown-component-module_dropdown-component__nCBiT.dropdown-component-module_grey__2rhbe > div.dropdown-component-module_dropdown-wrapper___ub06 > div:nth-child(1) > div > div > p'))
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div > div.dropdown-component-module_dropdown-component__nCBiT.dropdown-component-module_grey__2rhbe > div.dropdown-component-module_dropdown-wrapper___ub06 > div:nth-child(1) > div > div'))
    
    //.typeText('#root > div > div.page-content-wrapper > div > div > div.request-quote-component_request-quote-content__28kh1 > div.request-quote-component_request-quote-forms__uj4tE > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div > div.dropdown-component-module_dropdown-component__nCBiT.address-form-component_dropdown-invalid__1GTrL.dropdown-component-module_grey__2rhbe > div.dropdown-component-module_dropdown-wrapper___ub06 > div:nth-child(1) > div > div > div > input', 'AI Anbār')
    .click(Selector('#AO-BGO'))
    .wait(2000)
    //zip
    //.typeText('#root > div > div.page-content-wrapper > div > div > div.request-quote-component_request-quote-content__28kh1 > div.request-quote-component_request-quote-forms__uj4tE > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div > div.address-form-component_postcode__3dAxr > div > div > input', 'AZ1065')
    //request
    //.wait(3000)

    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.delivery-address-component_delivery-address-card__18eqQ.card-component-module_padding__51wm7.card-component-module_white__2avgM > button'))

    .scrollIntoView(Selector('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.purchase-component_payment-type-card__3TYDh.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.purchase-component_payment-btn-area__31CK1 > button'))
    .click(Selector('span').withText('Credit / Debit Card'))
    .wait(2000)
    //click pay now
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.purchase-component_payment-type-card__3TYDh.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.purchase-component_payment-btn-area__31CK1 > div > div > label > span > span'))
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.purchase-component_checkout-contents__2mxx9 > div.purchase-component_checkout-info__2uonT > div.card-component-module_card-component__1NA2E.card-component-module_card-radius__2eMqM.purchase-component_payment-type-card__3TYDh.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.purchase-component_payment-btn-area__31CK1 > button'))
    .wait(4000)


    ////////////////////////
    .switchToIframe(Selector('#root > div > div.page-content-wrapper > div > div > div.modal-component-module_modal-component__2N4JX.confirm-order-component_order-processing-content__3WYJI > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_fullscreen__3L_VI.confirm-order-component_order-processing__3E_Hf > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps.ps--active-y > iframe'))

    //select visa
    await t
    .wait(1000)
    .click(Selector('#payment-zone > form > table > tbody > tr:nth-child(3) > td:nth-child(3) > input'))
    //card number
    .typeText('#Ecom_Payment_Card_Number', '4111111111111111')
    //month
    .click(Selector('#Ecom_Payment_Card_ExpDate_Month'))
    .click(Selector('#Ecom_Payment_Card_ExpDate_Month > option:nth-child(10)'))
    //year
    .click(Selector('#Ecom_Payment_Card_ExpDate_Year'))
    .click(Selector('#Ecom_Payment_Card_ExpDate_Year > option:nth-child(2)'))
    //.typeText('#Ecom_Payment_Card_ExpDate_Year', '2022')
    //cvc
    .typeText('#Ecom_Payment_Card_Verification', '123')
    //confirm
    .scrollIntoView(Selector('#submit3'))
    .click(Selector('#submit3'))

    //check RSREF number on confirmation page
    .wait(1000)
    .switchToMainWindow()

    .wait(10000)

});