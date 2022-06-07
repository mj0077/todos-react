import React, { useEffect } from 'react'

const Funcs = ({ todoVar, setTodoVar, checked, updateChecked, setFilter }) => {

    useEffect(() => {
        console.log("Use Effect [checked] triggered")
        console.log(checked);
    })

    const applyFilter = e => {
        const filter = e.target.innerText.slice(0, 3);
        setFilter(filter);

        document.querySelectorAll('ul.filters li').forEach(li => li.style.border = 'none');
        e.target.style.border = '1px solid #4447';

    }

    const clearCompleted = () => {

        setTodoVar(todoVar.filter((value, idx) => {

            if (checked[idx]) {
                updateChecked((checked) => [...checked.slice(0, idx), ...checked.slice(idx + 1)]);
                return false;
            }
            return true;
        }));
        updateChecked((checked) => checked.map((check) => check ? false : false))
        // checked.forEach((check, idx) => {
        //     if (check) removeTodo(todoVar[idx]);
        // })
        // setTodoVar()
    }

    const labels = ['All', 'Active', 'Completed'];

    return (
        <div className='form-control d-flex funcs'>
            <p>{todoVar.length} {todoVar.length < 2 ? 'item' : 'items'} left</p>
            <ul type='none' className='filters d-flex'>

                {labels.map((label, idx) => <li onClick={applyFilter} key={idx}>{label}</li>)}

                {/* <li onClick={applyFilter}>All</li>
                <li onClick={applyFilter}>Active</li>
                <li onClick={applyFilter}>Completed</li> */}
            </ul>
            <span onClick={clearCompleted}>Clear Completed</span>
        </div>
    )
}

export default Funcs
