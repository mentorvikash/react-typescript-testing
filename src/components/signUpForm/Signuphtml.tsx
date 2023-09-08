import React from "react";
import style from "./Signuphtml.module.css";

function Signuphtml() {
  return (
    <div className={style.container}>
      <form className={style.form}>
        <label>
          First Name:
          <input type="text" name="fname" />
        </label>
        <label>
          Sirst Name:
          <input type="text" name="lname" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <label>
          Confirm Password:
          <input type="text" name="confirmPassword" />
        </label>
        <button className="submitBtn" type="submit" name="password">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signuphtml;
