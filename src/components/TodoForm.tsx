import React, {useRef} from "react";
// import {useState} from "react";


interface  TodoFormProps {
    onAdd(title:string):void
}
export const TodoForm: React.FC<TodoFormProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null);

    // const [title, setTitle] = useState<string>('');
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // };
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
          props.onAdd(ref.current!.value);
            ref.current!.value = ''
            // setTitle('')

        }
    };

    return (
        <div className='input-field mt2'>
            <input
                ref={ref}
                // value={title}
                   // onChange={changeHandler}
                   type="text" id='title'
                   placeholder='введите название дела'
                   onKeyPress={keyPressHandler}
            />
            <label htmlFor='tittle' className='active'>Введите название дела</label>
        </div>
    )
};
