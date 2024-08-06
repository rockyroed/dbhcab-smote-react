/**
 * textarea component
 * renders a customizable textarea
 */

const Index = ( { isDisabled } ) => {
    return (
    <div>
        <textarea
                disabled={isDisabled}
                type="text"
                placeholder="Input your text here..."
                className={`border-primary bg-background text-black border-2 w-full h-[280px] rounded-[30px] resize-none focus:outline-none p-4`}
            />
    </div>
    )
}

export default Index;