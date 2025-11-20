function Conditions({isLoggin, user}) {
   isLoggin = null;

  // if (isLoggin) {
  //   return <h1>Welcome back</h1>
    
  // }else{
  //   return <h1>Please Login First</h1>
  // }
  
  // return isLoggin ? <h1>Welcome back</h1> : <h1>Please Login First</h1>;

  // return(
  //   <div>
  //     <h1>Notification</h1>
  //     {isLoggin && <h2>You have new message</h2>}
  //   </div>
  // )

  // switch (isLoggin) {
  //   case true:
  //     return <h1>Welcome back</h1>;
  //   case false:
  //     return <h1>Please Login First</h1>;
  //   default:
  //     return <h1>Unknown status</h1>;
  // }

  user = {isAdmin: true, isEditor: false};
  return(
    <>
    {user.isAdmin && <Admin/>}
    {user.isEditor && <Editor/>}
    {!user.isAdmin && !user.isEditor && <Guest/>}
    </>

  )
}
const Admin = () => <h1>Welcome Admin</h1>;
const Editor = () => <h1>Welcome Editor</h1>;
const Guest = () => <h1>Welcome Guest</h1>;
export default Conditions;