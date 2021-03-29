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

// export const getSpotPictures = async (id) => {
//   const res = await fetch(`/api/spots/${id}/pictures`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   // console.log(res);
//   const data = await res.json();
//   return data;
// };

// export const getHost = async (id) => {
//   const res = await fetch(`/api/spots/${id}/host`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   // console.log(res);
//   const data = await res.json();
//   return data;
// };

// might put these functions in SpotPage component

export const postReview = async (comment, rating, spot_id, user_id) => {
  const response = await fetch("/api/reviews/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment,
      rating,
      spot_id,
      user_id,
    }),
  });
  return await response.json();
};
