import React from "react";
import Badge from "./badge";

const User = ({ users, match }) => {
    const userId = match.params.userId;
    const getUsersById = (id) => users.find((user) => user._id === id);
    const role = getUsersById(userId).role;
    return (
        <>
            <h1>{getUsersById(userId)?.firstName}</h1>
            <Badge role={role} />
        </>
    );
};

export default User;
