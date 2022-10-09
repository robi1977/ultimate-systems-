import React from "react";
import { useForm } from "react-hook-form";

const SearchBar = () => {
  const { handleSubmit, error } = useForm();

  const submitForm = (data) => {

  }
  return (
    <div className="search-bar">
      <form method="POST" onSubmit={handleSubmit(submitForm)}>
        
      </form>
    </div>
  )
}

export default SearchBar 