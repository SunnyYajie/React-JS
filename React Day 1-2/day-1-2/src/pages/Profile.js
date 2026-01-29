import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeProfile } from "./ChangeProfile";


export const Profile = () => {
    const { username } = useContext(AppContext);

    return (
        <div>
            <h1> Welcome to the Profile Page User: {username}</h1>
            <ChangeProfile />
        </div>

    );
}