import styles from "./form-component.module.css";

const FormComponent = () => {
  return (
    <form className={styles.form_container}>
      <h2 className={styles.form_title}>ارتباط با ما</h2>
      <div className={styles.inputs}>
        <div className={styles.firstname}>
          <label htmlFor="name">
            نام <span className={styles.star}>*</span>
          </label>
          <input type="text" id="name" placeholder="سیپان" />
        </div>
        <div className={styles.lastname}>
          <label htmlFor="familyName">
            نام خانوادگی <span className={styles.star}>*</span>
          </label>
          <input type="text" id="familyName" placeholder="یونان" />
        </div>
        <div className={styles.Emailaddress}>
          <label htmlFor="emailAddress">
            ایمیل <span className={styles.star}>*</span>
          </label>
          <input
            type="text"
            id="emailAddress"
            placeholder="example@gmail.com"
          />
        </div>
        <div className={styles.questionType}>
          <p>
            نوع سوال<span className={styles.star}>*</span>
          </p>
          <div className={styles.types}>
            <label className={styles.type}>
              <input type="radio" name="question_type" defaultChecked />
              <span>پشتیبانی</span>
            </label>

            <label className={styles.type}>
              <input type="radio" name="question_type" />
              <span>عمومی</span>
            </label>
          </div>
        </div>
        <div className={styles.message}>
          <label htmlFor="message">
            متن پیام <span className={styles.star}>*</span>
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="ابهام یا سوال خود را بطور واضح اینجا بنویسید..."
          ></textarea>
        </div>
      </div>
      <div>
        <label className={styles.consent}>
          <input type="checkbox" id="consent" />
          <p>
            {" "}
            جهت در ارتباط بودن با تیم رضایت کامل دارم
            <span className={styles.star}>*</span>
          </p>
        </label>
      </div>
      <button className={styles.submit_btn} type="submit">
        ارسال
      </button>
    </form>
  );
};

export default FormComponent;
