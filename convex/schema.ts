import {defineSchema, defineTable} from "convex/server";
import {v} from "convex/values";

export default defineSchema({
    groceries: defineTable(
        {
            name: v.string(),
            quantity: v.number(),
            category: v.string(),
         }),
});