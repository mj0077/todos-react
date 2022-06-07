import React, { useEffect } from 'react';

const Todo = ({ data, todoVar, setTodoVar, checked, updateChecked, filter }) => {

    useEffect(() => {
        // console.log("Use Effect [filter] triggered")
        // console.log(filter);
        const todos = document.querySelectorAll('div.todo')
        todos.forEach((div, idx) => {
            switch (filter) {
                case 'All':
                    div.style.display = 'block';
                    break;
                case 'Act':
                    div.style.display = checked[idx] ? 'none' : 'block';
                    break;
                case 'Com':
                    div.style.display = !checked[idx] ? 'none' : 'block';
                    break;
            }
        })
    }, [filter])

    useEffect(() => {
        // console.log("Use Effect [checked] triggered")
        // console.log(checked);

        // CHECKING / UNCHECKING THE CHECKBOXES (whenever todo is removed, or)
        let inputs = document.getElementsByClassName('checkbox');
        // console.log(inputs)

        checked.forEach((check, idx) => {
            inputs[idx].checked = check ? true : false;
            inputs[idx].nextSibling.style.textDecoration = check ? 'line-through' : 'none';
            inputs[idx].nextSibling.style.color = check ? 'gray' : 'black';
        });

    }, [checked]);

    const handleCheck = (e) => {
        const label = e.target.nextSibling;
        const check = e.target.checked;

        // label.style.textDecoration = check ? 'line-through' : 'none';
        // label.style.color = check ? 'gray' : 'black';

        let idx = todoVar.indexOf(label.innerText);
        updateChecked((checked) => [...checked.slice(0, idx), (check ? true : false), ...checked.slice(idx + 1)])
    }

    const removeTodo = (e) => {
        console.log(e);
        let label = e.target.previousSibling;

        setTodoVar(todoVar.filter((value, idx) => {
            if (value === label.innerText) {
                updateChecked((checked) => [...checked.slice(0, idx), ...checked.slice(idx + 1)]);
                return false;
            }
            return true;
        }));

    }

    return (
        <div className="form-control p-2 todo">
            <input className="checkbox" type="checkbox" name={data.slice(0, 2)} value={data} onChange={handleCheck} />
            <label htmlFor={data.slice(0, 2)}>{data}</label>
            <span onClick={removeTodo}>x</span>
        </div>
    );
};

export default Todo;