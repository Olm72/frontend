import React, {useState, useEffect} from "react";
import "../styles/App.css";
import backgroundImage from "../assets/images/cargango-resultados-nexeus-big-data.jpg";


const LoadingScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 2000); 

        return () => clearTimeout(timeout);
    }, []);

    return (
        isVisible && (
            <div className="loading-screen">
                <img
                    src={backgroundImage}
                    alt="Cargando"
                    className="loading-image"
                />
                <div className="loading-text">Cargando datos...</div>
            </div>
        )
    );
};

export default LoadingScreen;