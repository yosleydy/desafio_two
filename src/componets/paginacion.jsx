import React from "react";

const Pagination = ({userPerPage, totalUser, pagina}) => {
    const pageNumbers = [];

    for(let i=1;i<=Math.ceil(totalUser / userPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={()=>pagina(number)} href="!#">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

export default Pagination;
