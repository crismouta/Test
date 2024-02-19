import { useEffect, useState } from "react";
import { AuthService } from '../services/AuthService';

const MyImages = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');

    const authApi = AuthService();

    useEffect(() => {
        authApi.fetchImages().then(res => {
            localStorage.setItem('auth_token', res.data.token);
            localStorage.setItem('auth_user', res.data.user.name);
            setImages(res.data);
        }).catch(error => {
            setError(error.response.data.errors.msg);
        });
    }, [authApi])

    /* const getImages = async () => {
        try {
            const response = await fetchData()
            console.log(response.data)
            setImages(response);
        } catch (error) {
            console.error('Error to show info', error);
        }
    } */

    

    setError('');

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