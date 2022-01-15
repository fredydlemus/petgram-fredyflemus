import React from "react";
import { Article, ImgWrapper, Img } from "./styles";
import { FavButton } from "../FavButton";
import PropTypes from 'prop-types';
import { useNearScreen } from "../hooks/useNearScreen";
import { LIKE_PHOTO } from "../../container/ToggleLikeMutation";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg';


export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {


    const [show, element] = useNearScreen();




    const [mutateFunction, { data, loading, error }] = useMutation(LIKE_PHOTO);

    const handleFavClick = () => {
        mutateFunction({
            variables: {
                input: { id }
            }
        });


    };

    if (error) return <p>Submission error! ${error.message}</p>

    return (
        <Article ref={element}>
            {
                show && <>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </Link>
                    <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                </>
            }

        </Article >
    );
}

PhotoCard.propTypes = {
    id: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    likes: function (props, propName, componentName) {
        const propValue = props[propName]
        if (propValue === undefined) {
            return new Error(`${propName} Value must be defined`)
        }

        if (propValue < 0) {
            return new Error(`${propName} Value must be greater than 0`)
        }
    }
}