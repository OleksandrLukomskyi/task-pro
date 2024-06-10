export const registerUser = async (data) => {
  try {
    const response = await fetch(
      "https://project-back-codewave1-rqmw.onrender.com/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};
export default { registerUser };
