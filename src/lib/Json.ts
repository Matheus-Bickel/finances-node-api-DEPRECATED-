export type Json =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | Json[]
    | null

export interface JsonObject {
    [key: string]: Json
}

export interface JsonArray extends Array<Json> {}
