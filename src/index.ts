import { Instance, types } from "mobx-state-tree";
import { createRecursiveModel } from "./createRecursiveModel";
import { TNullOrOptionalString } from "./types";

const SomeModel = types.model({
  id: TNullOrOptionalString,
  name: TNullOrOptionalString
});

interface ISomeModel extends Instance<typeof SomeModel> {}

// Recursive interface: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#3.11.8
interface IRecursiveSomeModel extends ISomeModel {
  me: IRecursiveSomeModel;
}

const RecursiveSomeModel = createRecursiveModel({
  modelName: "SomeModel",
  modelType: SomeModel
});

const store: IRecursiveSomeModel = RecursiveSomeModel.create();
store.me.me.me.me.me.id; // ok. id string | null
