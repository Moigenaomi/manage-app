import { useMutation,useQuery } from "convex/react";
import { v } from "convex/values";
import {api} from "../convex/_generated/api";
import { mutation, query} from "convex/server"
import type {MutationContext} from "convex/server";

export const useGroceries= () =>
    {
      const groceries = useQuery(api.groceries.getGroceries) ?? [];
      const addGrocery = useMutation(api.groceries.addGrocery);
      const updateGrocery = useMutation(api.groceries.updateGrocery);
      const deleteGrocery = useMutation(api.groceries.deleteGrocery);
    
      return { groceries, addGrocery, updateGrocery, deleteGrocery };
    };

export const addGrocery= mutation({
    args:{
        name: v.string(),
        quantity: v.number(),
        category: v.string(),

    },
    handler: async(ctx: MutationContext,{name,quantity,category}: {name:string,quantity:number,category:string}) =>{
        await ctx.db.insert("groceries",{
            name,
            quantity,
            category,
        });
    },
});
export const updateGroceries = mutation({
    args: {
         id: v.id("groceries"),
          quantity: v.number() 
        },
    handler: async (ctx: MutationContext, { id, quantity }: { id:string, quantity:number }) => {
      await ctx.db.patch(id, {quantity});
    },
  });
  
  export const deleteGroceries = mutation({
    args: {
         id: v.id("groceries") },
    handler: async (ctx:MutationContext, { id }:{ id: string}) => {
      await ctx.db.delete(id);
    },
  });

// fetch groceries
export const getGroceries = query(
{
    handler:async (ctx: MutationContext) =>{
        return await  ctx.db.query("groceries").collect();
    },
});