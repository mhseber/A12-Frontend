import { useEffect, useState } from "react";

const useAnno = () => {
    const [anno, setAnno] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('Anno.json')
            .then(res => res.json())
            .then(data => {
                setAnno(data);
                setLoading(false);
            });
    }, [])
    return [anno, loading]
};

export default useAnno;