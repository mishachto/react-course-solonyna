import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../..";


const Users = () => {
    const users = useSelector(getUsers());
    return (
        <>
            {users?.map(({ firstName, id, lastName, eMail }) => (
                <div key={id}>
                    <div>{firstName}</div>
                    <div>{lastName}</div>
                    <div>{eMail}</div>
                </div>
            ))}
        </>
    );
};
export default Users;

