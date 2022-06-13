import { Selector } from 'testcafe';

fixture `Cart - Test Top Elements`

    .page `https://mt-uat.rsdelivers.com/cart`

    .meta({author: 'James Elrick', creationDate: '16/05/2022'});

  test('Test Top Elements', async t => {
    
    await t

    //maximize window and wait for clt
    .maximizeWindow()
    .wait(5000)

    //click add by stock number
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.empty-basket-component_empty-basket-container__1QjqW > div.empty-basket-component_quick-add-card-container__1xysO > div > div.empty-basket-component_buttons__1x7IU > div:nth-child(1) > button'))

    //add 222-222 to the basket
    .typeText('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__3VTuG > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__2Ugi0 > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-footer__3tYmT.ps > div.quick-order-component_modal-contents-add-by-stock__22ETN > div:nth-child(2) > div.text-component-module_text-component__LnRMg.quick-order-component_product-stock-no__7P1yU > div > input', '222222')
    .typeText('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__3VTuG > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__2Ugi0 > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-footer__3tYmT.ps > div.quick-order-component_modal-contents-add-by-stock__22ETN > div:nth-child(2) > div.number-component-module_number-component__12AC_.quick-order-component_qty__A34Cn > div > input', '1')

    //click add to cart
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__3VTuG > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__2Ugi0 > div.modal-component-module_footer__1XXnz.modal-component-module_sidebar-footer__3Lp5p > div > div > button.button-component-module_button-component__2jBKH.button-component-module_primary__1qgaJ.button-component-module_default__2A30a.quick-order-component_add-button___HS7D'))

    //click view basket
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__3VTuG > div > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_small__2Vhae.modal-component-module_slidedown__tzmxM.quick-order-component_added-items-container__1siIl > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.quick-order-component_modal-content__aYGyc > div > button.button-component-module_button-component__2jBKH.button-component-module_primary__1qgaJ.button-component-module_default__2A30a'))

    //check 222-222 has been added
    .expect(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__YRH8T > div.basket-content-component_products-area__1FaQu > div > div > div > div > div.product-item-component_product-details__vRhiC > div > div:nth-child(1) > span').textContent).contains("RS Stock No. 222-222")

    //check top elements
        //remove all items
            .expect(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-header-component_basket-header-container__3z9SY > div.basket-header-component_button-group__noBVa > button:nth-child(1)').textContent).contains('Remove all items')
        //Print as quote
            .expect(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-header-component_basket-header-container__3z9SY > div.basket-header-component_button-group__noBVa > button:nth-child(2)').textContent).contains('Print as a quote')
        //download basket
            .expect(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-header-component_basket-header-container__3z9SY > div.basket-header-component_button-group__noBVa > div > button').textContent).contains('Download basket')
        //save as list
            .expect(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-header-component_basket-header-container__3z9SY > div.basket-header-component_button-group__noBVa > button:nth-child(4)').textContent).contains('Save as list')
        //add by stock number
            .expect(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-header-component_basket-header-container__3z9SY > div.basket-header-component_button-group__noBVa > button:nth-child(5)').textContent).contains('Add by stock number')
        //add products in bulk
            .expect(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-header-component_basket-header-container__3z9SY > div.basket-header-component_button-group__noBVa > button:nth-child(6)').textContent).contains('Add products in bulk')


    /////////////////////////
    //TEST CHECKED ELEMENTS//
    /////////////////////////

    //click remove all items
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-header-component_basket-header-container__3z9SY > div.basket-header-component_button-group__noBVa > button:nth-child(1)'))
            //add prodcut back to cart
                .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.empty-basket-component_empty-basket-container__1QjqW > div.empty-basket-component_quick-add-card-container__1xysO > div > div.empty-basket-component_buttons__1x7IU > div:nth-child(1) > button'))
                .typeText('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__3VTuG > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__2Ugi0 > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-footer__3tYmT.ps > div.quick-order-component_modal-contents-add-by-stock__22ETN > div:nth-child(2) > div.text-component-module_text-component__LnRMg.quick-order-component_product-stock-no__7P1yU > div > input', '222222')
                .typeText('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__3VTuG > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__2Ugi0 > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-footer__3tYmT.ps > div.quick-order-component_modal-contents-add-by-stock__22ETN > div:nth-child(2) > div.number-component-module_number-component__12AC_.quick-order-component_qty__A34Cn > div > input', '1')
                .click(Selector('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__3VTuG > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__2Ugi0 > div.modal-component-module_footer__1XXnz.modal-component-module_sidebar-footer__3Lp5p > div > div > button.button-component-module_button-component__2jBKH.button-component-module_primary__1qgaJ.button-component-module_default__2A30a.quick-order-component_add-button___HS7D'))
                .click(Selector('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__3VTuG > div > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_small__2Vhae.modal-component-module_slidedown__tzmxM.quick-order-component_added-items-container__1siIl > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.quick-order-component_modal-content__aYGyc > div > button.button-component-module_button-component__2jBKH.button-component-module_primary__1qgaJ.button-component-module_default__2A30a'))

    //click Print as quote
    //TODO: add print as quote test functionality
    //click download basket
    //TODO: add download basket test functionality
    //click Save as list
        //.click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-header-component_basket-header-container__3z9SY > div.basket-header-component_button-group__noBVa > button:nth-child(4)'))
        //.click(Selector('#root > div > div.page-content-wrapper > div > div > div.sign-in-modal-component_sign-in-modal-container-wrapper__UahxF > div > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_small__2Vhae.modal-component-module_slidedown__tzmxM.sign-in-modal-component_sign-in-modal-container__2ScDv > div.modal-component-module_header__1wh2y.sign-in-modal-component_header__2L_yz > div.modal-component-module_close-icon__1vHB4 > svg'))

    //test add product by stock number
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-header-component_basket-header-container__3z9SY > div.basket-header-component_button-group__noBVa > button:nth-child(5)'))
            //add 222-222 to the basket
            .typeText('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__3VTuG > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__2Ugi0 > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-footer__3tYmT.ps > div.quick-order-component_modal-contents-add-by-stock__22ETN > div:nth-child(2) > div.text-component-module_text-component__LnRMg.quick-order-component_product-stock-no__7P1yU > div > input', '212121')
            .typeText('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__3VTuG > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__2Ugi0 > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-footer__3tYmT.ps > div.quick-order-component_modal-contents-add-by-stock__22ETN > div:nth-child(2) > div.number-component-module_number-component__12AC_.quick-order-component_qty__A34Cn > div > input', '1')
            //click add to cart
            .click(Selector('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__3VTuG > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__2Ugi0 > div.modal-component-module_footer__1XXnz.modal-component-module_sidebar-footer__3Lp5p > div > div > button.button-component-module_button-component__2jBKH.button-component-module_primary__1qgaJ.button-component-module_default__2A30a.quick-order-component_add-button___HS7D'))
             //click view basket
            .click(Selector('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__3VTuG > div > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_small__2Vhae.modal-component-module_slidedown__tzmxM.quick-order-component_added-items-container__1siIl > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.quick-order-component_modal-content__aYGyc > div > button.button-component-module_button-component__2jBKH.button-component-module_primary__1qgaJ.button-component-module_default__2A30a'))
    
    //test add products in bulk
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-header-component_basket-header-container__3z9SY > div.basket-header-component_button-group__noBVa > button:nth-child(6)'))
            .typeText('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__3VTuG > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__2Ugi0 > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-footer__3tYmT.ps > div.quick-order-component_modal-contents-add-by-bulk__2ttlg > div.text-area-component-module_text-area-component__MJYac.quick-order-component_bulk-text-area__3hmgn > div > textarea', "234-1676, 2")
            .click(Selector('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__3VTuG > div > div.modal-component-module_modal__2tFYw.modal-component-module_sidebar__kphQw.modal-component-module_fullscreen__3L_VI.quick-order-component_add-items-container__2Ugi0 > div.modal-component-module_footer__1XXnz.modal-component-module_sidebar-footer__3Lp5p > div > div > button.button-component-module_button-component__2jBKH.button-component-module_primary__1qgaJ.button-component-module_default__2A30a.quick-order-component_add-button___HS7D'))
            .click(Selector('#root > div > div.page-content-wrapper > div > div > div.quick-order-component_quick-order-container__3VTuG > div > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_small__2Vhae.modal-component-module_slidedown__tzmxM.quick-order-component_added-items-container__1siIl > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.quick-order-component_modal-content__aYGyc > div > button.button-component-module_button-component__2jBKH.button-component-module_primary__1qgaJ.button-component-module_default__2A30a'))
    .wait(5000)
});