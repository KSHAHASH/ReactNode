import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import "../App.css";
import styled from "styled-components";
import LoadingOutlined from "@ant-design/icons";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(email, password);
//   };

//   const fetchApi = () => {
//     fetch(`http://localhost:8000/api`, {
//       method: "GET",
//     })
//       .then((response) => {
//         response.json();
//       })
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="container">
//       <h1 className="display-4 text-center">Learning React</h1>
//       <br />

//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Email address</label>
//               <input
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//                 type="email"
//                 className="form-control"
//               />
//               <div className="form-text">
//                 We'll never share your email with anyone else.
//               </div>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <input
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//                 type="password"
//                 className="form-control"
//               />
//             </div>

//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

function Home() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const hello = () => alert("hello from shahash");

  const fetchApi = () => {
    fetch(`http://localhost:8000/api/users`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  };

  const fetchPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((data) => {
        setPosts(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  if (loading) {
    return (
      <LoadingOutlined
        className="display-1
        text-primary
        d-flex justify-content-center align-items-center"
        style={{height: "100vh"}}

      />
    );
  }

  return (
    <div className="container">
      {users &&
        users.map((user) => (
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              margin: "1px solid black",
              padding: "20px",
            }}
            key={user.age}
          >
            {user.name} is {user.age} years old
          </div>
        ))}
      <Button users={fetchApi} />
      <Button users={hello} />
      {posts &&
        posts.map((post) => <PostsList key={post.id}>{post.title}</PostsList>)}
    </div>
  );
}

export default Home;

//styled components for applying styles similar to css
const PostsList = styled.div`
  background-color: indigo;
  color: white;
  border: 1px solid black;
  padding: 20px;
`;
