import { toast } from "react-toastify";

const onSubmit = async (data) => {
  const notify = () => toast.success("پیام شما با موفقیت ارسال شد");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(data);
  notify();
};
export default onSubmit;
