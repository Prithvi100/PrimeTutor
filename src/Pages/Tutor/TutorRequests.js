import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import { db } from "../../utils/Firebase";
import RequestCard from "./RequestCard";

export default function TutorRequests() {
  const { config, user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [requestData, setRequestData] = useState(true);

  useEffect(() => {
    if (user) {
      getRequestData();
    }
  }, []);

  const getRequestData = async (category) => {
    const tutorData = [];

    const q = query(
      collection(db, "requests"),
      where("tutorId", "==", user.userId)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tutorData.push({
        id: doc.id,
        ...doc.data(),
      });
      console.log(`${doc.id} => ${doc.data().name}`);
    });
    setRequestData(tutorData);
    setLoading(false);
    console.log(tutorData);
  };
  return (
    <div>
      <RequestCard requests={requestData} loading={loading} />
    </div>
  );
}
