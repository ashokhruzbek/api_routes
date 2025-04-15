import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoCard from "../components/TodoCard";

function Todos() {
  const { userId } = useParams();
  console.log(userId);

  const [todos, setTodos] = useState(null);
  useEffect(() => {
    try {
      const info = async () => {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}/todos`
        );
        console.log(res.data);
        setTodos(res.data);
      };
      info();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {todos?.map((todo) => {
        return <TodoCard todo={todo} />;
      })}
    </>
  );
}

export default Todos;