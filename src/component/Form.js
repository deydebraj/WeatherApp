import React from "react";

const Form = (props) => {
  return (
    <form className="location-form" onSubmit={props.getWeather}>
      <label>
        <span>City</span>
        <input type="text" name="city" placeholder="e.g. Seattle" required />
      </label>
      <label>
        <span>Country</span>
        <input type="text" name="country" placeholder="e.g. US" required />
      </label>
      <button type="submit">
        Search <span aria-hidden="true">→</span>
      </button>
    </form>
  );
};

export default Form;
