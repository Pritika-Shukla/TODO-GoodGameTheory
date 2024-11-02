import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import HomeView from "../../views/HomeView";
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot
} from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const HomeContainer: React.FC = () => {
  const { user } = useAuth();
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [collectionName, setCollectionName] = useState<string>("");

  useEffect(() => {
    if (user) {
      const userName = (user.displayName || user.email || user.uid)
        .split('@')[0]  
        .replace(/[^a-zA-Z0-9]/g, '_')  
        .toLowerCase();  
      
      setCollectionName(userName + "_todos");
    }
  }, [user]);

  useEffect(() => {
    if (user && collectionName) {
      const userTodosRef = collection(db, collectionName);
      
      const unsubscribe = onSnapshot(userTodosRef, (snapshot) => {
        const fetchedTodos: Todo[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Todo, 'id'>),
        }));
        setTodos(fetchedTodos);
      });

      return () => unsubscribe();
    }
  }, [user, collectionName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDelete = async (id: string) => {
    if (!user || !collectionName) return;
    await deleteDoc(doc(db, collectionName, id));
  };

  const handleSubmit = async () => {
    if (inputValue.trim() !== "" && user && collectionName) {
      const newTodo = {
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date(),
      };
      
      await addDoc(collection(db, collectionName), newTodo);
      setInputValue("");
    }
  };

  const handleToggle = async (id: string, completed: boolean) => {
    if (!user || !collectionName) return;
    await updateDoc(doc(db, collectionName, id), {
      completed: !completed,
    });
  };

  if (!collectionName) {
    return <div>Setting up your personal todo list...</div>;
  }

  return (
 
    <HomeView
      todos={todos}
      onDelete={handleDelete}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onToggle={handleToggle}
      inputValue={inputValue}
    />

  );
};

export default HomeContainer;