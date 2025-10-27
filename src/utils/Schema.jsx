import { email, string, z } from "zod";
const formSchema = z.object({
  name: string().min(2, {
    error: (iss) => {
      if (iss.code === "too_small") {
        return { message: "نام حداقل باید دو حرف داشته باشد" };
      }
    },
  }),
  lastName: string().min(2, {
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
    .min(5, {
      error: (iss) => {
        if (iss.code === "too_small") {
          return { message: "متن پیام حداقل باید شامل پنج حرف باشد" };
        }
      },
    }),
  agreeToTerms: z.literal(true, {
    error: () => ({
      message: "لطفا با شرایط موافقت کنید",
    }),
  }),
});
export default formSchema;
