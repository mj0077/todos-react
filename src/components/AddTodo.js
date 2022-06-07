import React from 'react'

const AddTodo = (props) => {

    let { setTodoVar, updateChecked } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = e.target[0].value;
        // console.log(`e.target[0].value: ${data}`);

        setTodoVar(todoVar => [...todoVar, data]);
        e.target[0].value = '';

        updateChecked(checked => [...checked, false])
        // console.log(checked)
    }

    return (
        <>
            <form className="form mt-4" onSubmit={handleSubmit}>
                <input className="form-control addTodo" placeholder="What needs to be done?" />
            </form>
        </>
    )
}

export default AddTodo
