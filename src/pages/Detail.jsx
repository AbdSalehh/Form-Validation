import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [user, setUser] = useState();
  const { userId } = useParams();

  console.log("userId", userId);

  useEffect(() => {
    const fetchSingleUser = async () => {
      const data = await fetch(`http://localhost:3000/contacts/${userId}/`);
      const response = await data.json();
      console.log(response);
      setUser(response);
    };
    fetchSingleUser();
  }, [userId]);

  console.log("Masuk nih", user);

  return (
    <>
      <div className="user-list">
        <h1>{user?.name}</h1>
        <h1>{user?.email}</h1>
        <h1>{user?.phone}</h1>
      </div>
    </>
  );
}

export default Detail;
