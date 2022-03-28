import { useState } from "react";

const Add = ({ onAdd }) => {

    const [text, setTask] = useState('')
    const [day, setday] = useState('')
    const [reminder, setReminder] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            return alert('add a task')
        }

        onAdd({ text, day, reminder })

        setTask('')
        setday('')
        setReminder(false)
    }

    return (
        <form className="container mt-3" onSubmit={onSubmit}>

            <div className="form-group mb-3">
                <label htmlFor="">Task</label>
                <input
                    type="text"
                    className="form-control"
                    value={text}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add task" />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="">Day & Time</label>
                <input
                    type="text"
                    className="form-control"
                    value={day}
                    onChange={(e) => setday(e.target.value)}
                    placeholder="Add task" />
            </div>

            <div className="form-group form-control-check mb-3">
                <label htmlFor="">Set Reminder</label>
                <input
                    checked={reminder}
                    type="checkbox"
                    placeholder="Add task"
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <div className="d-grid gap-2">
                <input type="submit" className="btn btn-dark" value="Save task" />
            </div>

        </form>
    )

}

export default Add;