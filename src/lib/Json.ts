export type Json =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | Json[]
    | null
    | undefined
    | any
export interface JsonObject {
    [key: string]: Json
}

export interface JsonArray extends Array<Json> {}
