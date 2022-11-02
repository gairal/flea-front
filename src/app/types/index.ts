import { FC, PropsWithChildren } from "react";

export * from "./directus";

export type FCWithChildren<P = unknown> = FC<PropsWithChildren<P>>;
export type Nullable<T> = T | null;
