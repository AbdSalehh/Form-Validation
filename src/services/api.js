const BASE_URL = "https://notes-api.dicoding.dev/v2";

export const getNotes = async () => {
  const data = await fetch(`${BASE_URL}/notes`);
  //   const data = await fetch('http://localhost:3000/users');

  const response = await data.json();
  return response.data;
};

export const createNote = async (title, body) => {
  const data = await fetch(`${BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  const response = await data.json();
  return response.data;
};

export const deleteNote = async (id) => {
  const data = await fetch(`${BASE_URL}/notes/${id}`, {
    method: "DELETE",
  });

  const response = await data.json();
  return response;
};
