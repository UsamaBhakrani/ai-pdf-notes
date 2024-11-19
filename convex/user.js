import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createUser = mutation({
  args: { email: v.string(), userName: v.string(), imageUrl: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((user) => user.eq(user.field("email"), args.email))
      .collect();

    if (user.length == 0) {
      const newUser = await ctx.db.insert("users", {
        email: args.email,
        userName: args.userName,
        imageUrl: args.imageUrl,
      });

      return newUser;
    }

    return "User Already exists";
  },
});
