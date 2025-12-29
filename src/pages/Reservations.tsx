import { supabase } from "../lib/supabase";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    reservationInsertSchema,
    ReservationInsert,
} from "../schema/reservations.schema";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ja } from "date-fns/locale/ja";

const Reservations = () => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<ReservationInsert>({
        mode: "onBlur",
        reValidateMode: "onChange",
        resolver: zodResolver(reservationInsertSchema),
    });

    const onSubmit = async (data: ReservationInsert) => {
        const { message, ...rest } = data;

        const payload = {
            ...rest,
            ...(message ? { message } : {}),
            date: data.date.toISOString(),
        };

        const { error } = await supabase.from("reservations").insert([payload]);

        if (error) {
            console.error(error);
            alert("送信に失敗しました。");
            return;
        }

        alert("予約が完了しました！");
        reset();
    };

    return (
        <form
            className="form u-ptb"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            autoComplete="off"
        >
            <div className="l-container-xs">
                <div className="c-title02-wrap u-mb40">
                    <p className="c-title02-english">reservations</p>
                    <h1 className="c-title02">予約する</h1>
                </div>
                <div className="form-inner">
                    <div className="form-item">
                        <label className="form-label" htmlFor="input-name">
                            お名前
                            <span className="form-required">必須</span>
                        </label>
                        <input
                            id="input-name"
                            type="text"
                            placeholder="山田 太郎"
                            className="form-input"
                            autoComplete="off"
                            {...register("name")}
                        />
                        {errors.name && (
                            <p className="form-error">{errors.name.message}</p>
                        )}
                    </div>

                    <div className="form-item">
                        <label className="form-label" htmlFor="input-email">
                            メールアドレス
                            <span className="form-required">必須</span>
                        </label>
                        <input
                            id="input-email"
                            type="email"
                            placeholder="abc123@example.com"
                            className="form-input"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="form-error">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="form-item">
                        <label className="form-label" htmlFor="input-date">
                            相談の希望日時
                            <span className="form-required">必須</span>
                        </label>
                        <p className="form-note">
                            ※ 30~60分程度を予定しています。
                        </p>

                        <Controller
                            name="date"
                            control={control}
                            render={({ field }) => {
                                const selectedDate = field.value ?? null;

                                const minTime = selectedDate
                                    ? new Date(selectedDate)
                                    : new Date();
                                minTime.setHours(9, 0, 0);

                                const maxTime = selectedDate
                                    ? new Date(selectedDate)
                                    : new Date();
                                maxTime.setHours(18, 0, 0);

                                return (
                                    <DatePicker
                                        locale={ja}
                                        id="input-date"
                                        className="form-input"
                                        placeholderText="2026年01月01日 09:30"
                                        selected={selectedDate}
                                        onChange={(date) =>
                                            field.onChange(date)
                                        }
                                        showTimeSelect
                                        timeIntervals={30}
                                        dateFormat="yyyy年MM月dd日 HH:mm"
                                        timeFormat="HH:mm"
                                        minDate={new Date()}
                                        minTime={minTime}
                                        maxTime={maxTime}
                                    />
                                );
                            }}
                        />

                        {errors.date && (
                            <p className="form-error">{errors.date.message}</p>
                        )}
                    </div>

                    <div className="form-item">
                        <label className="form-label" htmlFor="input-message">
                            その他
                            <span className="form-any">任意</span>
                        </label>
                        <textarea
                            id="input-message"
                            placeholder="事前にお伝えしたい内容があれば、ご記入ください。"
                            className="form-textarea"
                            {...register("message")}
                        />
                    </div>

                    <button className="c-button" type="submit">
                        申し込む
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Reservations;
