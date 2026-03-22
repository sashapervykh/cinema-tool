import type { StoreValue } from "effector";
import type { $filters } from "../filters.store";

export type Filters = StoreValue<typeof $filters>;
