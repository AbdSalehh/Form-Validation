import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginSchema } from "./utils/formValidation";
import { useEffect, useState } from "react";
import { createNote, deleteNote, getNotes } from "./services/api";

function App() {
  const [notes, setNotes] = useState();

  const fetchNotes = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  const createNewNote = async (values) => {
    await createNote(values.title, values.body);
    fetchNotes();
  };

  const deleteSelectedNote = async (id) => {
    const data = await deleteNote(id);
    fetchNotes();
    return data;
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  console.log("datanya ada nih", notes);
  return (
    <>
      <div className="App">
        <Formik
          initialValues={{ title: "", body: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            createNewNote(values);
          }}
        >
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field id="title" name="title" type="title" />
              <ErrorMessage
                name="title"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <div>
              <label htmlFor="body">Body</label>
              <Field id="body" name="body" type="body" />
              <ErrorMessage
                name="body"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>

      <div className="note-list">
        {notes?.length > 0 &&
          notes.map((note) => (
            <div key={note.id}>
              <h1>{note.name}</h1>
              <h3>{note.email}</h3>
              <button
                type="button"
                onClick={() => deleteSelectedNote(`${note.id}`)}
              >
                Hapus Catatan
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
