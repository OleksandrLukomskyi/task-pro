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
      throw new Error("Registration failed");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export default { registerUser };
