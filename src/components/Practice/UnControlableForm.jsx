import { useRef } from 'react';


function UnControlableForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log("Form Data Submitted: ", { name, email, password });
    
  };

  return (
    <>
      <h2>Uncontrolled Form Component</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" ref={nameRef} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" ref={emailRef} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" ref={passwordRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UnControlableForm;