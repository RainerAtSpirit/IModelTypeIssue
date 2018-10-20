import * as React from "react";
import { render } from "react-dom";
import { getSnapshot, types } from "mobx-state-tree";

const SomeModel = types.model({
  id: types.number
});

const createSomeStore = <P extends ModelProperties, O, C, S, T>(
  modelType: IModelType<P, O, C, S, T>
) => {
  const someStore = types
    .model({
      array: types.array(modelType)
    })
    .views(self => ({
      get arrayGetter() {
        return self.array;
      }
    }));

  return someStore;
};

const store = createSomeStore(SomeModel).create();
const a = store.array[0]!.id; // ok, id is number
const b = store.arrayGetter[0]!.id; // OK, id is number
