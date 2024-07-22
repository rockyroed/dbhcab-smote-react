const Index = ({ icon, classifier }) => {
	return (
		<div className="border-primary-100 bg-background-100 text-text-100 hover:bg-primary-100 hover:text-white cursor-pointer border-2 w-[520px] h-[320px] rounded-[24px] flex flex-col gap-y-[16px] justify-center items-center">
			<span class="material-symbols-outlined text-[40px]">{icon}</span>
			<h1 className="font-semibold text-[40px]">{classifier}</h1>
		</div>
	);
};

export default Index;
