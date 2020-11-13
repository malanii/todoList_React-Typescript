import React from 'react';
import {useHistory} from "react-router";

export const AboutPages:React.FC = () => {
    const history = useHistory();
    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
                используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять
                веков, но и перешагнул в электронный дизайн. </p>
            <button className='btn #ce93d8 purple lighten-3 ' onClick={()=>{history.push('/')}}>Обратно к списку дел</button>
        </>
    )
};