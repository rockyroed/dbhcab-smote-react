/**
 * textarea component
 * renders a customizable textarea
 *
 * props:
 * - width: the width of the textarea
 * - height: the height of the textarea
 */

const Index = ({width, height}) => {
    return (
    <div>
        <textarea
                type="text"
                placeholder="Input your text here..."
                className={`border-primary-100 bg-background-100 text-black border-2 w-[${width}px] h-[${height}px] rounded-[30px] resize-none focus:outline-none p-4`}
            />
    </div>
    )
}

export default Index;