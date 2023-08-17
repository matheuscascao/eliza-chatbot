
const SentMessage = (props: any) => {
    return(
        <div className="flex w-full justify-end mb-2">
            <div className="sent-message p-4 text-xs rounded-md w-4/5">
                {props.message}
            </div>
        </div>
    )
}

export default SentMessage;