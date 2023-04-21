import React, { useEffect, useState } from "react";

function ShowUserData() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="ShowDataForm">
      <h1>User Data:</h1>
      {userData && (
        <div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Age:</strong> {userData.age}</p>
          <p><strong>Parentage:</strong> {userData.parentage}%</p>
          <h2>Education:</h2>
          <ul>
            {userData.education.map((item, index) => (
              <li key={index}>
                <p><strong>Degree:</strong> {item.degree}</p>
                <p><strong>Institution:</strong> {item.institution}</p>
                <p><strong>Year:</strong> {item.year}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShowUserData;
