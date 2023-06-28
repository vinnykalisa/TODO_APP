import React from 'react';
// import { useState } from 'react';

export interface Props {
  makeTodo: (newTitle: string) => void;
  isLoading: boolean;
}

export const NewTodo: React.FC<Props> = ({
  makeTodo,
  isLoading,
}) => {
  const [title, setTitle] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    makeTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
        value={title}
        onChange={event => setTitle(event.target.value)}
        disabled={isLoading}
      />
    </form>
  );
};
