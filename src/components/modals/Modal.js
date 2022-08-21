import React from "react";
import "./modal.css";
const Modal = (props) => {
  let texts = [
    {
      date: new Date().toLocaleString("pl"),
      name: "James Wright",
      title: "Three Remarkable Shipwreck Stories from History",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque...",
    },
    {
      date: new Date().toLocaleString("pl"),
      name: "Letizia Biafore",
      title: "Day Twenty Eight: The First Mountain Pass",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque...",
    },
    {
      date: new Date().toLocaleString("pl"),
      name: "Delinda Cammarata",
      title: "What's The Future Of Blogging Platforms?",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque...",
    },
  ];
  return (
    <div className="modals">
      {texts.map((text, index) => {
        return (
          <div
            key={index}
            className={
              props.display === index ? "display-blok" : "display-none"
            }
          >
            <div className="content date">{text.date}</div>
            <div className="content name">{text.name}</div>
            <div className="content title">{text.title}</div>
            <div className="content desc">{text.description}</div>
            <button className="btn-modals">READ MORE</button>
          </div>
        );
      })}
    </div>
  );
};
export default Modal;
