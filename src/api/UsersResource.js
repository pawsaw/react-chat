import { BASE_URL } from "./constants";

const RESOURCE = BASE_URL + 'users/';

const UsersResource = {

    findAllUsers: () => {
        return fetch(RESOURCE).then(response => response.json())
    },
    
    findUser: (userId) => {
        return fetch(RESOURCE + userId).then(response => response.json())
    }

};

export default UsersResource;