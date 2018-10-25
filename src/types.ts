
import { types } from "mobx-state-tree";

export const TNullOrOptionalString = types.maybeNull(
    types.optional(types.string, "")
  );
  