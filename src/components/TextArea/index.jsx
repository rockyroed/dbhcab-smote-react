/**
 * textarea component
 * renders a customizable textarea
 */

const Index = ( { isDisabled, input, handleInputChange } ) => {
    return (
    <div>
        <textarea
                disabled={isDisabled}
                type="text"
                placeholder="Input your text here..."
                className={`border-primary bg-background text-black border-2 w-full h-[280px] rounded-[30px] resize-none focus:outline-none p-4`}
                value={input}
                onChange={(event) => handleInputChange(event)}
            />
    </div>
    )
}

export default Index;