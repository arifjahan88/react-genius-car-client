export const authToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  //JWT TOKEN
  fetch("https://react-genius-car-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("genius-car-token", data.token);
      //   navigate(from, { replace: true });
    });
};
