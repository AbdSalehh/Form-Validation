import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginSchema } from "../utils/formValidation";
import { useEffect, useState } from "react";
import { addUser, deleteUser, getUsers } from "../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState();
  // const [showUsers, setShowUsers] = useState(false);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  // const handleClick = () => {
  //   fetchUsers();
  //   setShowUsers(!showUsers);
  // };

  const createNewUser = async (values) => {
    await addUser(values.name, values.email, values.phone);
    fetchUsers();
  };

  const deleteSelectedUser = async (id) => {
    const data = await deleteUser(id);
    fetchUsers();
    return data;
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="App">
        <Formik
          initialValues={{ name: "", email: "", phone: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            createNewUser(values);
          }}
        >
          <Form>
            <div>
              <label htmlFor="name">name</label>
              <Field id="name" name="name" type="text" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <Field id="email" name="email" type="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <div>
              <label htmlFor="phone">phone</label>
              <Field id="phone" name="phone" type="number" />
              <ErrorMessage
                name="phone"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>

      <div className="user-list">
        {users?.length > 0 &&
          users.map((user) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <h5>{user.phone}</h5>
              <button onClick={() => deleteSelectedUser(user.id)}>
                Delete
              </button>
              <Link to={`/contacts/${user.id}`}>Detail</Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default Home;
