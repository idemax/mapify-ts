# `Mapify-ts`

`Mapify-ts` is a class that provides methods to serialize and deserialize objects supporting `Map`.

---

## Summary

- [`Mapify-ts`](#mapify-ts)
  - [Summary](#summary)
  - [Introduction](#introduction)
    - [What `Mapify-ts` does?](#what-mapify-ts-does)
  - [Mapify-ts.serialize](#mapify-tsserialize)
    - [#1 console output](#1-console-output)
    - [#2 console output](#2-console-output)
    - [#3 console output](#3-console-output)
    - [#4 console output](#4-console-output)
  - [Mapify-ts.deserialize](#mapify-tsdeserialize)
    - [#1 console output](#1-console-output-1)
  - [Pre-requisites](#pre-requisites)
  - [Installation](#installation)
    - [Import](#import)
  - [References](#references)
  - [Change log](#change-log)
    - [0.0.1](#001)
  - [Thanks for the help](#thanks-for-the-help)
  - [Contribute](#contribute)
  - [Support me](#support-me)

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

### What `Mapify-ts` does?

`Mapify-ts` will serialize the map to a native javascript object. Also enables to deserialize the object back to a Map.

This native javascript object can be serialized to JSON using `stringify`. And can be deserialized back.

*Examples:*

> You can store the serialized string in a database and deserialize it later.

> You can send the serialized string over the network and deserialize it on the other side.

Hope you enjoy it!

---

## Mapify-ts.serialize

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
    console.log(Mapify-ts.serialize(myMap)); // #3 console output
    console.log(JSON.stringify(Mapify-ts.serialize(myMap))); // #4 console output

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

This is the output from terminal after `Mapify-ts.serialize` the map.

    > console.log(Mapify-ts.serialize(myMap));
    
    {
        __map__: { '__map:0__': { foo: 'bar', hello: 'world' } },
        '__map:0__': 'foobar'
    }

*The `Mapify-ts.serialize` method will serialize the map to a native javascript object mapping the keys to a `__map__` parent property.*

### #4 console output

This is the output from terminal after `stringify` the output from `Mapify-ts.serialize`.

    > console.log(JSON.stringify(Mapify-ts.serialize(myMap)));

    {"__map__":{"__map:0__":{"foo":"bar","hello":"world"}},"__map:0__":"foobar"}

*The `stringify` method supports the output from `Mapify-ts.serialize`.*

---

## Mapify-ts.deserialize

Deserialize a native javascript object to a Map object.

*Example:*

    type MyType = {
        foo: string;
        hello: string;
    };

    const myMap = new Map<MyType, string>();
    myMap.set({ foo: 'bar', hello: 'world' }, 'foobar');

    const serialized = Mapify-ts.serialize(myMap);
    const strSerialized = JSON.stringify(serialized);

    // -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

    // you can store the serialized string in a database
    // and deserialize it later

    // -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

    // you can send the serialized string over the network
    // and deserialize it on the other side

    // -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

    const jsonDeserialized = JSON.parse(strSerialized);
    const deserialized = Mapify-ts.deserialize(jsonDeserialized);

    console.log(deserialized); // #1 console output

Following the example above, the console output will be:

### #1 console output

This is the output from terminal after `Mapify-ts.deserialize` the object.

    > console.log(deserialized);

    Map(1) { { foo: 'bar', hello: 'world' } => 'foobar' }

*The `Mapify-ts.deserialize` method will deserialize the native javascript object to a Map object.* 

## Pre-requisites

- Node 16.20+
- NPM 8.19.4+

## Installation

    npm i mapify-ts

### Import

    import MapifyTs from 'mapify-ts';

---

## References

- https://pauloe-me.medium.com/typescript-npm-package-publishing-a-beginners-guide-40b95908e69c
- https://howtodoinjava.com/typescript/maps/

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

---

## Thanks for the help

[@gustavoyasunaka](https://github.com/gustavoyasunaka)
[@RodrigoWebDev](https://github.com/RodrigoWebDev)

---

## Contribute

Feel free to contribute to this project. I will be happy to review your PRs.

## Support me

You can support me listening to my music on all streaming platforms.

Check my Linktree https://linktr.ee/idemax for all links.