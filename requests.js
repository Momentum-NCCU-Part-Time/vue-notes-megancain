const URL = "http://localhost:3000/notes/";

export const getNotes = () => {
  return fetch(URL).then((response) => response.json());
};

export const createNote = (note) => {
  const { title, body } = note;
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body, updatedAt: new Date() }),
  };

  return fetch(URL, requestOptions).then((response) => response.json());
};

export const updateNote = (note) => {
  const { id, title, body } = note;
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  };

  return fetch(URL, requestOptions).then((response) => response.json());
};

export const deleteNote = (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  };
  return fetch(URL, requestOptions).then((response) => response.json());
};

return fetch(URL, requestOptions);
