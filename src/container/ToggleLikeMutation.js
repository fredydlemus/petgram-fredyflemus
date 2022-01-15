import React from "react";
import { gql } from "@apollo/client";

export const LIKE_PHOTO = gql`
mutation likePhoto ($input: LikePhoto!){
    likePhoto(input: $input){
      id,
      liked,
      likes
    }
  }`;