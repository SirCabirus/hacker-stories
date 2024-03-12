import {datas} from "../data/data";

const List = () => {

    return (
      <>
      <ul>
        {datas.map((item) => {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>&nbsp;
              <span>{item.author}</span>&nbsp;
              <span>{item.num_comments}</span>&nbsp;
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
      
      <ul>
      {datas.map((item) => {
          return (
            <li key={item.objectID}>
              Titel: {item.title}&nbsp;
              URL: <a href={item.url}>{item.url}</a>&nbsp;
              Autor: {item.author}&nbsp;
            </li>
          );
        })}
      </ul>
      </>
      
    );
  }

export default List;