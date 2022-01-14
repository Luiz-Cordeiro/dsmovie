import FormCard from "components/FormCard";
import { useParams } from "react-router-dom";


function Form() {
    
    //Params pode se referir ao algumas variáveis definidas no App.tsx
    const params = useParams();

    return (
        <FormCard movieId = {`${params.movieId}`}/>
    );
}

export default Form;