import { useState } from "react";
function MultiForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
// Handle input changes for all form fields
  const handleChange = (e) => {
  console.log(' Event target:', e.target);
  console.log(' Field name:', e.target.name);
  console.log(' Field value:', e.target.value);
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  
  console.log(' Updated formData:', { ...formData, [name]: value });
};
// Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Multi Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleChange}
            style={{ display: 'block', margin: '5px', padding: '8px', width: '100%' }}
          />
        </label>
        <br />
        <label htmlFor="">
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          style={{ display: 'block', margin: '5px', padding: '8px', width: '100%' }}
          />
        </label>
        <br />
        <label htmlFor="">
          password:
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          style={{ display: 'block', margin: '5px', padding: '8px' }}
          />
        </label>
        <br />
        <button type="submit" style={{ padding: '10px 20px', width: '100%' }}>Submit</button>
      </form>
    </div>
  );
}
export default MultiForm;
