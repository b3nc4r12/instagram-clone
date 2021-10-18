import Post from "./Post"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { db } from "../firebase"
import { useEffect, useState } from "react"

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubcribe = onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
                setPosts(snapshot.docs);
            }
        )

        return () => {
            unsubcribe();
        }
    }, [db])

    return (
        <div>
            {posts.map((post) => {
                if (post.data().image) {
                    return (
                        <Post
                            key={post.id}
                            id={post.id}
                            username={post.data().username}
                            userImg={post.data().profileImg}
                            img={post.data().image}
                            caption={post.data().caption}
                        />
                    )
                }
            })}
        </div>
    )
}

export default Posts