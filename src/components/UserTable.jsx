import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { deleteUser, setEditingUser } from '../features/users/usersSlice';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TableContainer = styled(motion.div)`
  overflow-x: auto;
  margin: 2rem 0;
  background-color: var(--card-background);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

const Th = styled.th`
  background-color: var(--primary-color);
  color: white;
  padding: 1rem;
  text-align: left;
  
  &:first-child {
    border-top-left-radius: 10px;
  }
  
  &:last-child {
    border-top-right-radius: 10px;
  }
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  color: var(--text-color);
`;

const ActionButton = styled(motion.button)`
  background-color: ${props => props.edit ? '#f39c12' : '#e74c3c'};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const UserTable = () => {
    const users = useSelector((state) => state.users.users) || [];
    const dispatch = useDispatch();
  
    if (users.length === 0) {
      return <p>No users found. Add a user to get started!</p>;
    }
  
    return (
      <TableContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Table>
          <thead>
            <tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>User ID</Th>
              <Th>Username</Th>
              <Th>Email</Th>
              <Th>Action</Th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <Td>{user.firstName}</Td>
                <Td>{user.lastName}</Td>
                <Td>{user.userId}</Td>
                <Td>{user.username}</Td>
                <Td>{user.email}</Td>
                <Td>
                  <ActionButton
                    edit
                    onClick={() => dispatch(setEditingUser(user))}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEdit /> Edit
                  </ActionButton>
                  <ActionButton
                    onClick={() => dispatch(deleteUser(user.userId))}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTrash /> Delete
                  </ActionButton>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    );
  };
  
  export default UserTable;