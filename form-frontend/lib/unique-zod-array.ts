import z from "zod";

export function uniqueArray<
  ArrSchema extends z.ZodArray<z.ZodTypeAny, "many">,
  UniqueVal
>(
  uniqueBy: (item: z.infer<ArrSchema>[number]) => UniqueVal,
  schema: ArrSchema
) {
  return schema.superRefine((items, ctx) => {
    const seen = new Set<UniqueVal>();
    for (const [i, item] of items.entries()) {
      const val = uniqueBy(item);
      if (seen.has(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: JSON.stringify({ duplicate: val }),
          path: [i],
        });
      } else {
        seen.add(val);
      }
    }
  });
}
