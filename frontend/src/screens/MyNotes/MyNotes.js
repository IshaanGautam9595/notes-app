import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import "./MyNotes.css";
import axios from "axios";
// import { toast } from "react-toastify";

const MyNotes = () => {

  const [notes, setNotes] = useState([]); 

    const deleteHandler = (id) => {
        if ( window.confirm("Are you sure?")) {
          
        }
      };

      const fetchNotes= async () => {
        const { data }= await axios.get('/api/notes');

        setNotes(data);
      };

      console.log(notes);

    useEffect(() => {
      fetchNotes();
    }, [])
    return (
       <MainScreen title="Welcome back Ishaan Gautam">
           <Link to = "createnote">
               <Button style={{marginLeft: 10 ,marginBottom: 6 }} size= "lg" >
                   Create New Notes
               </Button>
            </Link>
               {
               notes.map(note=> (
                <Accordion key={note._id}>
                <Accordion.Item eventKey="0">
                  <Card style={{ margin: 10 }} key={note._id}>
                    <Accordion.Header as={Card.Text} variant="link" eventKey="0">
                      <Card.Header style={{ display: "flex", width: "100%" }}>
                        <span
                      style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                       }}
                        >
                          {" "}
                          {note.title}
                        </span>
                        <div>
                          <Button href={`/note/${note._id}`}>Edit</Button>
                          <Button
                            variant="danger"
                            className="mx-2"
                            onClick={() => deleteHandler(note._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </Card.Header>
                    </Accordion.Header>
                    <Accordion.Body eventKey="0">
                      <Card.Body>
                        <h4>
                          <Badge variant="success">Category - {note.category}</Badge>
                        </h4>
                        <blockquote className="blockquote mb-0">
                          <p>{note.content}</p>
                          <footer className="blockquote-footer">
                            Created On - date
                          </footer>
                        </blockquote>
                      </Card.Body>
                    </Accordion.Body>
                  </Card>
                </Accordion.Item>
              </Accordion>
      
               ))}  
       </MainScreen>
)
};

export default MyNotes