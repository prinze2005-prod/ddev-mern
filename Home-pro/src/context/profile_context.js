import { createContext, useState } from "react";

const DefaultProfileContext = createContext({
  favorites: [],
  totalFavorites: 0,
  userProfile: () => {},
  removeFavorite: (photoId) => {},
  photoIsLiked: (photoId) => {},
});

export function DefaultProfileContextProvider(props) {
  const [defaultProfile, setDefaultProfile] = useState({});
  const [checkedState, setCheckedState] = useState(true);

  function userProfile() {
    setDefaultProfile({
      fname: "Saksham",
      lname: "Ohri",
      password: "sak",
      pnumber: "1112223333",
      street: "sait",
      postalCode: "T1T 1T1",
    });
    return defaultProfile;
  }

  function noUserProfile(photoId) {
    setDefaultProfile({
      fname: "",
      lname: "",
      password: "",
      pnumber: "",
      street: "",
      postalCode: "",
    });
    return defaultProfile;
  }

  function IsCheckedHandler(checkboxId) {
    return;
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    photoIsLiked: photoIsLikedHandler,
  };

  return (
    <DefaultProfileContext.Provider value={context}>
      {props.children}
    </DefaultProfileContext.Provider>
  );
}

export default DefaultProfileContext;
