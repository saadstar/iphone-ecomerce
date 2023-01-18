import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import { async } from "@firebase/util";
import { UserAuth } from "../Context/AuthContext";

export const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erorr, setError] = useState("");
  const Navigate = useHistory();
  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password)
      Navigate("/login")
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };
  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                ref={emailRef}
                placeholder="@gmail.com"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordRef}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" className="w-100 mt-3">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="text-center w-100 mt-2">
        Already have an acount! <Link to="/login">Login</Link>
      </div>
    </div>
  );
};
