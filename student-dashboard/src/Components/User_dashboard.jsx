import { useContext } from "react";
import Context from "./Context";

const User_dashboard = () => {

    const { student } = useContext(Context);
    const semester_data= student.map((e)=>(e.semester));
    

    return (
        <>
            <div className="h-[100px] w-[100px] border-2 border-black">
                {student.map((item) => {
                    const { name, email, password, rollId, semesters, fine } = item;
                    return <div>
                        <h1 className="text-black">{name}</h1>
                        <h1>{email}</h1>
                        <h1>{password}</h1>
            
                        <h1>{fine}</h1>
                    



                    </div>
                })}
            </div>

        </>
    )
}

export default User_dashboard;