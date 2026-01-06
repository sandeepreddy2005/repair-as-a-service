const handleSignup = async () => {
  try {
    const res = await fetch(
      "https://repair-as-a-service-backend.onrender.com/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await res.json();
    alert(data.message);
  } catch (error) {
    alert("Signup failed");
    console.error(error);
  }
};

