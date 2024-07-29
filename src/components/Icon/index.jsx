/**
 * icon component
 * renders a customizable icon
 *
 * props:
 * - icon (string): icon that will be used using Google Material Icons
 */

const Index = ({ icon, className }) => {
	return (
		<span className={`material-symbols-outlined ${className}`}>{icon}</span>
	)
}
export default Index;