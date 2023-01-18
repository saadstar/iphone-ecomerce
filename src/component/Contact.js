import React from "react";
export function Contact() {
    onsubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="" height="100vh">
            <h1>Contact Us</h1>
        <div className="mt-4 py-5">If you have any suggestion Let us know </div>
        <form className="form mt-3">
          <input
            type="text"
            placeholder="Put your complian here"
            className="btn"
          ></input>
          <button type="submit" className="btn btn-primary" onClick={onsubmit}>
            Send
          </button>
        </form>
        <form className="form mt-3">
          <div className="mt-3">E-Mail :</div>
          <input
            type="text"
            placeholder="put your mail here"
            className="btn"
          ></input>
          <div className="mt-3">Password:</div>
          <input
            type="text"
            placeholder="put your password here"
            className="btn"
          ></input>
          <button type="submit" className="btn btn-primary" onClick={onsubmit}>
            Go<span></span>
          </button>
            </form>
            <div className="d-flex">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-mail"></i>
                <i className="fa fa-twiter"></i>
                <p className="d-flex">You can also Follow us </p>
            </div>
      </div>
    );
}