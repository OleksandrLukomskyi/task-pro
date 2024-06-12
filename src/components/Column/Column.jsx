import Btn from "../Btn/Btn";
import { useState } from "react";

export default function Column({column, onDelete, onEdit}) {

    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(column.title);

    const handleSaveEdit = () => {
        onEdit(column._id, newTitle);
        setIsEditing(false);
    };

    return (
        <div className="column">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <button onClick={handleSaveEdit}>Save</button>
                </div>
            ) : (
                <h3 onDoubleClick={() => setIsEditing(true)}>{column.title}</h3>
            )}
            <button onClick={() => onDelete(column._id)}>Delete</button>
        </div>
    );
}