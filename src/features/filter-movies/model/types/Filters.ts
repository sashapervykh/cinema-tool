import type { StoreValue } from "effector";
import type { $filters } from "../stores/filters.store";

export type Filters = StoreValue<typeof $filters>;
