/*
  This component is used to display an paragraph
  that contains one field of the user object information.
  if the value is empty, the component will not be displayed.
*/

import React from "react";

function UserField({ field, value }: { field: string; value: string }) {
  return (
    <p>
      {value != "" && value != null ? (
        <p>
          <b>{field}:</b> {value}
        </p>
      ) : (
        <p></p>
      )}
    </p>
  );
}

export default UserField;
