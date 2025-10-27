import { toast } from "react-toastify";
import styles from "./form-component.module.css";
import useReactHookForm from "../../utils/reactHookForm";

const FormComponent = () => {
  const { register, handleSubmit, errors, isSubmitting, reset } =
    useReactHookForm();
  const onSubmit = async (data) => {
    const notify = () => toast.success("پیام شما با موفقیت ارسال شد");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    notify();
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
      <h2 className={styles.form_title}>ارتباط با ما</h2>
      <div className={styles.inputs}>
        <div className={styles.firstname}>
          <label htmlFor="name">
            نام <span className={styles.star}>*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="سیپان"
          />
          <p className={styles.errorMessage}>{errors.name?.message}</p>
        </div>
        <div className={styles.lastname}>
          <label htmlFor="familyName">
            نام خانوادگی <span className={styles.star}>*</span>
          </label>
          <input
            {...register("lastName")}
            type="text"
            id="familyName"
            placeholder="یونان"
          />
          <p className={styles.errorMessage}>{errors.lastName?.message}</p>
        </div>
        <div className={styles.Emailaddress}>
          <label htmlFor="emailAddress">
            ایمیل <span className={styles.star}>*</span>
          </label>
          <input
            {...register("email")}
            type="text"
            id="emailAddress"
            placeholder="example@gmail.com"
          />
          <p className={styles.errorMessage}>{errors.email?.message}</p>
        </div>
        <div className={styles.questionType}>
          <p className={styles.questionType_title}>
            دسته بندی پیام<span className={styles.star}>*</span>
          </p>
          <p className={styles.errorMessage}>{errors.types?.message}</p>
          <div className={styles.types}>
            <label className={styles.type}>
              <input
                {...register("types")}
                type="radio"
                value="پشتیبانی"
                name="types"
              />
              <span>پشتیبانی</span>
            </label>

            <label className={styles.type}>
              <input
                {...register("types")}
                type="radio"
                value="عمومی"
                name="types"
              />
              <span>عمومی</span>
            </label>
          </div>
        </div>
        <div className={styles.message}>
          <label htmlFor="message">
            متن پیام <span className={styles.star}>*</span>
          </label>
          <p className={styles.errorMessage}>{errors.message?.message}</p>
          <textarea
            {...register("message")}
            id="message"
            rows={3}
            placeholder="ابهام یا سوال خود را بطور واضح اینجا بنویسید..."
          ></textarea>
        </div>
      </div>

      <div>
        <p className={styles.errorMessage}>{errors.agreeToTerms?.message}</p>
        <label className={styles.consent}>
          <input type="checkbox" id="consent" {...register("agreeToTerms")} />
          <p>
            {" "}
            جهت در ارتباط بودن با تیم رضایت کامل دارم
            <span className={styles.star}>*</span>
          </p>
        </label>
      </div>
      <button className={styles.submit_btn} type="submit">
        {isSubmitting ? "در حال ارسال 📨" : "ارسال"}
      </button>
    </form>
  );
};

export default FormComponent;
