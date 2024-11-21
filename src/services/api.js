const BASE_URL = "https://notes-api.dicoding.dev/v2";

export const getUsers = async () => {
  // const data = await fetch(`${BASE_URL}/notes`);
  const data = await fetch("http://localhost:3000/contacts");

  const response = await data.json();
  return response;
};

export const addUser = async (name, email, phone) => {
  const data = await fetch("http://localhost:3000/contacts", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      phone,
    }),
  });

  const response = await data.json();
  return response;
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

export const deleteUser = async (id) => {
  const data = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: "DELETE",
  });

  const response = await data.json();
  return response;
};
