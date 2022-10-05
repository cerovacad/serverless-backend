import * as functions from "firebase-functions";

const onToDoCreated = functions.firestore
  .document("todos/{todoId}")
  .onCreate((snapshot, context) => {
    const todo = snapshot.data();
    console.log("Created new todo", todo);
    return null;
  });

export default onToDoCreated;
