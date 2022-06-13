import { Selector } from 'testcafe';

var PDP_Price = ''
var PLP_Price = ''
var PLP_PDP_Price = ''

var cartPrice = ''
var cartVAT = .20
var cartDelivery = ''
var cartTotal = ''

var rand = Math.floor(Math.random() * 3) + 1

var AddType = 'None'

fixture `Export End2End Test`

    .page `https://export-uat.rsdelivers.com`

    .meta({author: 'James Elrick', creationDate: '13/06/2022'});

  test('End To End test', async t => {

    console.log(rand);
    rand = 1;
    await t
    .wait(10000)
    //maximize window and wait for clt
    .maximizeWindow()
    .wait(5000)

//TYPE / SEARCH ADD TEST
    if(rand === 1){
        AddType = 'Search'
        console.log('Add to cart variant: ' + AddType);
        await t
        //type 222-222 into search
        .typeText('#root > div > header > div.card-component-module_card-component__1NA2E.page-content.header-menu-component_header-card__3KF4p.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div.header-menu-component_nav-bar__1Ur-s.row > div > div.header-menu-component_search-container__2w18I > div > div > input', '222222')
        //click search
        .click(Selector('#root > div > header > div.card-component-module_card-component__1NA2E.page-content.header-menu-component_header-card__3KF4p.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div.header-menu-component_nav-bar__1Ur-s.row > div > div.header-menu-component_search-container__2w18I > button.button-component-module_button-component__2jBKH.button-component-module_primary__1qgaJ.button-component-module_default__2A30a.button-component-module_icon-button__1V2c6.header-menu-component_search-button__2DV1A'))
        //get PDP price
        PDP_Price = await Selector('#root > div > div.page-content-wrapper > div > div > div.product-detail-page-component_product-body__3lzP- > div.inner-page-wrapper.product-detail-page-component_top-area__Q_xIX > div.product-detail-page-component_price-area-wrapper__30jWb > div > div > div.product-detail-page-component_price-wrapper__1bM8S > div > div.card-component-module_card-component__1NA2E.price-area-component_pricing-container__18_s6.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div.add-to-basket-cta-component_price-details__1z8xh > div.add-to-basket-cta-component_price-line__3YCK8 > div > div > div > p').textContent;
        PDP_Price = PDP_Price.substring(2,7)
        console.log('Price: ' + PDP_Price);
        await t
        //click add to cart
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div.product-detail-page-component_product-body__3lzP- > div.inner-page-wrapper.product-detail-page-component_top-area__Q_xIX > div.product-detail-page-component_price-area-wrapper__30jWb > div > div > div.product-detail-page-component_price-wrapper__1bM8S > div > div.card-component-module_card-component__1NA2E.price-area-component_pricing-container__18_s6.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div:nth-child(3) > div > button'))
        //click continue
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div.product-detail-page-component_product-body__3lzP- > div.inner-page-wrapper.product-detail-page-component_top-area__Q_xIX > div.product-detail-page-component_price-area-wrapper__30jWb > div > div > div.product-detail-page-component_price-wrapper__1bM8S > div > div.modal-component-module_modal-component__2N4JX > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_small__2Vhae.modal-component-module_slidedown__tzmxM.confirmation-modal-component_confirmation-modal__1-fgv > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.confirmation-modal-component_content__1qkkY > div.confirmation-modal-component_footer__1Udj2 > button'))
        //back to homepage - REMOVE ME 
        .click(Selector('#root > div > header > div.card-component-module_card-component__1NA2E.page-content.header-menu-component_header-card__3KF4p.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div.header-menu-component_nav-bar__1Ur-s.row > a > svg'))
    }else if(rand === 2){
//#####################################################
    //PRODUCT TREE / SELECT ADD TEST (PLP)
        AddType = 'PLP ONLY'
        console.log('Add to cart variant: ' + AddType);
        await t
        .wait(500)
        //click hamburger menu
        .click(Selector('#root > div > header > div.card-component-module_card-component__1NA2E.page-content.header-menu-component_header-card__3KF4p.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div.header-menu-component_nav-bar__1Ur-s.row > div > div.column.header-menu-component_icon-button__2n1dO.header-menu-component_menu__3ZcCa > svg'))
        .wait(500)
        //select drop down
        .click(Selector('a').withText('Electrical, Automation & Cables'))
        //click HVAC, fans, & Thermal management
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div.category-list-page-component_content__2nThs > div > div.category-list-page-component_child-categories__35IF5 > div > a:nth-child(5) > div > div.level-children-component_details__2TMQT > p'))
        //click Air Conditioning & Heating Accessories
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div.category-list-page-component_content__2nThs > div > div.category-list-page-component_child-categories__35IF5 > div > a:nth-child(2) > div > div.level-children-component_details__2TMQT > p'))
        //click Damper Actuators
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div.category-list-page-component_content__2nThs > div > div.category-list-page-component_child-categories__35IF5 > div > a:nth-child(1) > div > div.level-children-component_details__2TMQT > p'))
        //Assign Price from PLP
        PLP_Price = await Selector('#root > div > div.page-content-wrapper > div > div > div.product-list-page-component_content__1hXsq > div.product-list-page-component_products__3cMpz > div.list-view-component_lview-container__3ixB3 > div.list-view-component_products__1lBEK.list-view-component_grid__dpcSl > div:nth-child(1) > div > div.list-product-card-component_pricing__18J_8 > div.list-product-card-component_block__3eABl.list-product-card-component_price-block__23H2A > div.list-product-card-component_price-line__1jt-t > div > p').textContent;
        PLP_Price = PLP_Price.substring(2,7)
        console.log('Price: ' + PLP_Price);
        await t
        //add product to basket from PLP
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div.product-list-page-component_content__1hXsq > div.product-list-page-component_products__3cMpz > div.list-view-component_lview-container__3ixB3 > div.list-view-component_products__1lBEK.list-view-component_grid__dpcSl > div:nth-child(1) > div > div.list-product-card-component_pricing__18J_8 > div.list-product-card-component_block__3eABl.list-product-card-component_cta-area__36NgU > button'))
        //continue shopping
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div.modal-component-module_modal-component__2N4JX > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_small__2Vhae.modal-component-module_slidedown__tzmxM.confirmation-modal-component_confirmation-modal__1-fgv > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.confirmation-modal-component_content__1qkkY > div.confirmation-modal-component_footer__1Udj2 > button'))
        //back to homepage - REMOVE ME 
        .click(Selector('#root > div > header > div.card-component-module_card-component__1NA2E.page-content.header-menu-component_header-card__3KF4p.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div.header-menu-component_nav-bar__1Ur-s.row > a > svg'))
    }else if(rand === 3){
//#####################################################
//PRODUCT TREE / SELECT ADD TEST (PLP > PDP)
        AddType = 'PLP > PDP'
        console.log('Add to cart variant: ' + AddType);
        await t
        .wait(500)
        //click hamburger menu
        .click(Selector('#root > div > header > div.card-component-module_card-component__1NA2E.page-content.header-menu-component_header-card__3KF4p.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div.header-menu-component_nav-bar__1Ur-s.row > div > div.column.header-menu-component_icon-button__2n1dO.header-menu-component_menu__3ZcCa > svg'))
        .wait(500)
        //select drop down
        .click(Selector('a').withText('Electrical, Automation & Cables'))
        //click HVAC, fans, & Thermal management
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div.category-list-page-component_content__2nThs > div > div.category-list-page-component_child-categories__35IF5 > div > a:nth-child(5) > div > div.level-children-component_details__2TMQT > p'))
        //click Air Conditioning & Heating Accessories
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div.category-list-page-component_content__2nThs > div > div.category-list-page-component_child-categories__35IF5 > div > a:nth-child(2) > div > div.level-children-component_details__2TMQT > p'))
        //click Damper Actuators
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div.category-list-page-component_content__2nThs > div > div.category-list-page-component_child-categories__35IF5 > div > a:nth-child(1) > div > div.level-children-component_details__2TMQT > p'))
        //Click to PDP
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div.product-list-page-component_content__1hXsq > div.product-list-page-component_products__3cMpz > div.list-view-component_lview-container__3ixB3 > div.list-view-component_products__1lBEK.list-view-component_grid__dpcSl > div:nth-child(1) > div > div.list-product-card-component_info__RJu34 > div > div.list-product-card-component_title-area__2QfUp > a.snippet.list-product-card-component_title__MWqBG'))
        PLP_PDP_Price = await Selector('#root > div > div.page-content-wrapper > div > div > div.product-detail-page-component_product-body__3lzP- > div.inner-page-wrapper.product-detail-page-component_top-area__Q_xIX > div.product-detail-page-component_price-area-wrapper__30jWb > div > div > div.product-detail-page-component_price-wrapper__1bM8S > div > div.card-component-module_card-component__1NA2E.price-area-component_pricing-container__18_s6.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div.add-to-basket-cta-component_price-details__1z8xh > div.add-to-basket-cta-component_price-line__3YCK8 > div > div > div > p').textContent;
        PLP_PDP_Price = PLP_PDP_Price.substring(2,7);
        console.log('Price: ' + PLP_PDP_Price);
        await t
        //add to basket
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div.product-detail-page-component_product-body__3lzP- > div.inner-page-wrapper.product-detail-page-component_top-area__Q_xIX > div.product-detail-page-component_price-area-wrapper__30jWb > div > div > div.product-detail-page-component_price-wrapper__1bM8S > div > div.card-component-module_card-component__1NA2E.price-area-component_pricing-container__18_s6.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div:nth-child(3) > div > button'))
        //Continue shopping
        .click(Selector('#root > div > div.page-content-wrapper > div > div > div.product-detail-page-component_product-body__3lzP- > div.inner-page-wrapper.product-detail-page-component_top-area__Q_xIX > div.product-detail-page-component_price-area-wrapper__30jWb > div > div > div.product-detail-page-component_price-wrapper__1bM8S > div > div.modal-component-module_modal-component__2N4JX > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_small__2Vhae.modal-component-module_slidedown__tzmxM.confirmation-modal-component_confirmation-modal__1-fgv > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.confirmation-modal-component_content__1qkkY > div.confirmation-modal-component_footer__1Udj2 > button'))
        //back to homepage - REMOVE ME 
        .click(Selector('#root > div > header > div.card-component-module_card-component__1NA2E.page-content.header-menu-component_header-card__3KF4p.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div.header-menu-component_nav-bar__1Ur-s.row > a > svg'))
    }else{
        console.log('rand returned a wrong value');
    }
//#####################################################

//TODO: add checkout logic
//BASKET / CHECKOUT LOGIC
    await t
    //nav to basket
    .navigateTo('https://export-uat.rsdelivers.com/cart')
    .wait(5000)

    //check prices / stock number
    cartPrice = await Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__YRH8T > div.basket-content-component_products-area__1FaQu > div > div > div > div > div.product-item-component_product-stock-info__1_0Y_ > div.product-item-component_cost-container__1Ak5F > div.product-item-component_display-cost__2ToHd > span').textContent;
    cartPrice = cartPrice.substring(2,7);

    //take cart total (incl delivery / VAT)
    cartTotal = await Selector('#root > div > div.page-content-wrapper > div > div > div > div.basket-content-component_basket-content-container__YRH8T > div.basket-content-component_checkout-area__ZxF96 > div > div > div.summary-component_summary__2zuUH > div:nth-child(5) > span.summary-component_cost__v2zJ4').textContent;
    cartTotal = cartTotal.substring(2,7);
//FIX: don't forget about the round down calculation
    if(rand === 1){
        if(PDP_Price === cartPrice){
            console.log('PDP Price: ' + PDP_Price + "  |  " + 'Cart Price: ' + cartPrice)
            console.log('Cart Total: ' + (cartPrice * cartVAT) + cartDelivery)

            //FIX: add expect for cart total here
            //FIX: Check cart total vs PDP total vs cart total w/ delivery and vat

        }else{
            //bad stuff here
        }
    }else if (rand === 2){
        if(PLP_Price === cartPrice){
            //suc stuff here
        }else{
            //bad stuff here
        }
    }else if (rand === 3){
        if(PLP_PDP_Price === cartPrice){
            //suc stuff here
        }else{
            //bad stuff here
        }
    }else{
        //catch all bad
    }
    

//TODO: add CMS check


});