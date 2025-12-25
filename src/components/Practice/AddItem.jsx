import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./FirebaseConfig";

function AddItem() {
  const [itemname, SetItemName] = useState("");

  const handleAddItem = async () => {
    if (itemname.trim()) {
      try {
        await addDoc(collection(db, "items"), { pruductName: itemname });
        alert("Data Added");
        SetItemName("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <h1>Add Data into FirStore</h1>

      <div>
        <input
          type="text"
          value={itemname}
          onChange={(e) => SetItemName(e.target.value)}
          placeholder="enter items name"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </>
  );
}

export default AddItem;
