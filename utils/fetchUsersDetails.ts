export const fetchUsersDetails = async () => {
    try {
      const token = sessionStorage.getItem("token");
  
      if (!token) {
        throw new Error("Authorization token not found");
      }
  
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/stats/users-details`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch user count");
      }
  
      const data = await response.json();
      
      console.log("Users details::", data)
      return data;
    } catch (error) {
      console.log("Error fetching users count:", error);
      // throw error;
    }
  };
  