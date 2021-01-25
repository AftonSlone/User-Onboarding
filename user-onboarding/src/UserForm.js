import React from "react";

export default function UserForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Add User</h2>
        <button disabled={disabled}>Submit</button>
        <div>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.termsOfService}</div>
        </div>
      </div>

      <div>
        <h4>User Information</h4>

        <div>
          <label>
            Name:
            <input
              value={values.name}
              onChange={onChange}
              name="name"
              type="text"
            />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              value={values.email}
              onChange={onChange}
              name="email"
              type="email"
            />
          </label>
        </div>

        <div>
          <label>
            Password:
            <input
              value={values.password}
              onChange={onChange}
              name="password"
              type="text"
            />
          </label>
        </div>

        <div>
          <label>
            I agree to the Terms of Service:
            <input
              checked={values.termsOfService}
              onChange={onChange}
              name="termsOfService"
              type="checkbox"
            />
          </label>
        </div>
      </div>
    </form>
  );
}
