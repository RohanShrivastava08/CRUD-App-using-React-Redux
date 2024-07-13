import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { addUser, updateUser, setEditingUser } from '../features/users/usersSlice';

const FormContainer = styled(motion.div)`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const Button = styled(motion.button)`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const FormTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const UserForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      userId: '',
      username: '',
      email: '',
    });
  
    const dispatch = useDispatch();
    const editingUser = useSelector((state) => state.users.editingUser);
  
    useEffect(() => {
      if (editingUser) {
        setFormData(editingUser);
      } else {
        setFormData({
          firstName: '',
          lastName: '',
          userId: '',
          username: '',
          email: '',
        });
      }
    }, [editingUser]);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (editingUser) {
        dispatch(updateUser(formData));
      } else {
        dispatch(addUser(formData));
      }
      setFormData({
        firstName: '',
        lastName: '',
        userId: '',
        username: '',
        email: '',
      });
      dispatch(setEditingUser(null));
    };
    
  return (
    <FormContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FormTitle>{editingUser ? 'Edit User' : 'Add New User'}</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="userId"
          placeholder="User ID"
          value={formData.userId}
          onChange={handleChange}
          required
          disabled={editingUser}
        />
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {editingUser ? 'Update User' : 'Add User'}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default UserForm;