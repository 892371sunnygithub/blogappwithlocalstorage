import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

const DummyFirebaseListing = () => {
  const [data, setData] = useState([]);
  const getFirebaseData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
    }
  };

  useEffect(() => {
    getFirebaseData();
  }, []);

  return (
    <div>
      <h2>Fetched Data from Firebase:</h2>
      {data.map((curElm) => (
        <h3 key={curElm.id}>{curElm.uname} </h3>
      ))}
    </div>
  );
};

export default DummyFirebaseListing;
