const enhancer = require('./enhancer.js');
// test away!

describe('enhancer repairs',()=>{
    test('enhancer repair', ()=>{
        const item = {
            name: 'screen',
            //durability 0 to 100
            durability: 80,
            // enhancement 0 to 20
            enhancement: 15,
        }
        enhancer.repair(item);
        expect(item.durability).toBe(100);
    })
})