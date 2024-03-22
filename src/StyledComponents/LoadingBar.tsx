import BasketballIcon from "../commonComponents/BasketballIcon/BasketballIcon";

function LoadingBar() {

    return(
        
        <div className="absolute top-0 right-0 z-50 flex justify-center items-center w-full h-full pb-4 sm:w-96 rounded-lg opacity-20 bg-gray-500">
            <BasketballIcon width="80" height="80" isLoading={true}/>
        </div>
    );
}

export default LoadingBar;