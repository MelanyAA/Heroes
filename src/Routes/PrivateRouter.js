import React from "react";
import { Route, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRouter = ({
  isAuthenticated,
  element: Element,
  ...rest
}) => {
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      element={(props) =>
        isAuthenticated ? <Element {...props} /> : navigate("/Login")
      }
    />
  );
};
PrivateRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  element: PropTypes.func.isRequired,
};
