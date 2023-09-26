# `Mapify`

`Mapify` is a class that provides methods to serialize and deserialize objects supporting `Map`.

---

## Introduction

Native JSON package does not support `stringify` Map out of the box.

**Example 1:**

    const myMap = new Map();
    myMap.set('foo', 'bar');
    myMap.set('hello', 'world');
    console.log(JSON.stringify(myMap)); // {}

**Example 2:**

    type MyType = {
        foo: string;
        hello: string;
    };
    const myMap = new Map<MyType, string>();
    myMap.set({ foo: 'bar', hello: 'world' }, 'foobar');
    console.log(JSON.stringify(myMap)); // {}

---

### What `Mapify` does?

`Mapify` will serialize the map to a native javascript object. Also enables to deserialize the object back to a Map.

This native javascript object can be serialized to JSON using `stringify`. And can be deserialized back.

*Examples:*

> You can store the serialized string in a database and deserialize it later.

> You can send the serialized string over the network and deserialize it on the other side.

Hope you enjoy it!

---

## Mapify.serialize

Serialize a Map object to a native javascript object.

*Example:*

    type MyType = {
        foo: string;
        hello: string;
    };

    const myMap = new Map<MyType, string>();

    myMap.set({ foo: 'bar', hello: 'world' }, 'foobar');

    console.log(myMap); // #1 console output
    console.log(JSON.stringify(myMap)); // #2 console output
    console.log(Mapify.serialize(myMap)); // #3 console output
    console.log(JSON.stringify(Mapify.serialize(myMap))); // #4 console output

Following the example above, the console output will be:

### #1 console output

This is the raw output from terminal.

    > console.log(myMap);

    Map(1) { { foo: 'bar', hello: 'world' } => 'foobar' }

*Although it is not possible to stringify the map, it is possible to print it to the console.*

### #2 console output

This is the output from terminal after `stringify` the map.

    > console.log(JSON.stringify(myMap));

    {}

*The `stringify` method does not support `Map` out of the box.*

### #3 console output

This is the output from terminal after `Mapify.serialize` the map.

    > console.log(Mapify.serialize(myMap));
    
    {
        __map__: { '__map:0__': { foo: 'bar', hello: 'world' } },
        '__map:0__': 'foobar'
    }

*The `Mapify.serialize` method will serialize the map to a native javascript object mapping the keys to a `__map__` parent property.*

### #4 console output

This is the output from terminal after `stringify` the output from `Mapify.serialize`.

    > console.log(JSON.stringify(Mapify.serialize(myMap)));

    {"__map__":{"__map:0__":{"foo":"bar","hello":"world"}},"__map:0__":"foobar"}

*The `stringify` method supports the output from `Mapify.serialize`.*

---

## Mapify.deserialize

Deserialize a native javascript object to a Map object.

*Example:*

    type MyType = {
        foo: string;
        hello: string;
    };

    const myMap = new Map<MyType, string>();
    myMap.set({ foo: 'bar', hello: 'world' }, 'foobar');

    const serialized = Mapify.serialize(myMap);
    const strSerialized = JSON.stringify(serialized);

    // -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

    // you can store the serialized string in a database
    // and deserialize it later

    // -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

    // you can send the serialized string over the network
    // and deserialize it on the other side

    // -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

    const jsonDeserialized = JSON.parse(strSerialized);
    const deserialized = Mapify.deserialize(jsonDeserialized);

    console.log(deserialized); // #1 console output

Following the example above, the console output will be:

### #1 console output

This is the output from terminal after `Mapify.deserialize` the object.

    > console.log(deserialized);

    Map(1) { { foo: 'bar', hello: 'world' } => 'foobar' }

*The `Mapify.deserialize` method will deserialize the native javascript object to a Map object.* 

## Pre-requisites

- Node 16.20+
- NPM 8.19.4+

## Installation

    npm install @idemax/mapify

---

## References

- https://pauloe-me.medium.com/typescript-npm-package-publishing-a-beginners-guide-40b95908e69c
- https://howtodoinjava.com/typescript/maps/

---

## Support me

You can support me listening to my music on all streaming platforms.

Check my Linktree https://linktr.ee/idemax for all links.

----

## Change log

### 0.0.1

- Initial release
- Serialize and deserialize Map objects
- Serialize and deserialize Map objects with custom keys
- Serialize and deserialize Map objects with custom values
- Serialize and deserialize Map objects with custom keys and values
- Serialize and deserialize Map objects with custom keys and values with nested Maps
- Serialize and deserialize Map objects with custom keys and values with nested Maps with custom keys and values