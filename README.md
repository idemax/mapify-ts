# Mapify

`Mapify` is a class that provides methods to serialize and deserialize objects supporting `Map`.

## Introduction & Usage

Native JSON package does not support `stringify` Map out of the box.

**Example:**

    const myMap = new Map();
    myMap.set('foo', 'bar');
    myMap.set('hello', 'world');
    console.log(JSON.stringify(myMap)); // {}

I believe this is not natively because is not not trivial make arbitrary key instance map in a prototype language.

**Example:**

    type MyType = {
        foo: string;
        hello: string;
    };
    const myMap = new Map<MyType, string>();
    myMap.set({ foo: 'bar', hello: 'world' }, 'foobar');
    console.log(JSON.stringify(myMap)); // {}

`Mapify` will serialize the map to a native javascript object. Also enables to deserialize the object back to a Map.

This native javascript object can be serialized to JSON using `stringify`. And can be deserialized back.

### Mapify.serialize

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

#### #1 console output

This is the raw output from terminal.

    > console.log(myMap);

    Map(1) { { foo: 'bar', hello: 'world' } => 'foobar' }

*Although it is not possible to stringify the map, it is possible to print it to the console.*

#### #2 console output

This is the output from terminal after `stringify` the map.

    > console.log(JSON.stringify(myMap));

    {}

*The `stringify` method does not support `Map` out of the box.*

#### #3 console output

This is the output from terminal after `Mapify.serialize` the map.

    > console.log(Mapify.serialize(myMap));
    
    {
        __map__: { '__map:0__': { foo: 'bar', hello: 'world' } },
        '__map:0__': 'foobar'
    }

*The `Mapify.serialize` method will serialize the map to a native javascript object mapping the keys to a `__map__` parent property.*

#### #4 console output

This is the output from terminal after `stringify` the output from `Mapify.serialize`.

    > console.log(JSON.stringify(Mapify.serialize(myMap)));

    {"__map__":{"__map:0__":{"foo":"bar","hello":"world"}},"__map:0__":"foobar"}

*The `stringify` method supports the output from `Mapify.serialize`.*

## Pre-requisites

- Node 16.20+
- NPM 8.19.4+

## Installation

    npm install @idemax/mapify

## Documentation

### Methods

#### serialize

Serialize a Map object to a native javascript object.

## Usage

    import { Mapify } from '@idemax/mapify';

    const myMap = new Map();
    myMap.set('foo', 'bar');
    myMap.set('hello', 'world');

    const mapify = new Mapify();
    const serialized = mapify.serialize(myMap);
    console.log(serialized); // {"foo":"bar","hello":"world"}

    const deserialized = mapify.deserialize(serialized);
    console.log(deserialized); // Map(2) { 'foo' => 'bar', 'hello' => 'world' }









---

https://pauloe-me.medium.com/typescript-npm-package-publishing-a-beginners-guide-40b95908e69c

https://howtodoinjava.com/typescript/maps/

npx ts-node main.ts