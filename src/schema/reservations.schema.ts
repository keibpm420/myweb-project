import { z } from "zod";

export const reservationInsertSchema = z.object({
    name: z.string().nonempty({ message: "名前は必須です" }),
    email: z.email({ message: "メールアドレスの形式が正しくありません" }),
    date: z.date({
        message: "日付は必須です",
    }),
    message: z.string().nullable().optional(),
});

export type ReservationInsert = z.infer<typeof reservationInsertSchema>;

export const reservationSchema = reservationInsertSchema.extend({
    id: z.uuid(),
    created_at: z.string(),
});

export type Reservation = {
    id: string;
    name: string;
    email: string;
    date: string;
    message: string | null;
    status: string;
};
