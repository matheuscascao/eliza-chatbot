
const ReceivedMessage = (props: any) => {
    return(
        <div className="flex w-full justify-start mb-2">
            <div className="received-message p-4 text-xs rounded-md w-4/5">
                {props.message}
            </div>
        </div>
    )
}

export default ReceivedMessage;