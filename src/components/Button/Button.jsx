import React from "react";
import PropTypes from "prop-types";
import "./Button.css";


const Button = ({ text, onClick, type = "primary", disabled = false, ariaLabel }) => {
    return (
        <button
            className={`btn btn-${type}`}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel || text}
            >
                {text}
            </button>
    );
};


Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(["primary", "secondary", "danger", "success", "warning"]),
    disabled: PropTypes.bool,
    ariaLabel: PropTypes.string,
};

export default Button;