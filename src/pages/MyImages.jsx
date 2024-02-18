import { useEffect, useState } from "react";
import UserService from "../services/User.service";

const MyImages = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getImages();
    }, [])

    const getImages = async () => {
        try {
            const response = await UserService.getUserImages()
            console.log(response.data)
            setImages(response);
        } catch (error) {
            console.error('Error to show info', error);
        }

    }
    return (
        <>
            {
                images.map(image => (
                    <div key={image.id}>
                        <p>{image.title}</p>
                        <p>{image.description}</p>
                        <img src={image.url} alt="" />
                    </div>
                ))
            }
        </>
    )
}

export default MyImages;