export const getOneSpot = async (id) => {
  const res = await fetch(`/api/spots/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};
