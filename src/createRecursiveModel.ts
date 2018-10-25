import { types, IAnyModelType } from "mobx-state-tree";

interface ICreateRecursiveModel<IT> {
  modelName: string;
  modelType: IT;
}

export const createRecursiveModel = <IT extends IAnyModelType>({
  modelName,
  modelType
}: ICreateRecursiveModel<IT>) => {
  const someStore = types.compose(
    modelName,
    modelType,
    types.model({
      // do good things here
      me: types.maybe(types.late((): IAnyModelType => modelType))
    })
  );

  return someStore;
};
