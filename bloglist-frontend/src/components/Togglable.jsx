import { forwardRef, useImperativeHandle, useState } from "react";
import PropTypes from "prop-types";

const Togglable = forwardRef((props, refs) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(refs, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div className="container">
      <div style={hideWhenVisible}>
        <button className="btn btn-primary" onClick={toggleVisibility}>
          {props.buttonLabel}
        </button>
      </div>
      <div style={showWhenVisible} className="togglableContent">
        {props.children}
        <button className="btn btn-outline-primary" onClick={toggleVisibility}>
          {props.cancel || "cancel"}
        </button>
      </div>
    </div>
  );
});

Togglable.displayName = "Togglable";

export default Togglable;

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
