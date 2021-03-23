export const getOneSpot = async (id) => {
  const res = await fetch(`/api/spots/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log(res);
  const data = await res.json();
  return data;
};

export const getSpotPictures = async (id) => {
  const res = await fetch(`/api/spots/${id}/pictures`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log(res);
  const data = await res.json();
  return data;
};
