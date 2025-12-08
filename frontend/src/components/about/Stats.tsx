export default function Stats() {
	const stats = [
		{ number: '1000+', label: 'O‘qitilgan talabalar' },
		{ number: '8+', label: 'Yillik tajriba' },
		{ number: '8.5', label: 'IELTS natijasi' },
		{ number: '95%', label: 'Muvaffaqiyat darajasi' },
	]

	return (
		<section className='py-10'>
			<div className='max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6'>
				{stats.map((item, index) => (
					<div
						key={index}
						className='bg-[#0d1424] border border-gray-700 rounded-xl py-6 text-center'
					>
						<div className='text-3xl font-bold text-blue-400'>
							{item.number}
						</div>
						<div className='text-gray-300 text-sm mt-2'>{item.label}</div>
					</div>
				))}
			</div>
		</section>
	)
}
