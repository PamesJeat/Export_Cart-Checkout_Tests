import { Selector } from 'testcafe';

fixture `Stress Test`

    .page `https://export-uat.rsdelivers.com/cart`

    .meta({author: 'James Elrick', creationDate: '10/05/2022'});

  test('Stress Test', async t => {
    
    await t
    
    .wait(10000)

});