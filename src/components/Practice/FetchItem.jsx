import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./FirebaseConfig";

function FetchItems() {
  const [items, SetItems] = useState([]);
  const [editItem, SetEditItem] = useState(null);
  const [newName, SetNewName] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "items"), (snapshot) => {
      const itemList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      SetItems(itemList);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "items", id));
      alert("data Deleted Succsyfuly");
    } catch (error) {
      console.log(error);
    }
  };
  // handleUpdate

  const handleUpdate = async (id) => {
    if (newName.trim() === "") {
      alert("Plase Enter name");
      return;
    }
    try {
      const itemRef = doc(db, "items", id);
      await updateDoc(itemRef, {
        pruductName: newName,
      });
      alert("Data Updated");
      SetEditItem(null);
      SetNewName("");
    } catch (error) {
      console.log(error);
    }
  };

  // handleEditClick

  const handleEditClick = (item) => {
    SetEditItem(item.id);
    SetNewName(item.pruductName);
  };

  return (
    <>
      <h4>Data List</h4>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>
                {editItem === item.id ? (
                  <input type="text" value={newName}   onChange={(e) => SetNewName(e.target.value)} />
                ) : (
                  item.pruductName
                )}
              </td>
              <td>
                {editItem === item.id ? (
                  <button onClick={() => handleUpdate(item.id)}>Update</button>
                ) : (
                  <button onClick={() => handleEditClick(item)}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FetchItems;
