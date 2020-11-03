const { test, expect } = require('@jest/globals');
const enhancer = require('./enhancer.js');
// test away!



test("repair", () => {
    expect(enhancer.repair({
        name: "Ephemeral Tranquility",
        durability: 40,
        enhancement: 2,
    })).toEqual({
        name: "Ephemeral Tranquility",
        durability: 100,
        enhancement: 2,
    })
}) 

test("success",() => {
    expect(enhancer.success({
        name: "Ephemeral Tranquility",
        durability: 40,
        enhancement: 2,
    })).toEqual({
        name: "Ephemeral Tranquility",
        durability: 40,
        enhancement: 3,
    })

    expect(enhancer.success({
        name: "Ephemeral Tranquility",
        durability: 40,
        enhancement: 20,
    })).toEqual({
        name: "Ephemeral Tranquility",
        durability: 40,
        enhancement: 20,
    })
})

test("fail", () => {
    expect(enhancer.fail({
        name: "Ephemeral Tranquility",
        durability: 40,
        enhancement: 2,
    })).toEqual({
        name: "Ephemeral Tranquility",
        durability: 35,
        enhancement: 2,
    })

    expect(enhancer.fail({
        name: "Ephemeral Tranquility",
        durability: 40,
        enhancement: 15,
    })).toEqual({
        name: "Ephemeral Tranquility",
        durability: 30,
        enhancement: 15,
    })

    expect(enhancer.fail({
        name: "Ephemeral Tranquility",
        durability: 30,
        enhancement: 17,
    })).toEqual({
        name: "Ephemeral Tranquility",
        durability: 20,
        enhancement: 16,
    })
})


test("get", () => {
    expect(enhancer.get({
        name: "Ephemeral Tranquility",
        durability: 30,
        enhancement: 7,
    })).toEqual({
        name: "[+7] Ephemeral Tranquility",
        durability: 30,
        enhancement: 7,
    })
})

