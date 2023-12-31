/**
 * Mapify is a class that provides methods to serialize and deserialize objects supporting Map.
 */
export default class MapifyTs {
    /**
     * Serializes an object supporting Map.
     *
     * @param objSource Any object to be serialized.
     * @returns A serialized object.
     */
    static serialize = (objSource: any): string => {
        if (objSource instanceof Map) {
            const jsonObject: any = {};
            let mapIndex = 0;
            for (const [key, value] of objSource) {
                let newKey = key;
                if (typeof key === 'object' && key !== null) {
                    const mapKey = `__map:${mapIndex++}__`;
                    jsonObject.__map__ = jsonObject.__map__ || {};
                    jsonObject.__map__[mapKey] = MapifyTs.serialize(newKey);
                    newKey = mapKey;
                }
                jsonObject[newKey] = MapifyTs.serialize(value);
            }
            return jsonObject;
        } else if (Array.isArray(objSource)) {
            const jsonObject: any = [];
            objSource.forEach((value) =>
                jsonObject.push(MapifyTs.serialize(value)),
            );
            return jsonObject;
        } else if (typeof objSource === 'object' && objSource !== null) {
            const jsonObject: any = {};
            for (const [key, value] of Object.entries(objSource))
                jsonObject[key] = MapifyTs.serialize(value);
            return jsonObject;
        } else {
            return objSource;
        }
    };
    /**
     * Deserializes an object supporting Map.
     *
     * @param objSource Any object to be deserialized.
     * @returns A deserialized object.
     */
    static deserialize = (objSource: any): any => {
        if (Array.isArray(objSource)) {
            return objSource.map((value) => MapifyTs.deserialize(value));
        } else if (typeof objSource === 'object' && objSource !== null) {
            if (objSource.__map__) {
                const map = new Map();
                for (const mapKey of Object.keys(objSource.__map__)) {
                    const mapKeyValue = MapifyTs.deserialize(
                        objSource.__map__[mapKey],
                    );
                    const mapValue = MapifyTs.deserialize(objSource[mapKey]);
                    map.set(mapKeyValue, mapValue);
                }
                return map;
            } else {
                const jsonObject: any = {};
                for (const [key, value] of Object.entries(objSource))
                    jsonObject[key] = MapifyTs.deserialize(value);
                return jsonObject;
            }
        } else {
            return objSource;
        }
    };
}
