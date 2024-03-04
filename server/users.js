let users =  [];

const addUser = ({id,name}) =>{
    name = name.trim();
    const user = {id,name};
    users.push(user);
    return {user};
}
const removeUser = (id) =>{
    users = users.filter((user)=>user.id!==id);
 }

const getUser = (id) =>users.find((user)=>user.id===id);

const getAllUsers = ()=>users;

module.exports = {addUser,removeUser,getUser,getAllUsers};