/**
 * textarea component
 * renders a customizable textarea
 */

const Index = () => {
    return (
    <div>
        <textarea
                type="text"
                placeholder="Input your text here..."
                className={`border-primary-100 bg-background-100 text-black border-2 w-[1120px] h-[410px] rounded-[30px] resize-none focus:outline-none p-4`}
            />
    </div>
    )
}

export default Index;