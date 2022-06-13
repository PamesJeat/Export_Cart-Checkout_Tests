import { Selector } from 'testcafe';

var PDP_Price = ""
var PDP_Price_VAT = ""
var Cart_Price = ""
var Cart_Total_Price = ""
var Delivery_Charge = ""
var tax = 0.18



fixture `Export Price Caclulation Test`

    .page `https://mt-uat.rsdelivers.com`

    .meta({author: 'James Elrick', creationDate: '23/03/2022'});

  test('Price Test', async t => {
    
    await t

    .maximizeWindow()
    .wait(5000)

    //type 222222 into the search bar
    .typeText('#root > div > header > div.card-component-module_card-component__1NA2E.page-content.header-menu-component_header-card__3KF4p.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div.header-menu-component_nav-bar__1Ur-s.row > div > div.header-menu-component_search-container__2w18I > div > div > input','7336775')
    //click search button
    .click(Selector('#root > div > header > div.card-component-module_card-component__1NA2E.page-content.header-menu-component_header-card__3KF4p.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div.header-menu-component_nav-bar__1Ur-s.row > div > div.header-menu-component_search-container__2w18I > button.button-component-module_button-component__2jBKH.button-component-module_primary__1qgaJ.button-component-module_default__2A30a.button-component-module_icon-button__1V2c6.header-menu-component_search-button__2DV1A'))

    //assign price
    PDP_Price = await Selector('#root > div > div.page-content-wrapper > div > div > div.product-detail-page-component_product-body__3lzP- > div.inner-page-wrapper.product-detail-page-component_top-area__Q_xIX > div.product-detail-page-component_price-area-wrapper__30jWb > div > div > div.product-detail-page-component_price-wrapper__1bM8S > div > div.card-component-module_card-component__1NA2E.price-area-component_pricing-container__18_s6.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.add-to-basket-cta-component_add-to-basket-cta__3eQT1 > div.add-to-basket-cta-component_price-details__1z8xh > div.add-to-basket-cta-component_price-line__3YCK8 > div.add-to-basket-cta-component_price-block__1agRR.add-to-basket-cta-component_selected__16Kso > div > div > p').textContent;
    //assign price with vat
    PDP_Price_VAT = await Selector('#root > div > div.page-content-wrapper > div > div > div.product-detail-page-component_product-body__3lzP- > div.inner-page-wrapper.product-detail-page-component_top-area__Q_xIX > div.product-detail-page-component_price-area-wrapper__30jWb > div > div > div.product-detail-page-component_price-wrapper__1bM8S > div > div.card-component-module_card-component__1NA2E.price-area-component_pricing-container__18_s6.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.add-to-basket-cta-component_add-to-basket-cta__3eQT1 > div.add-to-basket-cta-component_price-details__1z8xh > div.add-to-basket-cta-component_price-line__3YCK8 > div:nth-child(2) > div > div > p').textContent;
     //add to cart
    await t
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div.product-detail-page-component_product-body__3lzP- > div.inner-page-wrapper.product-detail-page-component_top-area__Q_xIX > div.product-detail-page-component_price-area-wrapper__30jWb > div > div > div.product-detail-page-component_price-wrapper__1bM8S > div > div.card-component-module_card-component__1NA2E.price-area-component_pricing-container__18_s6.card-component-module_padding__51wm7.card-component-module_white__2avgM > div.add-to-basket-cta-component_add-to-basket-cta__3eQT1 > div.add-to-basket-cta-component_cta-area-wrapper__26iyM > div > button'))

    //nav to new basket
    .wait(5000)
    .navigateTo('https://mt-uat.rsdelivers.com/cart')
    .wait(5000)

    //get delivery amount
    Delivery_Charge = await Selector("#\\31 10002 > label > span > div > div > div.delivery-options-component_title-container__1ojk9 > span:nth-child(2) > b").textContent;
    console.log("del char: " + Delivery_Charge.substring(2,7));
    //check PDP and cart price
    await t
    .expect(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__YRH8T > div.basket-content-component_products-area__1FaQu > div > div > div > div > div.product-item-component_product-stock-info__1_0Y_ > div.product-item-component_cost-container__1Ak5F > div.product-item-component_display-cost__2ToHd > span').textContent).contains(`${PDP_Price}`)
    //check cart total
    .expect(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__YRH8T > div.basket-content-component_checkout-area__ZxF96 > div > div > div.summary-component_summary__2zuUH > div:nth-child(2) > span.summary-component_cost__v2zJ4').textContent).contains(`${PDP_Price}`)
    //check vat
    .expect(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__YRH8T > div.basket-content-component_checkout-area__ZxF96 > div > div > div.summary-component_summary__2zuUH > div:nth-child(4) > span.summary-component_cost__v2zJ4').textContent).contains((`${PDP_Price}`.substring(2,7)*tax).toFixed(2))
    //check total
    .expect(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__YRH8T > div.basket-content-component_checkout-area__ZxF96 > div > div > div.summary-component_summary__2zuUH > div:nth-child(5) > span.summary-component_cost__v2zJ4').textContent).contains("€ "+(Number(`${PDP_Price}`.substring(2,7)*tax.toFixed(2)) + Number(`${PDP_Price}`.substring(2,7)) + Number(Delivery_Charge.substring(2,7))).toFixed(2))
   
    console.log("PDP Price: " + PDP_Price);
    console.log("PDP Price w/ VAT: " + PDP_Price_VAT);
    console.log("Cart VAT: €" + (`${PDP_Price}`.substring(2,7)*tax).toFixed(2));
    console.log("Cart Total + VAT: " + "€ "+(Number(`${PDP_Price}`.substring(2,7)*tax.toFixed(2)) + Number(`${PDP_Price}`.substring(2,7)) + Number(Delivery_Charge.substring(2,7))).toFixed(2));
    
    await t
    .click(Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__YRH8T > div.basket-content-component_checkout-area__ZxF96 > div > div > div.summary-component_checkout__iKTw4 > button'))

    .wait(1000)
});