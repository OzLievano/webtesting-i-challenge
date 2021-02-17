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

describe('fail method', ()=>{
    test('test durability decreasing',()=>{
        const underFifteen = item.durability - 5;
        const overFifteen = item.durability - 10;
        enhancer.fail(item);

        if(item.enhancer < 15){
            expect(item.durability).toBe(underFifteen);
        }else{
            expect(item.durability).toBe(overFifteen);
            expect(item.enhancement).toBe(16);
        }
        
    })
})

describe('get method', ()=>{
    test('test modified name',()=>{
        enhancer.get(item)
        expect(item.name).toBe('[+16]screen')
    })
})