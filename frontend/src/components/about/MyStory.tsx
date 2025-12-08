export default function MyStory() {
	return (
		<section className='py-10'>
			<div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
				{/* Avatar / Image */}
				<div className='bg-blue-100 rounded-xl w-full h-[350px] flex items-center justify-center text-lg font-semibold text-gray-700'>
					Alibek Allaberganov
				</div>

				{/* Story Text */}
				<div>
					<h3 className='text-xl font-semibold text-white mb-3'>My Story</h3>
					<p className='text-gray-300 leading-relaxed'>
						Salom! Men Alibek Allaberganov, professional ingliz tili
						o‘qituvchisi va IELTS mutaxassisiman. 8 yildan ortiq tajribada dunyo
						bo‘ylab 1000 dan ortiq talabaga ingliz tilini o‘rgatdim va ularning
						IELTS imtihonlarida yuqori natijalar olishlariga yordam berdim.
					</p>
					<p className='text-gray-300 mt-3 leading-relaxed'>
						O‘zim IELTS imtihonida 8.5 ball to‘pladim va bu tajribamni
						talabalarim o‘rtasida muntazam ravishda bo‘lishaman. Mening o‘qitish
						metodologiyam zamonaviy va samarali bo‘lib, har bir talabaming
						individual ehtiyojiga qaratilgan.
					</p>
				</div>
			</div>
		</section>
	)
}
