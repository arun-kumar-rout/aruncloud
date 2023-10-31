import Image from "next/image";

const GoogleButton = () => {
    return ( 
        <div className="flex justify-center items-center w-full h-full ">
            <Image className="rounded-xl" src="/assets/images/google.png" alt="google" width={200} height={40}/>
        </div>
     );
}
 
export default GoogleButton;