import React from "react";
import { View } from 'react-native';

export default (entities, screen, layout) => {
    if (!entities || !screen || !layout) return null;
    return (
        // <View style={{ marginTop: offset > 100 ? 0 : -offset / 2 }}>
        <View style={{ marginTop: entities.camera.offsetY, marginLeft: -entities.camera.offsetX }}>
            {Object.keys(entities)
                .filter(key => entities[key].renderer)
                .map(key => {
                    let entity = entities[key];
                    if (typeof entity.renderer === "object")
                        return (
                            <entity.renderer.type
                                key={key}
                                screen={screen}
                                layout={layout}
                                {...entity}
                            />
                        );
                    else if (typeof entity.renderer === "function")
                        return (
                            <entity.renderer
                                key={key}
                                screen={screen}
                                layout={layout}
                                {...entity}
                            />
                        );
                })}
        </View>
    );
};
