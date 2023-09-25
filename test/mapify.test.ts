import Mapify from '../src';

type MyAlias = 'a' | 'b' | 'c';
type MyDeepType = {
    value: string;
};
type MySubType = {
    id: string;
    children: MyAlias[];
    subMap: Map<MyDeepType, number>;
};
type MyType = {
    id: string;
    children: MyType[];
    map1: Map<string, MyAlias>;
    map2: Map<MyAlias, string>;
    map3: Map<string, MySubType>;
    map4: Map<MySubType, string>;
};
const myTypeValue: MyType = {
    id: '#1',
    children: [
        {
            id: '#1.1',
            children: [],
            map1: new Map<string, MyAlias>([
                ['#A', 'a'],
                ['#B', 'b'],
                ['#C', 'c'],
            ]),
            map2: new Map<MyAlias, string>([
                ['a', '#A'],
                ['b', '#B'],
                ['c', '#C'],
            ]),
            map3: new Map<string, MySubType>([
                [
                    '#A',
                    {
                        id: '#A',
                        children: [],
                        subMap: new Map<MyDeepType, number>([
                            [{ value: 'X' }, 1],
                            [{ value: 'Y' }, 2],
                            [{ value: 'Z' }, 3],
                        ]),
                    },
                ],
                [
                    '#B',
                    {
                        id: '#B',
                        children: [],
                        subMap: new Map<MyDeepType, number>([
                            [{ value: 'X' }, 1],
                            [{ value: 'Y' }, 2],
                            [{ value: 'Z' }, 3],
                        ]),
                    },
                ],
                [
                    '#C',
                    {
                        id: '#C',
                        children: [],
                        subMap: new Map<MyDeepType, number>([
                            [{ value: 'X' }, 1],
                            [{ value: 'Y' }, 2],
                            [{ value: 'Z' }, 3],
                        ]),
                    },
                ],
            ]),
            map4: new Map<MySubType, string>([
                [
                    {
                        id: '#A',
                        children: [],
                        subMap: new Map<MyDeepType, number>([
                            [{ value: 'X' }, 1],
                            [{ value: 'Y' }, 2],
                            [{ value: 'Z' }, 3],
                        ]),
                    },
                    '#A',
                ],
                [
                    {
                        id: '#B',
                        children: [],
                        subMap: new Map<MyDeepType, number>([
                            [{ value: 'X' }, 1],
                            [{ value: 'Y' }, 2],
                            [{ value: 'Z' }, 3],
                        ]),
                    },
                    '#B',
                ],
                [
                    {
                        id: '#C',
                        children: [],
                        subMap: new Map<MyDeepType, number>([
                            [{ value: 'X' }, 1],
                            [{ value: 'Y' }, 2],
                            [{ value: 'Z' }, 3],
                        ]),
                    },
                    '#C',
                ],
            ]),
        },
        {
            id: '#1.2',
            children: [],
            map1: new Map<string, MyAlias>([
                ['#A', 'a'],
                ['#B', 'b'],
                ['#C', 'c'],
            ]),
            map2: new Map<MyAlias, string>([
                ['a', '#A'],
                ['b', '#B'],
                ['c', '#C'],
            ]),
            map3: new Map<string, MySubType>([
                [
                    '#A',
                    {
                        id: '#A',
                        children: [],
                        subMap: new Map<MyDeepType, number>([
                            [{ value: 'X' }, 1],
                            [{ value: 'Y' }, 2],
                            [{ value: 'Z' }, 3],
                        ]),
                    },
                ],
                [
                    '#B',
                    {
                        id: '#B',
                        children: [],
                        subMap: new Map<MyDeepType, number>([
                            [{ value: 'X' }, 1],
                            [{ value: 'Y' }, 2],
                            [{ value: 'Z' }, 3],
                        ]),
                    },
                ],
                [
                    '#C',
                    {
                        id: '#C',
                        children: [],
                        subMap: new Map<MyDeepType, number>([
                            [{ value: 'X' }, 1],
                            [{ value: 'Y' }, 2],
                            [{ value: 'Z' }, 3],
                        ]),
                    },
                ],
            ]),
            map4: new Map<MySubType, string>([
                [
                    {
                        id: '#A',
                        children: [],
                        subMap: new Map<MyDeepType, number>([
                            [{ value: 'X' }, 1],
                            [{ value: 'Y' }, 2],
                            [{ value: 'Z' }, 3],
                        ]),
                    },
                    '#A',
                ],
                [
                    {
                        id: '#B',
                        children: [],
                        subMap: new Map<MyDeepType, number>([
                            [{ value: 'X' }, 1],
                            [{ value: 'Y' }, 2],
                            [{ value: 'Z' }, 3],
                        ]),
                    },
                    '#B',
                ],
                [
                    {
                        id: '#C',
                        children: [],
                        subMap: new Map<MyDeepType, number>([
                            [{ value: 'X' }, 1],
                            [{ value: 'Y' }, 2],
                            [{ value: 'Z' }, 3],
                        ]),
                    },
                    '#C',
                ],
            ]),
        },
    ],
    map1: new Map<string, MyAlias>([
        ['#A', 'a'],
        ['#B', 'b'],
        ['#C', 'c'],
    ]),
    map2: new Map<MyAlias, string>([
        ['a', '#A'],
        ['b', '#B'],
        ['c', '#C'],
    ]),
    map3: new Map<string, MySubType>([
        [
            '#A',
            {
                id: '#A',
                children: [],
                subMap: new Map<MyDeepType, number>([
                    [{ value: 'X' }, 1],
                    [{ value: 'Y' }, 2],
                    [{ value: 'Z' }, 3],
                ]),
            },
        ],
        [
            '#B',
            {
                id: '#B',
                children: [],
                subMap: new Map<MyDeepType, number>([
                    [{ value: 'X' }, 1],
                    [{ value: 'Y' }, 2],
                    [{ value: 'Z' }, 3],
                ]),
            },
        ],
        [
            '#C',
            {
                id: '#C',
                children: [],
                subMap: new Map<MyDeepType, number>([
                    [{ value: 'X' }, 1],
                    [{ value: 'Y' }, 2],
                    [{ value: 'Z' }, 3],
                ]),
            },
        ],
    ]),
    map4: new Map<MySubType, string>([
        [
            {
                id: '#A',
                children: [],
                subMap: new Map<MyDeepType, number>([
                    [{ value: 'X' }, 1],
                    [{ value: 'Y' }, 2],
                    [{ value: 'Z' }, 3],
                ]),
            },
            '#A',
        ],
        [
            {
                id: '#B',
                children: [],
                subMap: new Map<MyDeepType, number>([
                    [{ value: 'X' }, 1],
                    [{ value: 'Y' }, 2],
                    [{ value: 'Z' }, 3],
                ]),
            },
            '#B',
        ],
        [
            {
                id: '#C',
                children: [],
                subMap: new Map<MyDeepType, number>([
                    [{ value: 'X' }, 1],
                    [{ value: 'Y' }, 2],
                    [{ value: 'Z' }, 3],
                ]),
            },
            '#C',
        ],
    ]),
};

test('test complex type', () => {
    const serializedObj = Mapify.serialize(myTypeValue);
    const serializedDeserializedObj = Mapify.serialize(
        Mapify.deserialize(serializedObj),
    );
    const jsonStringFromSerialized = JSON.stringify(serializedObj);
    const jsonStringFromSerializedDeserialized = JSON.stringify(
        serializedDeserializedObj,
    );
    expect(jsonStringFromSerialized).toEqual(
        jsonStringFromSerializedDeserialized,
    );
});
