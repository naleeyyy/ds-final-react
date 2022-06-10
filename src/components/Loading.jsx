import { Oval } from "react-loader-spinner"

const Loading = () => {
    return (
        <Oval 
            color='White' 
            height={200} 
            width={200} 
            secondaryColor='Gray'
            wrapperStyle={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        />
    )
}

export default Loading