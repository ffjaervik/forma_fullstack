'use client';

import { useState } from 'react';

import axios from 'axios';
import data from '@/data.json';

export default function Home() {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [allData, setAllData] = useState()

  interface Course {
  // create interface for db.json
  name: string
  
  }


const fetchData  = async () => {
  const response = await axios.get<Course[]>('http://localhost:4000/all_courses');
  const data = response.data
  setAllData(data)
}

const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
  let category: string = e.target.value
  setCategory(category)
  console.log(category);
}
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('hello');
    fetchData()
  };

  return (
    <main className="main">
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="categoría"
          className="form_input"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="descripción"
          className="p-5 form_input break-word"
        />
        <button
          type="submit"
          className="black_btn"
        >
          Buscar
        </button>
      </form>
    </main>
  );
}
