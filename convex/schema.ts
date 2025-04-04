import {defineSchema, defineTable} from "convex/server";
import {v} from "convex/values";

export default defineSchema({
    // users collections
    users: defineTable({
        id: v.string(),
        username: v.string(),
        email: v.string(),
        password: v.string(),
        preferences: v.optional(v.object({ theme: v.string(), notifications: v.boolean() })),
    createdAt: v.number(),
  }).index("by_email", ["email"]),

  //grocery items collection
    groceries: defineTable(
        {
            name: v.string(),
            quantity: v.number(),
            category: v.string(),
            price: v.number(),
            expiryDate: v.optional(v.number()), // Timestamp
            storageLocation: v.optional(v.string()), // "Fridge", "Pantry", "Freezer"
            userId: v.id("users"), // Reference to userp
            createdAt: v.number(),
  }).index("by_user", ["userId"]),
        
        // category collection
     categories: defineTable({
            id: v.string(),
            name: v.string(),
            userId: v.id("users"), // Reference to user
            createdAt: v.number(),
  }).index("by_user", ["userId"]),
  // Shopping List collection
  shoppingLists: defineTable({
    userId: v.id("users"),
    items: v.array(
      v.object({
        itemId: v.id("groceryItems"),
        quantity: v.union(v.number(), v.string()),
      })
    ),
    estimatedBudget: v.optional(v.number()),
    status: v.union(v.literal("pending"), v.literal("completed")),
    createdAt: v.number(),
  }).index("by_user", ["userId"]),

  // Inventory Management
  inventory: defineTable({
    userId: v.id("users"),
    itemId: v.id("groceryItems"),
    quantity: v.union(v.number(), v.string()),
    lastUpdated: v.number(),
  }).index("by_user", ["userId"]),

  // Recipes Collection
  recipes: defineTable({
    userId: v.id("users"),
    name: v.string(),
    ingredients: v.array(
      v.object({
        itemId: v.id("groceryItems"),
        quantity: v.union(v.number(), v.string()),
      })
    ),
    instructions: v.array(v.string()),
    createdAt: v.number(),
  }).index("by_user", ["userId"]),

  // Purchase Tracking
  purchases: defineTable({
    userId: v.id("users"),
    items: v.array(
      v.object({
        itemId: v.id("groceryItems"),
        quantity: v.union(v.number(), v.string()),
        cost: v.number(),
      })
    ),
    store: v.optional(v.string()), // Store name
    purchaseDate: v.number(),
  }).index("by_user", ["userId"]),

  // Waste Tracking
  wasteTracking: defineTable({
    userId: v.id("users"),
    itemId: v.id("groceryItems"),
    quantity: v.union(v.number(), v.string()),
    reason: v.string(), // "Expired", "Spoiled", "Unused"
    recordedAt: v.number(),
  }).index("by_user", ["userId"]),

  // Notifications
  notifications: defineTable({
    userId: v.id("users"),
    message: v.string(),
    type: v.string(), // "expiry", "low stock", "shopping"
    read: v.boolean(),
    createdAt: v.number(),
  }).index("by_user", ["userId"]),
});