/**
 * icon component
 * renders a customizable icon
 *
 * props:
 * - icon (string): icon that will be used using Google Material Icons
 * - size (string): the size of the icon
 * - color (string): indicates the color of the icon 
 */

const Index = ({ icon, size, color }) => {
	return (
		<span class={`material-symbols-outlined text-${color}-100 text-[${size}px]`}>{icon}</span>
	)
}
export default Index;