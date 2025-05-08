import React, {useEffect, useState} from "react";

const userPosts_uri = "https://jsonplaceholder.typicode.com/posts";

const FetchUserPage = () => {

    const [user, setUser] = useState([]);

    const userHandler = async () => {
        const response = await fetch(userPosts_uri, {
            method: "GET"
        });
        const responseJson = await response.json();
        setUser(responseJson);
    }

    useEffect(() => {
        const userHandlerResponse = userHandler();
        // console.log(userHandlerResponse);
    }, []);

    // console.log(user);

    return (
        <div>
            {
                user.map((item) => {
                    return (
                        <div className="userSection">
                            <h2 style={{color: "blue"}}> {item.title}</h2>
                            <h3 style={{color: "green"}}>{item.body}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FetchUserPage;