  export const signIn = (user) => {
    return {
      type: "LOGIN",
      payload: user,
    };
  };
  
  export const signOut = () => {
    return {
      type: "SIGNOUT",
      payload: null,
    };
  };
  