const enhancer = require('./enhancer.js');
// test away!

const item = {
    name: 'screen',
    //durability 0 to 100
    durability: 80,
    // enhancement 0 to 20
    enhancement: 15,
}

describe('enhancer repairs',()=>{
    test('enhancer repair', ()=>{
        enhancer.repair(item);
        expect(item.durability).toBe(100);
    })
})

describe('enhancer success method', ()=>{
    test('enhancement increased by 1', ()=>{
        enhancer.success(item)
        expect(item.durability).toBe(100);
        expect(item.enhancement).toBe(16);
        enhancer.success(item)
        expect(item.durability).toBe(100);
        expect(item.enhancement).toBe(17);
    })
})