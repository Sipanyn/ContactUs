import { email, string, z } from "zod";
const formSchema = z.object({
  name: string()
    .nonempty("پر کردن این فیلد الزامی است")
    .regex(/^[\u0600-\u06FF\s]+$/, {
      message: "لطفا فقط از حروف فارسی استفاده کنید",
    })
    .min(2, {
      error: (iss) => {
        if (iss.code === "too_small") {
          return { message: "نام حداقل باید دو حرف داشته باشد" };
        }
      },
    }),

  lastName: string()
    .nonempty("پر کردن این فیلد الزامی است")
    .min(2, {
      error: (iss) => {
        if (iss.code === "too_small") {
          return { message: "نام خانوادگی حداقل باید دو حرف داشته باشد" };
        }
      },
    }),
  email: email("آدرس ایمیل را بصورت صحیح وارد نمایید"),
  types: z.enum(["پشتیبانی", "عمومی"], {
    error: "لطفا دسته بندی پیام خود را انتخاب کنید",
  }),
  message: string()
    .trim()
    .nonempty("لطفا پیام خود را وارد کنید")
    .min(5, "پیشنهاد میکنیم پیامتان را کامل تر کنید"),
  agreeToTerms: z.literal(true, {
    error: () => ({
      message: "لطفا با شرایط موافقت کنید",
    }),
  }),
});
export default formSchema;
