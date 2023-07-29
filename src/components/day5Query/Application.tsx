import React from "react";

function Application() {
  return (
    <form>
      <div>
        <h1>heading 1</h1>
        <h2>heading 2</h2>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="bio">bio</label>
        <input type="text" id="bio" />
      </div>
      <div>
        <label htmlFor="job-location">Job Location</label>
        <select id="job-location">
          <option value="">Select country</option>
          <option value="US">United State</option>
          <option value="IND">India</option>
          <option value="UK">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="AU">Australia</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" name="terms" id="terms" />I got aggree to terms
          and conditions.
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Application;
