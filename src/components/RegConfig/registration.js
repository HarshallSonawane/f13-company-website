// frontend/components/registration.js

export const registerUser = async (username, password) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    // Check if the response status is 201 (Created) and then display the success message
    if (response.status === 201) {
      alert("Registration successful!");
    }
  } catch (error) {
    console.error("Registration error:", error.message);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    // If response is successful, display success message
    alert("Login successful!");
    return true
  } catch (error) {
    // Log the error
    console.error("Login error:", error.message);

    // Handle login failure, e.g., display an error message to the user
    alert("Login failed. Please check your credentials and try again.");
  }
};


export const handleLogout = async (setLoggedIn) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/logout/", {
            method: "POST",
        });
        if (response.ok) {
            setLoggedIn(false); // Update the login state
            alert("Logout successful!"); // Optionally display a success message
        } else {
            throw new Error("Logout failed");
        }
    } catch (error) {
        console.error("Error during logout:", error.message);
        alert("Logout failed. Please try again."); // Display an error message to the user
    }
};
