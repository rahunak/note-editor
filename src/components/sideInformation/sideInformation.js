import React from "react";
import s from "./sideInformation.module.css";
function SideInformation(props) {
    return (

        <aside className={s.sideInformation}>
            <h1>Note Editor</h1>
            Here will be some information about app

            <ul>
                <li>Ваши заметки могут содержать #теги</li>
                <li>Для поиска нужной заметки воспользуйтесь панелью поиска.
                    Введите необходимый тег и заметка будет найдена.
                </li>
                <li>
                    Внимание : теги воодить латиницей
                </li>
                <hr/>
                <li>
                    Test for example,ctrl+C,ctrl+V
                    #first tag #second_tag #thirdTag
                </li>
                <li>
                    Test for example,ctrl+C,ctrl+V
                    #BOOS  #salary
                </li>
            </ul>



        </aside>
    );
}

export default SideInformation;