import React from "react";
import DatePicker from "react-bootstrap-date-picker";

export default ({ input, label, date, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label className="control-label">{label}</label>
    <DatePicker {...input} value={date} />
    {touched && error && <div className="error">{error}</div>}
  </div>
);
