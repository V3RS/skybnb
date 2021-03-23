import React from "react";
import { useParams } from "react-router";

export default function ProfilePage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Test {id}</h1>
    </div>
  );
}
