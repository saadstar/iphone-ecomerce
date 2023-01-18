import { Link, useHistory } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { Card, Form, Button } from "react-bootstrap";
import { UserAuth } from "../Context/AuthContext";

export const LogIn = () => {
  const emailref = useRef();
  const passwordref = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useHistory();
  const { login } = UserAuth();

  const formHandler = async (e) => {
    e.preventDefault();  
    try {
      await login(email, password);
      navigate("/hhk");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
}

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={formHandler}>
            <Form.Group>
              <Form.Label htmlFor="email">Email:</Form.Label>
              <Form.Control
                placeholder="@gmail.com"
                type="email"
                ref={emailref}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
                id="email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label id="password">Password:</Form.Label>
              <Form.Control
                placeholder="password"
                type="password"
                ref={passwordref}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                name="password"
                id="password"
              />
            </Form.Group>
          </Form>
            <Button className="mt-3">Login</Button>
        </Card.Body>
      </Card>
      <div className="text-center w-100 mt-2">
    Need an account!<Link to="/signup">SignUp</Link>
      </div>
    </div>
  );
}
